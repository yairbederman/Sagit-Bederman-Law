'use client';
import { useRef, useEffect, useState } from 'react';

interface SeamlessLoopVideoProps {
    src: string;
    className?: string;
    crossFadeDuration?: number; // in milliseconds
}

export default function SeamlessLoopVideo({
    src,
    className = "",
    crossFadeDuration = 1000
}: SeamlessLoopVideoProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);
    // Track which video is currently "active" (visible/playing smoothly)
    const [activeVideo, setActiveVideo] = useState<1 | 2>(1);

    useEffect(() => {
        const v1 = video1Ref.current;
        const v2 = video2Ref.current;

        if (!v1 || !v2) return;

        // Initialize: v1 playing, v2 paused and hidden
        v1.volume = 0;
        v2.volume = 0;
        v1.style.opacity = '1';
        v2.style.opacity = '0';
        v2.currentTime = 0;

        // Start playing v1
        v1.play().catch(e => console.warn("Auto-play failed", e));

        let animationFrameId: number;
        let isTransitioning = false;

        const checkTime = () => {
            // Determine which video is currently the "lead"
            const currentVideo = activeVideo === 1 ? v1 : v2;
            const nextVideo = activeVideo === 1 ? v2 : v1;

            if (currentVideo.duration) {
                const timeLeft = currentVideo.duration - currentVideo.currentTime;
                // Start transition if we are within the crossfade window
                if (timeLeft <= (crossFadeDuration / 1000) && !isTransitioning) {
                    isTransitioning = true;

                    // Prepare next video
                    nextVideo.currentTime = 0;
                    nextVideo.play().catch(e => console.warn("Auto-play failed", e));

                    // Crossfade
                    nextVideo.style.transition = `opacity ${crossFadeDuration}ms ease-in-out`;
                    currentVideo.style.transition = `opacity ${crossFadeDuration}ms ease-in-out`;

                    nextVideo.style.opacity = '1';
                    currentVideo.style.opacity = '0';

                    // After transition, switch active tracker
                    setTimeout(() => {
                        setActiveVideo(activeVideo === 1 ? 2 : 1);
                        isTransitioning = false;
                        currentVideo.pause();
                        currentVideo.currentTime = 0;
                    }, crossFadeDuration);
                }
            }
            animationFrameId = requestAnimationFrame(checkTime);
        };

        animationFrameId = requestAnimationFrame(checkTime);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [activeVideo, crossFadeDuration, src]);

    return (
        <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
            <video
                ref={video1Ref}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
                src={src}
            />
            <video
                ref={video2Ref}
                className="absolute inset-0 w-full h-full object-cover"
                muted
                playsInline
                src={src}
            />
        </div>
    );
}
