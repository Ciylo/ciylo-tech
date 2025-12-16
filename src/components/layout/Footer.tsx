"use client";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  { href: "https://www.linkedin.com/company/ciylotech", label: "LinkedIn", icon: "linkedin" },
  { href: "https://www.twitter.com/ciylotech", label: "Twitter", icon: "twitter" },
  { href: "https://www.facebook.com/ciylotech", label: "Facebook", icon: "facebook" },
  { href: "https://www.instagram.com/ciylotech", label: "Instagram", icon: "instagram" },
];

const sections = [
  { title: "Work", links: [{ label: "Case Studies", href: "/work" }] },
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
      { label: "Industries", href: "/clients/industries" },
      { label: "Product Compass Quiz", href: "/clients/quiz" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "Case Studies", href: "/resources/case-studies" },
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

const iconPaths: Record<string, string> = {
  linkedin:
    "M4 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4Zm2.18 3a1.18 1.18 0 1 1 0 2.36A1.18 1.18 0 0 1 6.18 6Zm-.93 2.5h1.86V15H5.25V8.5Zm3.11 0h1.78v.9h.03c.25-.47.87-.96 1.79-.96 1.91 0 2.26 1.19 2.26 2.74V15h-1.86v-2.92c0-.7-.01-1.6-.98-1.6-1 0-1.15.76-1.15 1.55V15H8.36V8.5Z",
  twitter:
    "M16 5.538a4.11 4.11 0 0 1-1.178.323 2.053 2.053 0 0 0 .9-1.134 4.107 4.107 0 0 1-1.302.497A2.051 2.051 0 0 0 8.15 6.9a5.82 5.82 0 0 1-4.228-2.144 2.05 2.05 0 0 0 .635 2.737 2.045 2.045 0 0 1-.93-.256v.026a2.052 2.052 0 0 0 1.644 2.012 2.06 2.06 0 0 1-.926.035 2.053 2.053 0 0 0 1.916 1.424A4.116 4.116 0 0 1 2 12.456 5.807 5.807 0 0 0 5.148 13.5c3.37 0 5.215-2.79 5.215-5.215 0-.079-.002-.158-.006-.236A3.727 3.727 0 0 0 16 5.538Z",
  facebook:
    "M14 3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h3v-4H7v-2h2V9a3 3 0 0 1 3-3h2v2h-2c-.35 0-1 .18-1 .65V11h3l-.5 2H11v4h3a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Z",
  instagram:
    "M5 3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5Zm0-1h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm9 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 7a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0-1a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z",
};

function SocialIcon({ name }: { name: string }) {
  const path = iconPaths[name];
  if (!path) return null;
  return (
    <svg
      aria-hidden
      viewBox="0 0 18 18"
      className="h-5 w-5 fill-[#424242]"
    >
      <path d={path} />
    </svg>
  );
}

const linkBaseClasses = "text-[#212121] text-sm hover:underline";

const Footer = () => {
  return (
    <section className="bg-[#00C9A7] text-[#212121]">
      <div className="container mx-auto 2xl:px-0 md:px-16 px-10 2xl:py-16 md:py-10 py-8 pb-5">
        <div className="grid gap-10 lg:grid-cols-5 md:grid-cols-3 grid-cols-2 items-start">
          <div className="flex flex-col gap-4">
            <div className="h-12 w-[146px]">
              <Image
                src="/images/footer-logo.svg"
                alt="ciyloTech footer logo"
                width={146}
                height={48}
                className="h-full w-full object-contain"
              />
            </div>
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
            <div key={section.title} className="flex flex-col gap-3">
              <h5 className="text-white text-2xl font-bold">{section.title}</h5>
              {section.links.map((link) => (
                <Link key={link.label} href={link.href} className={linkBaseClasses}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-between text-sm text-[#212121]/80">
          <div className="flex items-center gap-3" />
          <div className="flex items-center gap-3" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
