"use client";

import Link from "next/link";

interface TravelBannerProps {
  imageSrc: string;
  linkUrl: string;
  altText: string;
}

export default function TravelBanner({ imageSrc, linkUrl, altText }: TravelBannerProps) {
  const isExternal = linkUrl.startsWith("http");

  const content = (
    <div className="w-[270px] h-[225px] overflow-hidden rounded-xl border border-emerald-950/10 shadow-sm hover:shadow-md transition-all duration-200 group bg-white flex items-center justify-center">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-200"
        loading="lazy"
      />
    </div>
  );

  if (isExternal) {
    return (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
        {content}
      </a>
    );
  }

  return (
    <Link href={linkUrl} className="block cursor-pointer">
      {content}
    </Link>
  );
}
