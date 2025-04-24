"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const renderNavLink = (link: { href: string; label: string }) => (
    <Link
      key={link.href}
      href={pathname === link.href ? "#" : link.href}
      className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
        pathname === link.href ? "text-blue-600 dark:text-blue-400 font-medium" : ""
      }`}
    >
      {link.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 shadow-md dark:shadow-slate-800/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            JohnRTitor
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(renderNavLink)}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Toggle menu">
                  <MenuIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex flex-col gap-2 p-2">
                {navLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild disabled={link.href === pathname}>
                    <Link
                      href={link.href}
                      className={
                        "w-full transition-colors hover:text-blue-600 dark:hover:text-blue-400"
                      }
                    >
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
