"use client";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/case-study", label: "Case study" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About us" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const headerClasses = [
    "fixed top-0 z-50 w-full 2xl:py-7 md:py-5 py-3 2xl:px-0 px-8",
    "transition-all duration-300 ease-in-out",
    scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-12 w-[146px]">
              <Image
                src="/images/ciylo-logo.svg"
                alt="ciyloTech logo"
                width={146}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          <nav className="flex items-center gap-8 text-[16px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  isActive(item.href) ? "text-[#00C9A7]" : "text-black"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div>
          <Button type="default" className='main-btn'>
                Contact Us
              </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
