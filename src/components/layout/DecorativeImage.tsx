"use client";

import { usePathname } from "next/navigation";

interface DecorativeImageProps {
  hiddenPaths?: string[];
}

export default function DecorativeImage({ 
  hiddenPaths = [] 
}: DecorativeImageProps) {
  const pathname = usePathname();
  
  // Hide the image if current pathname is in the hiddenPaths array
  if (hiddenPaths.some(path => pathname.startsWith(path))) {
    return null;
  }

  return (
    <div className="absolute z-[-1] right-0 top-0 ">
      <div className="md:w-[563px] 2xl:w-[483px] 2xl:h-[756px] md:h-[500px] w-[200px] h-[200px] ">
        <img
          src="/images/mainFrame-logo.svg"
          alt="logo"
          className="size-full"
        />
      </div>
    </div>
  );
}

