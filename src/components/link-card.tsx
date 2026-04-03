"use client";

import { motion } from "framer-motion";
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
        <motion.a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackLinkClick(link.id, link.url)}
            className="group relative flex w-full items-center gap-5 rounded-xl border border-purple/40 bg-purple/20 px-6 py-5 transition-colors hover:border-purple/70 hover:bg-purple/30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-purple/0 blur-xl transition-all duration-300 group-hover:bg-purple/10" />

            {/* Platform icon */}
            <Icon className="h-6 w-6 shrink-0 text-neon" />

            {/* Title */}
            <span className="flex-1 text-base font-semibold text-light">
                {link.title}
            </span>

            {/* Arrow */}
            <HiExternalLink className="h-5 w-5 text-light/50 transition-colors group-hover:text-neon" />
        </motion.a>
    );
}
