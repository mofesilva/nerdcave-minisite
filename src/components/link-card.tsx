"use client";

import { type LinkItem } from "@/data/links";
import { trackLinkClick } from "@/lib/analytics";
import { platformIcons, fallbackIcon } from "@/lib/platform-icons";

interface LinkCardProps {
    link: LinkItem;
    index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
    const Icon = platformIcons[link.platform] ?? fallbackIcon;

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLinkClick(link.id, link.url)}
            className="link-card group relative flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl p-3 text-center"
            style={{ animationDelay: `${index * 70}ms` }}
        >
            {/* Grain overlay */}
            <span aria-hidden="true" className="grain-overlay" />

            {/* Platform icon */}
            <Icon className="h-7 w-7 shrink-0 text-neon transition-transform group-hover:scale-110" />

            {/* Title */}
            <span className="text-xs font-medium text-light/90">
                {link.title}
            </span>
        </a>
    );
}
