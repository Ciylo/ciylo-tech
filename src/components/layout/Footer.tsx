"use client";

import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/ciylotech",
    label: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: "https://www.twitter.com/ciylotech",
    label: "Twitter",
    icon: "twitter",
  },
  {
    href: "https://www.facebook.com/ciylotech",
    label: "Facebook",
    icon: "facebook",
  },
  {
    href: "https://www.instagram.com/ciylotech",
    label: "Instagram",
    icon: "instagram",
  },
];

const sections = [
  { title: "Work", links: [{ label: "Case Studies", href: "/case-study" }] },
  {
    title: "Services",
    links: [
      { label: "Product Strategy", href: "/services/strategy" },
      { label: "Design", href: "/services/design" },
      { label: "Software Development", href: "/services/development" },
    ],
  },
  {
    title: "Clients",
    links: [
      { label: "Industries", href: "/industries" },
      { label: "Product Compass Quiz", href: "/clients/quiz" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/case-study" },
      { label: "Templates", href: "/resources/templates" },
    ],
  },
  {
    title: "About Us",
    links: [
      { label: "Pricing", href: "/about/pricing" },
      { label: "Locations", href: "/about/locations" },
      { label: "FAQ", href: "/about/faq" },
    ],
  },
];

const iconPaths: Record<string, React.ReactNode> = {
  linkedin: <Icon icon="uil:linkedin" className="h-5 w-5 fill-[#424242]" />,
  twitter: <Icon icon="uil:twitter" className="h-5 w-5 fill-[#424242]" />,
  facebook: <Icon icon="uil:facebook" className="h-5 w-5 fill-[#424242]" />,
  instagram: <Icon icon="uil:instagram" className="h-5 w-5 fill-[#424242]" />,
};

function SocialIcon({ name }: { name: string }) {
  const path = iconPaths[name];
  if (!path) return null;
  return path;
}

const linkBaseClasses = "text-[#212121] text-sm hover:underline";

const Footer = () => {
  return (
    <section className="bg-[#00C9A7] text-[#212121]">
      <div className="container mx-auto 2xl:px-0 md:px-16 px-6 2xl:py-16 md:py-10 py-8 pb-5">
        <div className="grid md:gap-10 gap-6 lg:grid-cols-6 md:grid-cols-3 grid-cols-2 items-start">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <div className="md:h-12 h-8 md:w-[146px] w-[100px]">
                <Image
                  src="/images/footer-logo.svg"
                  alt="ciyloTech footer logo"
                  width={146}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
            </Link>
            <div className="flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-lg transition-opacity hover:opacity-80"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                >
                  <SocialIcon name={item.icon} />
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title} className="flex flex-col md:gap-3 gap-2">
              <h5 className="text-white md:text-2xl text-lg font-bold">
                {section.title}
              </h5>
              {section.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={linkBaseClasses}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="md:mt-8 mt-4 container mx-auto pb-4 md:flex-row flex-col gap-4 flex items-center justify-between text-sm text-[#212121]/80">
        <div className="flex items-center gap-3">
          <p className="text-white text-sm">
            &copy; {new Date().getFullYear()} CiyloTech. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <Icon icon="mdi:phone" className="text-xl md:text-2xl shrink-0" />
            <a
              target="_blank"
              href="tel:+923016475925"
              className="text-sm md:text-base"
            >
              +923016475925
            </a>
          </div>
          <Icon icon="pepicons-pop:line-y" />
          <div className="flex items-center gap-1">
            <Icon icon="mdi:email" className="text-xl md:text-2xl shrink-0" />
            <Link
              href="mailto:noraiz@ciylo.com"
              className="text-sm md:text-base wrap-break-word"
            >
              noraiz@ciylo.com
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
