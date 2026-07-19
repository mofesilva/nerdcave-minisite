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
import type { CSSProperties } from "react";

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
    variant?: "featured" | "compact";
}

export function LinkCard({ link, index, variant = "featured" }: LinkCardProps) {
    const Icon = platformIcons[link.platform] ?? HiExternalLink;
    const accent = link.accent ?? "#b6ff00";
    const cardStyle = {
        animationDelay: `${index * 70}ms`,
        "--accent": accent,
    } as CSSProperties;

    if (variant === "compact") {
        return (
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackLinkClick(link.id, link.url)}
                className="link-card group relative flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-2xl px-3 py-4 text-center"
                style={cardStyle}
            >
                {/* Grain overlay */}
                <span aria-hidden="true" className="grain-overlay" />

                {/* Platform icon */}
                <Icon
                    className="h-7 w-7 shrink-0 transition-transform group-hover:scale-110"
                    style={{ color: accent }}
                />

                {/* Title */}
                <span className="text-xs font-medium text-light/90">
                    {link.title}
                </span>
            </a>
        );
    }

    return (
        <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLinkClick(link.id, link.url)}
            className="link-card group relative flex w-full items-center gap-5 rounded-xl px-6 py-8"
            style={cardStyle}
        >
            {/* Grain overlay */}
            <span
                aria-hidden="true"
                className="grain-overlay"
            />

            {/* Platform icon */}
            <Icon className="h-6 w-6 shrink-0" style={{ color: accent }} />

            {/* Title */}
            <span className="flex-1 text-base font-semibold text-light">
                {link.title}
            </span>

            {/* Arrow */}
            <HiExternalLink className="h-5 w-5 text-light/50 transition-colors group-hover:text-neon" />
        </a>
    );
}
