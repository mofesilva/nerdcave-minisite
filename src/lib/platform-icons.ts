import {
    SiTwitch,
    SiKick,
    SiYoutube,
    SiDiscord,
    SiThreads,
    SiInstagram,
    SiTiktok,
} from "react-icons/si";
import { HiExternalLink } from "react-icons/hi";
import type { IconType } from "react-icons";

export const platformIcons: Record<string, IconType> = {
    twitch: SiTwitch,
    kick: SiKick,
    youtube: SiYoutube,
    discord: SiDiscord,
    threads: SiThreads,
    instagram: SiInstagram,
    tiktok: SiTiktok,
};

export const fallbackIcon: IconType = HiExternalLink;
