'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const FRAME_COUNT = 200; // 1 to 200

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

    // Map scroll progress (0..1) to frame index (1..200)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        // Frames are 1-based in Hero-A
        for (let i = 1; i <= FRAME_COUNT; i++) {
            // Construct filename: ezgif-frame-001.jpg, ezgif-frame-012.jpg, etc.
            const fileIndex = i.toString().padStart(3, '0');
            const img = new Image();
            img.src = `/Hero-A/ezgif-frame-${fileIndex}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount > FRAME_COUNT * 0.5) {
                    if (loadedCount === FRAME_COUNT) setIsLoaded(true);
                }
            };
            // Store at index i-1 (0-based array)
            loadedImages[i - 1] = img;
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
            // frameIndex returns 1..200. We need 0..199 for array.
            const rawIndex = frameIndex.get();
            // Clamp between 1 and 200
            const index = Math.min(Math.max(Math.floor(rawIndex), 1), FRAME_COUNT);
            const img = images[index - 1]; // Array is 0-indexed
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
        <div ref={containerRef} className="relative h-[600vh] bg-[#0a0a0a]">

            {/* Sticky Viewport */}
            <div className="sticky top-0 h-screen overflow-hidden">
                <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover" />

                {/* Cinematic Overlay - Gradient for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

                {/* Text Overlay - Phase 1: The Start (Steep Climb) */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.30], [0, 1, 0]) }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <h1 className="font-serif text-6xl md:text-8xl text-[#e2e8f0] font-bold mb-6 tracking-tight drop-shadow-2xl">
                        {lang === 'he' ? 'הטיפוס הוא תלול.' : 'The Climb is Steep.'}
                    </h1>
                </motion.div>

                {/* Text Overlay - Phase 2: The Middle (Uncompromised Delivery) */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.35, 0.50, 0.65], [0, 1, 0]) }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <h1 className="font-serif text-6xl md:text-8xl text-[#e2e8f0] font-bold mb-6 tracking-tight drop-shadow-2xl">
                        {lang === 'he' ? 'ביצוע חסר פשרות.' : 'Uncompromised Delivery.'}
                    </h1>
                </motion.div>

                {/* Text Overlay - Phase 3: The Summit (Success Defined) */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0.70, 0.85, 1], [0, 1, 1]) }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 pointer-events-none p-6"
                >
                    <h1 className="font-serif text-6xl md:text-9xl text-[#c5a47e] font-bold mb-8 tracking-tight drop-shadow-2xl">
                        {lang === 'he' ? 'הצלחה מוגדרת.' : 'Success Defined.'}
                    </h1>

                    {/* CTA Button Only at the End */}
                    <motion.button
                        className="pointer-events-auto px-10 py-4 bg-[#c5a47e] hover:bg-[#b08d66] text-black font-sans font-bold uppercase tracking-widest transition-all hover:scale-105"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        {lang === 'he' ? 'קבע פגישה' : 'Schedule Consultation'}
                    </motion.button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm font-sans tracking-widest uppercase"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    {lang === 'he' ? 'גלול כדי לטפס' : 'Scroll to Climb'}
                </motion.div>
            </div>
        </div>
    );
}
