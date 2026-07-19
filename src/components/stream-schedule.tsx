import { schedule } from "@/data/schedule";

export function StreamSchedule() {
    return (
        <div className="grid grid-cols-7 gap-1.5">
            {schedule.map((entry, i) => (
                <div
                    key={entry.day}
                    className={`link-card relative flex aspect-square flex-col items-center justify-center gap-1 rounded-lg text-center ${
                        entry.time ? "ring-1 ring-inset ring-neon/60" : ""
                    }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                >
                    {/* Grain overlay */}
                    <span aria-hidden="true" className="grain-overlay" />

                    <span
                        className={`relative text-[10px] font-semibold uppercase ${
                            entry.time ? "text-neon" : "text-light/50"
                        }`}
                    >
                        {entry.day}
                    </span>
                    <span
                        className={`relative text-[10px] ${
                            entry.time ? "text-light" : "text-light/40"
                        }`}
                    >
                        {entry.time ?? "–"}
                    </span>
                </div>
            ))}
        </div>
    );
}
