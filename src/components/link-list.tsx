"use client";

import Image from "next/image";
import { links } from "@/data/links";
import { LinkCard } from "./link-card";

export function LinkList() {
    return (
        <div className="flex w-full flex-col gap-3">
            {links.map((link, i) => (
                <LinkCard key={link.id} link={link} index={i} />
            ))}
            <div className="flex justify-center pt-4">
                <Image
                    src="/logos/nerdcave_3.2_perfil_green_transparent.png"
                    alt="Nerdcave"
                    width={64}
                    height={64}
                />
            </div>
        </div>
    );
}
