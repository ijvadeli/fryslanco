"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ToggleGroupSpacing } from "./ui/toggle-group";
import PlaceholderLogo from "./svgs/logo";

export function HeroSection() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <PlaceholderLogo />
          </Link>

          <ToggleGroupSpacing />
        </div>
      </div>
    </header>
  );
}