import { schedule } from "@/data/schedule";

export function StreamSchedule() {
    return (
        <div className="grid grid-cols-7 gap-1.5">
            {schedule.map((entry) => (
                <div
                    key={entry.day}
                    className={`flex aspect-square flex-col items-center justify-center gap-1 rounded-lg border text-center ${
                        entry.time
                            ? "border-neon/40 bg-neon/10"
                            : "border-white/5 bg-[#2a2f3f]"
                    }`}
                >
                    <span
                        className={`text-[10px] font-semibold uppercase ${
                            entry.time ? "text-neon" : "text-light/40"
                        }`}
                    >
                        {entry.day}
                    </span>
                    <span
                        className={`text-[10px] ${
                            entry.time ? "text-light" : "text-light/30"
                        }`}
                    >
                        {entry.time ?? "–"}
                    </span>
                </div>
            ))}
        </div>
    );
}
