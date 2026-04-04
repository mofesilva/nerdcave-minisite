"use client";

import { type LinkItem } from "@/data/links";
import { trackLinkClick } from "@/lib/analytics";
import {
    SiTwitch,
    SiKick,
    SiYoutube,
    SiDiscord,
    SiThreads,
    SiInstagram,
    SiTiktok,
} from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import type { IconType } from "react-icons";

const platformIcons: Record<string, IconType> = {
    twitch: SiTwitch,
    kick: SiKick,
    youtube: SiYoutube,
    discord: SiDiscord,
    threads: SiThreads,
    instagram: SiInstagram,
    tiktok: SiTiktok,
};

interface LinkCardProps {
    link: LinkItem;
    index: number;
}

export function LinkCard({ link, index }: LinkCardProps) {
    const Icon = platformIcons[link.platform] ?? HiExternalLink;

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLinkClick(link.id, link.url)}
            className="link-card group relative flex w-full items-center gap-5 rounded-xl px-6 py-8"
            style={{
                animationDelay: `${index * 70}ms`,
            }}
        >
            {/* Grain overlay */}
            <span
                aria-hidden="true"
                className="grain-overlay"
            />

            {/* Platform icon */}
            <Icon className="h-6 w-6 shrink-0 text-neon" />

            {/* Title */}
            <span className="flex-1 text-base font-semibold text-light">
                {link.title}
            </span>

            {/* Arrow */}
            <HiExternalLink className="h-5 w-5 text-light/50 transition-colors group-hover:text-neon" />
        </a>
    );
}
