"use client";

import Image from "next/image";
import { links, type LinkSection } from "@/data/links";
import { LinkCard } from "./link-card";
import { StreamSchedule } from "./stream-schedule";
import { Gamertags } from "./gamertags";

const indexedLinks = links.map((link, index) => ({ link, index }));

function renderSection(id: LinkSection, title: string) {
    const sectionLinks = indexedLinks.filter(({ link }) => link.section === id);
    if (sectionLinks.length === 0) return null;

    return (
        <div key={id} className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-light/40">
                {title}
            </h2>

            {id === "live" && <StreamSchedule />}

            <div className="grid grid-cols-3 gap-3">
                {sectionLinks.map(({ link, index }) => (
                    <LinkCard key={link.id} link={link} index={index} />
                ))}
            </div>
        </div>
    );
}

export function LinkList() {
    return (
        <div className="flex w-full flex-col gap-8">
            {renderSection("live", "Ao Vivo")}

            <Gamertags />

            {renderSection("community", "Comunidade")}

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
