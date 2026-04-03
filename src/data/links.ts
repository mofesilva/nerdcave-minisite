export interface LinkItem {
    id: string;
    title: string;
    url: string;
    platform: string;
}

export const links: LinkItem[] = [
    {
        id: "twitch",
        title: "Twitch",
        url: "https://twitch.tv/nerdcave",
        platform: "twitch",
    },
    {
        id: "kick",
        title: "Kick",
        url: "https://kick.com/nerdcave",
        platform: "kick",
    },
    {
        id: "youtube",
        title: "YouTube",
        url: "https://youtube.com/@nerdcave",
        platform: "youtube",
    },
    {
        id: "discord",
        title: "Discord",
        url: "https://discord.gg/nerdcave",
        platform: "discord",
    },
    {
        id: "threads",
        title: "Threads",
        url: "https://threads.net/@nerdcave",
        platform: "threads",
    },
    {
        id: "instagram",
        title: "Instagram",
        url: "https://instagram.com/nerdcave",
        platform: "instagram",
    },
    {
        id: "tiktok",
        title: "TikTok",
        url: "https://tiktok.com/@nerdcave",
        platform: "tiktok",
    },
];
