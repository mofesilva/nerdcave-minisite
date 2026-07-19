export interface LinkItem {
    id: string;
    title: string;
    url: string;
    platform: string;
    /** Renders as a large hero card instead of a compact grid tile. */
    featured?: boolean;
    /** Hex color used for the icon and the card's ambient glow. */
    accent?: string;
}

export const links: LinkItem[] = [
    {
        id: "twitch",
        title: "Twitch",
        url: "https://www.twitch.tv/nerdcave_studio",
        platform: "twitch",
        featured: true,
        accent: "#9146FF",
    },
    {
        id: "youtube",
        title: "YouTube",
        url: "https://www.youtube.com/@nerdcave.studio",
        platform: "youtube",
        featured: true,
        accent: "#FF0000",
    },
    {
        id: "discord",
        title: "Discord",
        url: "https://discord.com/invite/HcpuEmYcmt",
        platform: "discord",
        featured: true,
        accent: "#5865F2",
    },
    {
        id: "kick",
        title: "Kick",
        url: "https://kick.com/nerdcave-studio",
        platform: "kick",
        accent: "#53FC18",
    },
    {
        id: "threads",
        title: "Threads",
        url: "https://www.threads.com/@nerdcave.studio",
        platform: "threads",
        accent: "#F5F5F5",
    },
    {
        id: "instagram",
        title: "Instagram",
        url: "https://www.instagram.com/nerdcave.studio/",
        platform: "instagram",
        accent: "#E1306C",
    },
    {
        id: "tiktok",
        title: "TikTok",
        url: "https://www.tiktok.com/@nerdcave.studio",
        platform: "tiktok",
        accent: "#FF0050",
    },
];
