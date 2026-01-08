"use client";

import Link from "next/link";
import ToggleGroupSpacing from "../ui/toggle-group";
import PlaceholderLogo from "../svgs/logo";

export function HeroSection() {
  return (
    <header className="w-full border-b bg-white mt-20">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8 w-full">
          <Link href="/" className="flex items-center gap-2">
            <PlaceholderLogo />
          </Link>
            <div className="flex items-center float-right">
                <div className="absolute hidden sm:block">
                    <ToggleGroupSpacing value="69420"/>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}