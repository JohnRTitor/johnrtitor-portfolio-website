"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinksProps {
  links: Array<{ href: string; label: string }>;
}

export default function DesktopNavLinks({ links }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={pathname === link.href ? "#" : link.href}
          className={`transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
            pathname === link.href ? "text-blue-600 dark:text-blue-400 font-medium" : ""
          }`}
        >
          {link.label}
        </Link>
      ))}
    </>
  );
}
