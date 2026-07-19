import { SiSteam, SiPlaystation } from "react-icons/si";
import { FaXbox } from "react-icons/fa";
import type { IconType } from "react-icons";
import { gamertags } from "@/data/gamertags";

const gamertagIcons: Record<string, IconType> = {
    steam: SiSteam,
    playstation: SiPlaystation,
    xbox: FaXbox,
};

export function Gamertags() {
    return (
        <div className="flex flex-col gap-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-light/40">
                Gamertags
            </h2>

            <div className="flex flex-col gap-3">
                {gamertags.map((entry, i) => {
                    const Icon = gamertagIcons[entry.platform];
                    const inner = (
                        <>
                            {/* Grain overlay */}
                            <span aria-hidden="true" className="grain-overlay" />

                            <Icon className="relative h-6 w-6 shrink-0 text-neon" />
                            <div className="relative flex flex-col">
                                <span className="text-[10px] uppercase tracking-wide text-light/40">
                                    {entry.label}
                                </span>
                                <span className="text-sm font-medium text-light/90">
                                    {entry.nick}
                                </span>
                            </div>
                        </>
                    );
                    const className =
                        "link-card relative flex w-full items-center gap-4 rounded-xl px-6 py-4";
                    const style = { animationDelay: `${i * 70}ms` };

                    return entry.url ? (
                        <a
                            key={entry.id}
                            href={entry.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                            style={style}
                        >
                            {inner}
                        </a>
                    ) : (
                        <div key={entry.id} className={className} style={style}>
                            {inner}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
