"use client";

import Image from "next/image";
import { m, useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import { profile } from "@/data/profile";

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
            <h1 className="text-2xl font-bold tracking-tight text-light">
                {profile.name}
            </h1>

            {/* Bio */}
            <p className="max-w-xs text-center text-sm leading-relaxed text-light/70 whitespace-pre-line">
                {profile.bio}
            </p>
        </m.div>
    );
}
