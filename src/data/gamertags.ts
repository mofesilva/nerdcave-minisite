export interface GamerTag {
    id: string;
    platform: "steam" | "playstation" | "xbox";
    label: string;
    nick: string;
    url?: string;
}

export const gamertags: GamerTag[] = [
    {
        id: "steam",
        platform: "steam",
        label: "Steam",
        nick: "Mofesilva",
        url: "https://steamcommunity.com/id/Mofesilva",
    },
    {
        id: "playstation",
        platform: "playstation",
        label: "PSN",
        nick: "Mofeverso",
    },
    {
        id: "xbox",
        platform: "xbox",
        label: "Xbox",
        nick: "Mofesilva",
    },
];
