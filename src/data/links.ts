export type LinkSection = "live" | "community" | "social";

export interface LinkItem {
    id: string;
    title: string;
    url: string;
    platform: string;
    section: LinkSection;
}

export const links: LinkItem[] = [
    {
        id: "twitch",
        title: "Twitch",
        url: "https://www.twitch.tv/nerdcave_studio",
        platform: "twitch",
        section: "live",
    },
    {
        id: "kick",
        title: "Kick",
        url: "https://kick.com/nerdcave-studio",
        platform: "kick",
        section: "live",
    },
    {
        id: "youtube",
        title: "YouTube",
        url: "https://www.youtube.com/@nerdcave.studio",
        platform: "youtube",
        section: "live",
    },
    {
        id: "discord",
        title: "Discord",
        url: "https://discord.com/invite/HcpuEmYcmt",
        platform: "discord",
        section: "community",
    },
    {
        id: "threads",
        title: "Threads",
        url: "https://www.threads.com/@nerdcave.studio",
        platform: "threads",
        section: "social",
    },
    {
        id: "instagram",
        title: "Instagram",
        url: "https://www.instagram.com/nerdcave.studio/",
        platform: "instagram",
        section: "social",
    },
    {
        id: "tiktok",
        title: "TikTok",
        url: "https://www.tiktok.com/@nerdcave.studio",
        platform: "tiktok",
        section: "social",
    },
];
