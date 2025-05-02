"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

interface MobileNavLinksProps {
  links: Array<{ href: string; label: string }>;
}

export default function MobileNavLinks({ links }: MobileNavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <DropdownMenuItem key={link.href} asChild disabled={link.href === pathname}>
          <Link
            href={link.href}
            className="w-full transition-colors hover:text-blue-600 dark:hover:text-blue-400"
          >
            {link.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </>
  );
}
