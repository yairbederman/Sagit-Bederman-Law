'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

import { useLanguage } from '@/context/LanguageContext';

const FRAME_COUNT = 191; // 0 to 191

export default function ScrollytellingHero() {
    const { lang } = useLanguage();
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll progress 0 to 1 based on the container's height
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress (0..1) to frame index (0..191)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i <= FRAME_COUNT; i++) {
            // Construct filename: frame_000.jpg, frame_012.jpg, etc.
            const fileIndex = i.toString().padStart(3, '0');
            const img = new Image();
            img.src = `/Hero/frame_${fileIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount > FRAME_COUNT * 0.5) {
                    // Consider "loaded enough" to start showing content after 50%? 
                    // Or wait for all. Let's wait for all to avoid flicker initially or check active logic.
                    if (loadedCount === FRAME_COUNT + 1) setIsLoaded(true);
                }
            };
            loadedImages[i] = img;
        }
        setImages(loadedImages);
    }, []);

    // Render logic
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Helper to draw image cover
        const drawImageProp = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
            if (!img) return;
            const w = ctx.canvas.width;
            const h = ctx.canvas.height;
            const x = 0;
            const y = 0;

            // "object-cover" logic for canvas
            const imgAspectRatio = img.width / img.height;
            const canvasAspectRatio = w / h;

            let renderW, renderH, renderX, renderY;

            if (imgAspectRatio < canvasAspectRatio) {
                renderW = w;
                renderH = w / imgAspectRatio;
                renderX = 0;
                renderY = (h - renderH) / 2;
            } else {
                renderH = h;
                renderW = h * imgAspectRatio;
                renderY = 0;
                renderX = (w - renderW) / 2;
            }

            ctx.drawImage(img, renderX, renderY, renderW, renderH);
        };

        const render = () => {
            const index = Math.min(Math.floor(frameIndex.get()), FRAME_COUNT);
            const img = images[index];
            if (img && img.complete) {
                drawImageProp(ctx, img);
            }
        };

        // Responsive canvas size
        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial size

        const unsubscribe = frameIndex.on("change", render);

        return () => {
            window.removeEventListener('resize', handleResize);
            unsubscribe();
        };
    }, [images, frameIndex, isLoaded]);

    return (
        <div ref={containerRef} className="relative h-[500vh] bg-[#0a0a0a]">

            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Text Overlay - Phase 1: Ambiguity */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0]) }}
                    className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
                        {lang === 'he' ? 'מערפל...' : 'From Ambiguity...'}
                    </h1>
                </motion.div>

                {/* Text Overlay - Phase 2: Vision */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.25, 0.35, 0.55], [0, 1, 0]) }}
                    className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
                        {lang === 'he' ? '...לראייה בהירה.' : '...to Clear Vision.'}
                    </h1>
                </motion.div>

                {/* Text Overlay - Phase 3: Precision */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.55, 0.65, 0.85], [0, 1, 0]) }}
                    className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
                        {lang === 'he' ? 'דיוק בכל פרט.' : 'Precision in every detail.'}
                    </h1>
                </motion.div>

                {/* Text Overlay - Phase 4: Resolution */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.85, 0.95, 1], [0, 1, 1]) }}
                    className="absolute inset-0 flex items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <div>
                        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-white font-bold mb-6 tracking-tight drop-shadow-2xl">
                            {lang === 'he' ? 'בדרמן.' : 'Bederman.'}
                        </h1>
                        <p className="font-sans text-xl md:text-2xl text-slate-200 font-light tracking-wide">
                            {lang === 'he' ? 'אנחנו מביאים איזון לאתגרים המשפטיים המורכבים ביותר שלך.' : 'We bring balance to your most complex legal challenges.'}
                        </p>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-sans tracking-widest uppercase"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {lang === 'he' ? 'גלול כדי לגלות' : 'Scroll to Explore'}
                </motion.div>
            </div>
        </div>
    );
}
