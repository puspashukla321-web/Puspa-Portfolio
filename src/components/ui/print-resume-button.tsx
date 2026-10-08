"use client";

import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrintResumeButton() {
  return (
    <Button className="print:hidden" onClick={() => window.print()}>
      <Printer aria-hidden="true" />
      Print or save as PDF
    </Button>
  );
}