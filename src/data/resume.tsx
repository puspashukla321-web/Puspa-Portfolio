import Link from "next/link";
import { ExpressJsIcon, Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/icons/svgs/reactLight";
import { NextjsIconDark } from "@/components/icons/svgs/nextjsIconDark";
import { Typescript } from "@/components/icons/svgs/typescript";
import { Nodejs } from "@/components/icons/svgs/nodejs";
import { Python } from "@/components/icons/svgs/python";
import { Postgresql } from "@/components/icons/svgs/postgresql";
import { Docker } from "@/components/icons/svgs/docker";
import { Kubernetes } from "@/components/icons/svgs/kubernetes";
import { Java } from "@/components/icons/svgs/java";
// import { Csharp } from "@/components/icons/svgs/csharp";

const summaryLinkClassName =
  "underline underline-offset-4 transition-colors duration-200 hover:text-foreground cursor-pointer";

export const DATA = {
  name: "Puspa Shukla",
  initials: "PS",
  location: "Kathmandu, Nepal",
  locationLink: "https://www.google.com/maps/place/Kathmandu/",
  description: "BCA student | IT Support, Systems Administration & Web Development",
  professionalSummary:
    "BCA student at CAMAD College, affiliated with Pokhara University, with hands-on experience in web development, IT systems support, and applied AI. Recognized internationally through U-GO's global publication for leading AI training initiatives across eight countries, helping over 3,000 scholars build practical AI skills. Proven leadership, public speaking, and mentoring ability, with a strong commitment to continuous learning and expanding opportunities for women in technology.",
  summary:
    "BCA student at CAMAD College, affiliated with Pokhara University, with hands-on experience in web development, IT systems support, and applied AI. Recognized internationally through U-GO's global publication for leading AI training initiatives across eight countries, helping over 3,000 scholars build practical AI skills. Proven leadership, public speaking, and mentoring ability, with a strong commitment to continuous learning and expanding opportunities for women in technology.",
  avatarUrl: "/puspa.jpg",
  skillGroups: [
    { label: "Programming Languages", items: "Python, HTML, CSS, JavaScript, C" },
    { label: "Development Tools", items: "Git, GitHub, VS Code, Substack" },
    { label: "Leadership & Team Management", items: "Led U-GO Nepal scholars; coordinated college and extracurricular teams" },
    { label: "Communication & Public Speaking", items: "Hosted programs and engaged international participants at global summits" },
    { label: "Teaching & Mentoring", items: "Guided students in Biological Science and AI fundamentals" },
  ],
  skills: [
    { name: "Python", icon: undefined },
    { name: "HTML", icon: undefined },
    { name: "CSS", icon: undefined },
    { name: "JavaScript", icon: undefined },
    { name: "C", icon: undefined },
    { name: "Git", icon: Icons.git },
    { name: "GitHub", icon: Icons.github },
    { name: "VS Code", icon: undefined },
    { name: "Substack", icon: undefined },
    { name: "Windows & Windows Server", icon: undefined },
    { name: "Active Directory & Group Policy", icon: undefined },
    { name: "Microsoft 365, Exchange, SharePoint & Teams", icon: undefined },
    { name: "TCP/IP, DHCP, DNS & VPN", icon: undefined },
    { name: "Hyper-V & VMware", icon: undefined },
    { name: "Intune, RMM & MDM", icon: undefined },
    { name: "Azure & AWS fundamentals", icon: undefined },
    { name: "IT ticketing & SLA management", icon: undefined },
    { name: "Leadership & Team Management", icon: undefined },
    { name: "Communication & Public Speaking", icon: undefined },
    { name: "Teaching & Mentoring", icon: undefined },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "puspashukla321@gmail.com",
    tel: "+9779764601918",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/puspa-shukla-20b256287/",
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/puspashukla321-web",
        icon: Icons.github,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/PShukla95269",
        icon: Icons.x,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:puspashukla321@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  work: [
    {
      company: "IT Support & Systems Administration",
      badges: [],
      location: "",
      title: "Hands-on technical support",
      logoUrl: "",
      start: "",
      end: "",
      work: [
        "Supported end users across Windows and Windows Server environments, including Active Directory, Group Policy, Microsoft 365, Exchange, SharePoint, Teams, and Intune.",
        "Worked with TCP/IP, DHCP, DNS, VPNs, routers, switches, Wi-Fi, Hyper-V, VMware, file servers, and NTFS permissions.",
        "Gained hands-on experience with backup and disaster recovery, RMM/MDM tools, Azure and AWS fundamentals, IT ticketing, SLA management, and remote and hardware-based troubleshooting.",
      ],
      impact: [],
      tools: [
        "Windows & Windows Server",
        "Active Directory & Group Policy",
        "Microsoft 365, Exchange, SharePoint & Teams",
        "TCP/IP, DHCP, DNS & VPN",
        "Hyper-V & VMware",
        "Intune, RMM & MDM",
        "Git",
        "GitHub",
      ],
      urls: [] as { label: string; href: string }[],
    },
  ],
  education: [
    {
      school: "CAMAD College",
      href: "https://pu.edu.np/",
      logoUrl: "",
      start: "2024",
      end: "2028",
      program: "Bachelor in Computer Application",
      specialization: "BCA.IT",
      details: [
        "Pursuing a Bachelor of Computer Application at CAMAD College, affiliated with Pokhara University.",
        "Cumulative CGPA: 3.60.",
      ],
      highlights: ["U-GO Scholarship recipient."],
    },
    {
      school: "Everest Florida High School",
      href: "",
      logoUrl: "",
      start: "2022",
      end: "2024",
      program: "Higher Secondary Education",
      specialization: "Science",
      details: [
        "Cumulative CGPA: 3.55.",
        "Full-tuition scholarship based on college entrance examination.",
      ],
    },
  ],
  projects: [
    {
      title: "Currency Converter",
      href: "",
      dates: "Web project",
      active: true,
      description:
        "Built a real-time currency conversion tool with input validation and a responsive interface.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [] as never[],
      image: "",
      video: "",
    },
    {
      title: "Tic Tac Toe Game",
      href: "",
      dates: "Web project",
      active: true,
      description:
        "Created a two-player JavaScript game with win/draw detection and CSS-based visual feedback.",
      technologies: ["JavaScript", "CSS"],
      links: [] as never[],
      image: "",
      video: "",
    },
    {
      title: "Rock, Paper, Scissors Game",
      href: "",
      dates: "Web project",
      active: true,
      description:
        "Developed a player-versus-computer game with randomized logic, winner detection, and a dynamic score display.",
      technologies: ["JavaScript", "CSS"],
      links: [] as never[],
      image: "",
      video: "",
    },
    {
      title: "Route Way System",
      href: "",
      dates: "Web project",
      active: true,
      description:
        "Designed a route-planning application that calculates efficient paths between locations using graph-based algorithms, with a focus on clean logic and usable output.",
      technologies: ["JavaScript", "Algorithms"],
      links: [] as never[],
      image: "",
      video: "",
    },
  ],
  hackathonsAndEvents: [
    {
      title: "The Ripple Effect: U-GO Global Publication",
      dates: "2025",
      location: "International recognition",
      description:
        "Featured as a standout scholar for pioneering AI training among scholars and driving a 97% AI-course completion rate across 3,000+ scholars in eight countries.",
      image: "",
      links: [] as { label: string; href: string }[],
    },
    {
      title: "U-GO Nepal Representative",
      dates: "2025",
      location: "Global",
      description:
        "Represented Nepali scholars and attended the U-GO Global Summit in Vietnam, engaging in international collaboration and networking.",
      image: "",
      links: [] as { label: string; href: string }[],
    },
    {
      title: "NASA Space Apps Challenge",
      dates: "2024",
      location: "International hackathon",
      description:
        "Participated in the NASA Space Apps Challenge, collaborating on technology-driven solutions for space and Earth sciences.",
      image: "",
      links: [] as { label: string; href: string }[],
    },
    {
      title: "U-GO AI Workshops & Advanced Courses",
      dates: "",
      location: "AI learning and mentoring",
      description:
        "Certified in U-GO AI workshops and advanced courses; helped students build practical foundations in AI.",
      image: "",
      links: [] as { label: string; href: string }[],
    },
  ],
} as const;
