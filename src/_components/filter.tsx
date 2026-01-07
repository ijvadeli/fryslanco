"use client";

import { Filter } from "lucide-react";
import LayoutGrid from "./svgs/layoutgrid";
import ListIcon from "./svgs/list";
import { cn } from "@/lib/utils";
import { useState } from "react";

const categories = [
  "Technologie",
  "Creatieve diensten",
  "Bouw en installatie",
  "Productie en industrie",
  "Onderwijs",
];

interface FilterBarProps {
  className?: string;
  activeCategory?: string | null;
  onCategoryChange?: (category: string | null) => void;
  viewMode?: "grid" | "list";
  onViewModeChange?: (mode: "grid" | "list") => void;
}

interface ViewToggleProps {
  viewMode: "grid" | "list";
  onViewModeChange: (mode: "grid" | "list") => void;
  className?: string;
}

export function ViewToggle({
  viewMode,
  onViewModeChange,
  className,
}: ViewToggleProps) {
  return (
    <div
      className={cn(
        "relative flex items-center bg-gray-100 rounded-full p-1 scale-80",
        className
      )}
    >
      {/* Sliding background pill */}
      <div
        className={cn(
          "absolute h-10 w-12 bg-white rounded-full shadow-sm transition-transform duration-300 ease-in-out",
          viewMode === "grid" ? "translate-x-0" : "translate-x-11"
        )}
      />

      {/* Grid button */}
      <button
        onClick={() => onViewModeChange("grid")}
        className={cn(
          "relative z-10 flex items-center justify-center h-10 w-12 rounded-full transition-colors duration-200",
          viewMode === "grid" ? "text-gray-700" : "text-gray-400"
        )}
        aria-label="Grid view"
      >
        {/* <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="2"
            y="2"
            width="6"
            height="6"
            rx="1. 5"
            stroke="currentColor"
            strokeWidth="1. 5"
          />
          <rect
            x="12"
            y="2"
            width="6"
            height="6"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="2"
            y="12"
            width="6"
            height="6"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect
            x="12"
            y="12"
            width="6"
            height="6"
            rx="1.5"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg> */}
        <LayoutGrid />
      </button>

      {/* List button */}
      <button
        onClick={() => onViewModeChange("list")}
        className={cn(
          "relative z-10 flex items-center justify-center h-10 w-12 rounded-full transition-colors duration-200",
          viewMode === "list" ? "text-gray-700" : "text-gray-400"
        )}
        aria-label="List view"
      >
        <ListIcon />
      </button>
    </div>
  );
}

export function FilterBar({ className }: FilterBarProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className={cn("w-full border-b bg-white py-3", className)}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <button className="flex items-center justify-center bg-[#F5F5F5] p-2.5 rounded-[40px] text-gray-500 hover:text-gray-700 transition-colors">
            <Filter className="h-4 w-4" />
          </button>

          <div className="h-5 w-px bg-gray-200" />

          <nav className="hidden md:flex items-center gap-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() =>
                  setActiveCategory(
                    activeCategory === category ? null : category
                  )
                }
                className={cn(
                  "text-sm text-gray-500 hover:text-gray-900 transition-colors whitespace-nowrap",
                  activeCategory === category && "text-gray-900 font-medium"
                )}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1">
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
