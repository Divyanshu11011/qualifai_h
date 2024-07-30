// pages/index.tsx
"use client";
import { Dashboard } from "@/components/component/dashboard";
import { Chooser } from "@/components/component/chooser";
import { Compiler } from "@/components/component/compiler";

export default function Home() {
  return (
    <div>
      <Compiler />
    </div>
  );
}
