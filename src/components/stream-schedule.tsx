import { schedule } from "@/data/schedule";

export function StreamSchedule() {
    return (
        <div className="grid grid-cols-7 gap-1.5">
            {schedule.map((entry, i) =>
                entry.time ? (
                    <div
                        key={entry.day}
                        className="flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-lg border border-neon/40 bg-neon/10 text-center"
                    >
                        <span className="text-xs font-bold uppercase text-neon">
                            {entry.day}
                        </span>
                        <span className="text-xs font-medium text-light">{entry.time}</span>
                    </div>
                ) : (
                    <div
                        key={entry.day}
                        className="link-card relative flex aspect-[3/4] flex-col items-center justify-center gap-1 rounded-lg text-center"
                        style={{ animationDelay: `${i * 50}ms` }}
                    >
                        {/* Grain overlay */}
                        <span aria-hidden="true" className="grain-overlay" />

                        <span className="relative text-xs font-bold uppercase text-light/50">
                            {entry.day}
                        </span>
                        <span className="relative text-xs text-light/40">–</span>
                    </div>
                )
            )}
        </div>
    );
}
