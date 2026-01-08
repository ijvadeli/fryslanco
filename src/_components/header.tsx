"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white mb-4 md:mb-10">
      <div className="container flex h-14 md:h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-4 lg:gap-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Fryslan+co Logo" className="w-24 md:w-32" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-600 transition-colors">
                Industrie
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Tech</DropdownMenuItem>
                <DropdownMenuItem>Finance</DropdownMenuItem>
                <DropdownMenuItem>Healthcare</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/uitgelicht"
              className="text-sm font-medium hover: text-gray-600 transition-colors"
            >
              Uitgelicht
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover: text-gray-600 transition-colors">
                Locaties
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Amsterdam</DropdownMenuItem>
                <DropdownMenuItem>Rotterdam</DropdownMenuItem>
                <DropdownMenuItem>Utrecht</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/vacatures"
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Vacatures
            </Link>
          </nav>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search company"
              className="w-48 pl-9 bg-gray-100 border-0 focus-visible:ring-1"
            />
          </div>
          <Link href="/login">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">
              Aan de Slag
            </Button>
          </Link>
        </div>

        {/* Mobile Right Section */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          >
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          {/* Mobile CTA - shortened text on small screens */}
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-3 md:px-6 text-sm">
            <Link href="/login"><span className="hidden sm:inline">Aan de slag</span></Link>
            <span className="sm:hidden">Start</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="lg:hidden border-t px-4 py-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search company"
              className="w-full pl-9 bg-gray-100 border-0 focus-visible:ring-1"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-gray-600 transition-colors">
                Industrie
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(100vw-2rem)]">
                <DropdownMenuItem>Tech</DropdownMenuItem>
                <DropdownMenuItem>Finance</DropdownMenuItem>
                <DropdownMenuItem>Healthcare</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/uitgelicht"
              className="py-2 text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Uitgelicht
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium hover:text-gray-600 transition-colors">
                Locaties
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(100vw-2rem)]">
                <DropdownMenuItem>Amsterdam</DropdownMenuItem>
                <DropdownMenuItem>Rotterdam</DropdownMenuItem>
                <DropdownMenuItem>Utrecht</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/vacatures"
              className="py-2 text-sm font-medium hover:text-gray-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vacatures
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}