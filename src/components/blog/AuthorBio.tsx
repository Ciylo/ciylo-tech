import Image from "next/image";
import { Icon } from "@iconify/react";
import type { Author } from "@/types/blog";
import { urlForImageString } from "@/lib/sanity/image";

export default function AuthorBio({ author }: { author: Author }) {
  const avatarUrl = author.image
    ? urlForImageString(author.image, 80, 80)
    : null;

  return (
    <div className="flex gap-4 md:gap-6 p-6 md:p-8 border border-[#C0F6ED80] rounded-2xl bg-[#C0F6ED20]">
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt={author.name}
          width={64}
          height={64}
          className="rounded-full object-cover shrink-0"
        />
      )}
      <div className="flex flex-col gap-1">
        <p className="text-base font-bold text-[#161519]">{author.name}</p>
        {author.role && (
          <p className="text-sm text-[#00C9A7] font-medium">{author.role}</p>
        )}
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-[#6B7280] hover:text-[#00C9A7] transition-colors mt-1"
          >
            <Icon icon="uil:linkedin" className="text-base" />
            <span>LinkedIn</span>
          </a>
        )}
      </div>
    </div>
  );
}
