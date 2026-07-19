"use client";

import Image from "next/image";
import { links } from "@/data/links";
import { LinkCard } from "./link-card";

export function LinkList() {
    const featured = links.filter((link) => link.featured);
    const compact = links.filter((link) => !link.featured);

    return (
        <div className="flex w-full flex-col gap-3">
            {featured.map((link, i) => (
                <LinkCard key={link.id} link={link} index={i} variant="featured" />
            ))}

            {compact.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                    {compact.map((link, i) => (
                        <LinkCard
                            key={link.id}
                            link={link}
                            index={featured.length + i}
                            variant="compact"
                        />
                    ))}
                </div>
            )}

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
