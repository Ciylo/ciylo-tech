"use client";
import { Icon } from "@iconify/react";
import { Button, Drawer } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
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
    "fixed top-0 z-50 w-full 2xl:py-7 md:py-5 py-5 2xl:px-0 md:px-16 px-6",
    "transition-all duration-300 ease-in-out",
    scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "md:bg-transparent bg-white",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClasses}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <div className="md:h-12 h-8 md:w-[146px] w-[100px]">
                <Image
                  src="/images/ciylo-logo.svg"
                  alt="ciyloTech logo"
                  width={146}
                  height={48}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="md:flex hidden items-center gap-8 text-[16px]">
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

          <div className="md:block hidden">
            <Button onClick={() => router.push("/contact")} type="default" className="main-btn">
              Contact Us
            </Button>
          </div>
          <div className="md:hidden block cursor-pointer" onClick={showDrawer}>
            <Icon
              icon="line-md:close-to-menu-transition"
              className="text-black text-2xl"
            />
          </div>
        </div>
      </div>
      {/* -----------------drawer------------- */}
      <Drawer
        title={
          <Link href="/">
            <div className="h-12 w-[106px]">
              <Image
                src="/images/ciylo-logo.svg"
                alt="ciyloTech logo"
                width={146}
                height={48}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </Link>
        }
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={open}
        rootClassName="drawer"
      >
        <nav className="flex flex-col gap-4 text-[16px] mb-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={
                isActive(item.href) ? "text-[#00C9A7]!" : "text-black!"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden block">
          <Button onClick={() => router.push("/contact")} type="default" className="main-btn ">
            Contact Us
          </Button>
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
