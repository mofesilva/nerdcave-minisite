export interface LinkItem {
    id: string;
    title: string;
    url: string;
    platform: string;
    /** Hex color used for the icon. */
    accent?: string;
    /** Grid footprint in the bento layout. Defaults to a 1x1 tile. */
    span?: { col?: 1 | 2; row?: 1 | 2 };
}

export const links: LinkItem[] = [
    {
        id: "twitch",
        title: "Twitch",
        url: "https://www.twitch.tv/nerdcave_studio",
        platform: "twitch",
        accent: "#9146FF",
        span: { col: 2 },
    },
    {
        id: "youtube",
        title: "YouTube",
        url: "https://www.youtube.com/@nerdcave.studio",
        platform: "youtube",
        accent: "#FF0000",
        span: { row: 2 },
    },
    {
        id: "discord",
        title: "Discord",
        url: "https://discord.com/invite/HcpuEmYcmt",
        platform: "discord",
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
        span: { col: 2 },
    },
];
