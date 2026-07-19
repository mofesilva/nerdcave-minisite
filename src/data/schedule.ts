export interface ScheduleEntry {
    day: string;
    time?: string;
}

export const schedule: ScheduleEntry[] = [
    { day: "Seg" },
    { day: "Ter", time: "19h" },
    { day: "Qua" },
    { day: "Qui", time: "19h" },
    { day: "Sex" },
    { day: "Sáb" },
    { day: "Dom" },
];
