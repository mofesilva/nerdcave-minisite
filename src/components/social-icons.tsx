"use client";

import { links } from "@/data/links";
import { trackLinkClick } from "@/lib/analytics";
import { platformIcons, fallbackIcon } from "@/lib/platform-icons";

export function SocialIcons() {
    const socialLinks = links.filter((link) => link.section === "social");

    return (
        <div className="flex items-center justify-center gap-5">
            {socialLinks.map((link) => {
                const Icon = platformIcons[link.platform] ?? fallbackIcon;
                return (
                    <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackLinkClick(link.id, link.url)}
                        aria-label={link.title}
                        className="text-light/70 transition-colors hover:text-neon"
                    >
                        <Icon className="h-6 w-6" />
                    </a>
                );
            })}
        </div>
    );
}
