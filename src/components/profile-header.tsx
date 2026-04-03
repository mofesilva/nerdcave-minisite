"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile } from "@/data/profile";

export function ProfileHeader() {
    return (
        <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
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
        </motion.div>
    );
}
