"use client";

import Image from "next/image";
import { links, type LinkSection } from "@/data/links";
import { LinkCard } from "./link-card";
import { StreamSchedule } from "./stream-schedule";
import { Gamertags } from "./gamertags";

const sections: { id: LinkSection; title: string }[] = [
    { id: "live", title: "Ao Vivo" },
    { id: "community", title: "Comunidade" },
];

const indexedLinks = links.map((link, index) => ({ link, index }));

export function LinkList() {
    return (
        <div className="flex w-full flex-col gap-8">
            {sections.map((section) => {
                const sectionLinks = indexedLinks.filter(
                    ({ link }) => link.section === section.id
                );
                if (sectionLinks.length === 0) return null;

                return (
                    <div key={section.id} className="flex flex-col gap-3">
                        <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-light/40">
                            {section.title}
                        </h2>

                        {section.id === "live" && <StreamSchedule />}

                        <div className="grid grid-cols-3 gap-3">
                            {sectionLinks.map(({ link, index }) => (
                                <LinkCard key={link.id} link={link} index={index} />
                            ))}
                        </div>
                    </div>
                );
            })}

            <Gamertags />

            <div className="flex justify-center pt-2">
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
