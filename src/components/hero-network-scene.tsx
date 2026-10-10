"use client";

import { cn } from "@/lib/utils";
import type * as ThreeTypes from "three";
import { useEffect, useRef, useState } from "react";

interface HeroNetworkSceneProps {
  className?: string;
}

export default function HeroNetworkScene({
  className,
}: HeroNetworkSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let disposed = false;
    let inViewport = false;
    let frameId = 0;
    let lastFrame = 0;
    let scrollOffset = window.scrollY;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let prefersReducedMotion = motionPreference.matches;
    let renderer: ThreeTypes.WebGLRenderer | undefined;
    let scene: ThreeTypes.Scene | undefined;
    let camera: ThreeTypes.PerspectiveCamera | undefined;
    let network: ThreeTypes.Group | undefined;
    let orbit: ThreeTypes.Group | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let intersectionObserver: IntersectionObserver | undefined;
    const materials = new Set<ThreeTypes.Material>();

    const pointer = { x: 0, y: 0 };

    const stopRendering = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    };

    const renderFrame = (time: number) => {
      if (!renderer || !scene || !camera || !network || !orbit || disposed) {
        return;
      }

      if (!prefersReducedMotion && time - lastFrame < 1000 / 30) {
        frameId = requestAnimationFrame(renderFrame);
        return;
      }
      lastFrame = time;

      if (!prefersReducedMotion) {
        network.rotation.y = time * 0.00008 + pointer.x * 0.18 + scrollOffset * 0.00012;
        network.rotation.x = -0.16 + pointer.y * 0.12 + scrollOffset * 0.00004;
        orbit.rotation.z = time * 0.000025;
      }

      renderer.render(scene, camera);
      if (!prefersReducedMotion && inViewport) {
        frameId = requestAnimationFrame(renderFrame);
      }
    };

    const startRendering = () => {
      if (!renderer || !inViewport || document.visibilityState !== "visible") {
        return;
      }

      stopRendering();
      if (prefersReducedMotion) {
        renderFrame(performance.now());
      } else {
        frameId = requestAnimationFrame(renderFrame);
      }
    };

    const resize = () => {
      if (!renderer || !camera) return;
      const { width, height } = container.getBoundingClientRect();
      if (width <= 0 || height <= 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      if (prefersReducedMotion && inViewport) {
        startRendering();
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      if (prefersReducedMotion) return;
      const bounds = container.getBoundingClientRect();
      pointer.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
      pointer.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    };

    const onPointerLeave = () => {
      pointer.x = 0;
      pointer.y = 0;
    };

    const onScroll = () => {
      scrollOffset = window.scrollY;
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        startRendering();
      } else {
        stopRendering();
      }
    };

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      startRendering();
    };

    const initialize = async () => {
      const THREE = await import("three");
      if (disposed) return;

      try {
        renderer = new THREE.WebGLRenderer({
          canvas,
          alpha: true,
          antialias: true,
          powerPreference: "low-power",
        });
      } catch (error) {
        console.warn(
          "The 3D hero is unavailable; showing its static network illustration instead.",
          error,
        );
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(36, 1, 0.1, 30);
      camera.position.z = 4.6;
      network = new THREE.Group();
      orbit = new THREE.Group();
      scene.add(network, orbit);

      const positions: ThreeTypes.Vector3[] = [];
      const pointCount = 88;
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));

      for (let index = 0; index < pointCount; index += 1) {
        const y = 1 - (index / (pointCount - 1)) * 2;
        const ringRadius = Math.sqrt(1 - y * y);
        const angle = goldenAngle * index;
        positions.push(
          new THREE.Vector3(
            Math.cos(angle) * ringRadius * 1.18,
            y * 1.18,
            Math.sin(angle) * ringRadius * 1.18,
          ),
        );
      }

      const edgePositions: number[] = [];
      const seenEdges = new Set<string>();
      positions.forEach((point, index) => {
        positions
          .map((candidate, candidateIndex) => ({
            candidate,
            candidateIndex,
            distance: point.distanceToSquared(candidate),
          }))
          .filter(({ candidateIndex }) => candidateIndex !== index)
          .sort((left, right) => left.distance - right.distance)
          .slice(0, 3)
          .forEach(({ candidate, candidateIndex }) => {
            const first = Math.min(index, candidateIndex);
            const second = Math.max(index, candidateIndex);
            const edgeKey = `${first}:${second}`;
            if (seenEdges.has(edgeKey)) return;
            seenEdges.add(edgeKey);
            edgePositions.push(
              point.x,
              point.y,
              point.z,
              candidate.x,
              candidate.y,
              candidate.z,
            );
          });
      });

      const edgesGeometry = new THREE.BufferGeometry();
      edgesGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(edgePositions, 3),
      );
      const edges = new THREE.LineSegments(
        edgesGeometry,
        new THREE.LineBasicMaterial({
          color: 0x6b9690,
          transparent: true,
          opacity: 0.28,
        }),
      );
      network.add(edges);

      const pointsGeometry = new THREE.BufferGeometry().setFromPoints(positions);
      const points = new THREE.Points(
        pointsGeometry,
        new THREE.PointsMaterial({
          color: 0x357e79,
          size: 0.045,
          sizeAttenuation: true,
          transparent: true,
          opacity: 0.85,
        }),
      );
      network.add(points);

      const wireframe = new THREE.Mesh(
        new THREE.SphereGeometry(1.18, 28, 20),
        new THREE.MeshBasicMaterial({
          color: 0x729a94,
          wireframe: true,
          transparent: true,
          opacity: 0.065,
        }),
      );
      network.add(wireframe);

      const orbitMaterial = new THREE.MeshBasicMaterial({
        color: 0xb18a58,
        transparent: true,
        opacity: 0.28,
      });
      const outerOrbit = new THREE.Mesh(
        new THREE.TorusGeometry(1.55, 0.006, 4, 120),
        orbitMaterial,
      );
      outerOrbit.rotation.x = 1.08;
      outerOrbit.rotation.y = 0.32;
      const innerOrbit = new THREE.Mesh(
        new THREE.TorusGeometry(1.43, 0.004, 4, 120),
        orbitMaterial.clone(),
      );
      innerOrbit.rotation.x = -0.74;
      innerOrbit.rotation.y = 0.42;
      orbit.add(outerOrbit, innerOrbit);

      scene.traverse((object) => {
        const renderable = object as ThreeTypes.Object3D & {
          material?: ThreeTypes.Material | ThreeTypes.Material[];
        };
        if (Array.isArray(renderable.material)) {
          renderable.material.forEach((material) => materials.add(material));
        } else if (renderable.material) {
          materials.add(renderable.material);
        }
      });

      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
      resize();
      intersectionObserver = new IntersectionObserver(
        ([entry]) => {
          inViewport = entry.isIntersecting;
          if (inViewport) {
            startRendering();
          } else {
            stopRendering();
          }
        },
        { rootMargin: "80px" },
      );
      intersectionObserver.observe(container);
      container.addEventListener("pointermove", onPointerMove, {
        passive: true,
      });
      container.addEventListener("pointerleave", onPointerLeave, {
        passive: true,
      });
      window.addEventListener("scroll", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibilityChange);
      motionPreference.addEventListener("change", onMotionPreferenceChange);
      setIsReady(true);
    };

    void initialize();

    return () => {
      disposed = true;
      stopRendering();
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      scene?.traverse((object) => {
        const renderable = object as ThreeTypes.Object3D & {
          geometry?: ThreeTypes.BufferGeometry;
        };
        renderable.geometry?.dispose();
      });
      materials.forEach((material) => material.dispose());
      renderer?.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("pointer-events-auto", className)}
    >
      <svg
        viewBox="0 0 240 240"
        className={cn(
          "absolute inset-0 size-full text-primary transition-opacity duration-700",
          isReady ? "opacity-10" : "opacity-25",
        )}
      >
        <circle cx="120" cy="120" r="75" fill="none" stroke="currentColor" />
        <circle cx="120" cy="120" r="98" fill="none" stroke="currentColor" />
        <path
          d="M52 91 91 52l44 27 51-7 16 48-35 39-51 24-47-33-17-59Z"
          fill="none"
          stroke="currentColor"
        />
        <path
          d="m52 91 64 59m19-71 16 80m35-87-35 87M91 52l25 98"
          fill="none"
          stroke="currentColor"
          strokeOpacity=".6"
        />
        <g fill="currentColor">
          <circle cx="52" cy="91" r="4" />
          <circle cx="91" cy="52" r="4" />
          <circle cx="135" cy="79" r="4" />
          <circle cx="186" cy="72" r="4" />
          <circle cx="202" cy="120" r="4" />
          <circle cx="167" cy="159" r="4" />
          <circle cx="116" cy="183" r="4" />
          <circle cx="69" cy="150" r="4" />
        </g>
      </svg>
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 size-full transition-opacity duration-700",
          isReady ? "opacity-100" : "opacity-0",
        )}
      />
    </div>
  );
}
