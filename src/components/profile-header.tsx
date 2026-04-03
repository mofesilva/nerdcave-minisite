"use client";

import Image from "next/image";
import { m, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { MonitorPlay, Gamepad2, Clapperboard, Pizza } from "lucide-react";
import { profile } from "@/data/profile";

const tagIcons: Record<string, React.ReactNode> = {
    "Streamer": <MonitorPlay size={16} />,
    "Gamer": <Gamepad2 size={16} />,
    "Creator": <Clapperboard size={16} />,
    "Pizza Lover": <Pizza size={16} />,
};

export function ProfileHeader() {
    const controls = useAnimationControls();

    useEffect(() => {
        controls.set({ opacity: 0, y: -20 });
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        });
    }, [controls]);

    return (
        <m.div
            className="flex flex-col items-center gap-4"
            animate={controls}
        >
            {/* Avatar */}
            <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-neon/30 blur-md" />
                {profile.avatarUrl ? (
                    <Image
                        src={profile.avatarUrl}
                        alt={profile.name}
                        width={96}
                        height={96}
                        className="relative h-24 w-24 rounded-full object-cover"
                        priority
                    />
                ) : (
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-purple text-3xl font-bold text-light">
                        {profile.initials}
                    </div>
                )}
            </div>

            {/* Name */}
            <h1 className="text-2xl font-semibold tracking-tight text-light">
                {profile.name}
            </h1>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
                {profile.tags.map((tag) => (
                    <span
                        key={tag}
                        className="flex items-center gap-1.5 rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs font-medium text-neon/80"
                    >
                        {tagIcons[tag]}
                        {tag}
                    </span>
                ))}
            </div>

            {/* Bio */}
            <p className="text-center text-md text-light">
                {profile.bio}
            </p>
        </m.div>
    );
}
