"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Download, Sparkles } from "lucide-react";
import Image from "next/image";

// Hero Images for Carousel
const heroImages = [
    "/images/Design sem nome (31).png",
    "/images/O PROTOCOLO.png",
    "/images/QA.png",
    "/images/THE UTAMATE.png"
];

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, []);

    const scrollToOffer = () => {
        document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 lg:pt-32">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-500/30 mb-8 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)] group cursor-default hover:border-purple-500/50 transition-colors"
                >
                    <Sparkles className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
                    <span className="text-sm font-semibold text-purple-100">
                        Novo: Inclui <span className="text-yellow-400">App Gerador de Respostas</span>
                    </span>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight max-w-5xl"
                >
                    Não perca a vaga por não saber <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                        o que responder em Inglês
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-8 font-normal max-w-3xl"
                >
                    Baixe agora os <span className="text-white font-bold">3 PDFs com Scripts Prontos</span> para as 20 perguntas mais comuns e use nosso <span className="text-white font-bold">App Gerador de Respostas</span> para treinar.
                </motion.p>

                {/* Product Carousel (Replacing Static Image) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative w-full max-w-[500px] h-[350px] md:h-[450px] mb-10 flex items-center justify-center p-2"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 w-full h-full flex items-center justify-center"
                        >
                            <Image
                                src={heroImages[currentImageIndex]}
                                alt={`Kit Preview ${currentImageIndex + 1}`}
                                width={500}
                                height={600}
                                className="w-auto h-full max-w-full drop-shadow-[0_0_50px_rgba(168,85,247,0.3)] object-contain"
                                priority
                                unoptimized
                            />
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Indicator */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                        {heroImages.map((_, i) => (
                            <div
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 ${i === currentImageIndex ? "w-8 bg-purple-500" : "w-2 bg-white/20"}`}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center gap-4 mt-8"
                >
                    <button
                        onClick={scrollToOffer}
                        className="group relative inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-black font-extrabold text-lg md:text-xl py-5 px-12 rounded-full transition-all shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] hover:-translate-y-1 transform"
                    >
                        BAIXAR MEU KIT AGORA
                        <Download className="ml-2 w-6 h-6 group-hover:translate-y-1 transition-transform" />
                    </button>

                    {/* Urgency Text */}
                    <p className="text-gray-400 font-medium text-sm md:text-base flex items-center gap-2">
                        <Clock className="w-4 h-4 text-purple-500" />
                        Acesso liberado imediatamente após a compra.
                    </p>

                    {/* Footer Social Proof */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 mt-4">
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span>3 PDFs Exclusivos</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span>App Incluso</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4 text-purple-500" />
                            <span>Garantia de 7 Dias</span>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
