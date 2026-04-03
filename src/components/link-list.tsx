"use client";

import { links } from "@/data/links";
import { LinkCard } from "./link-card";

export function LinkList() {
    return (
        <div className="flex w-full flex-col gap-3">
            {links.map((link, i) => (
                <LinkCard key={link.id} link={link} index={i} />
            ))}
        </div>
    );
}
