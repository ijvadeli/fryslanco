"use client";

import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            
            <img src="/logo.png" alt="Fryslan+co Logo" className="w-32"/>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
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
              className="text-sm font-medium hover:text-gray-600 transition-colors"
            >
              Uitgelicht
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-gray-600 transition-colors">
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
              className="text-sm font-medium hover:text-gray-600 transition-colors">
              Vacatures
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search company"
              className="w-48 pl-9 bg-gray-100 border-0 focus-visible:ring-1"
            />
          </div>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6">
            Aan de slag
          </Button>
        </div>
      </div>
    </header>
  );
}