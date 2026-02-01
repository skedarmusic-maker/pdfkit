"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Smartphone, CheckCircle } from "lucide-react";

// The images for the carousel on the first card
const carouselImages = [
    "/images/THE%20UTAMATE.png",
    "/images/O%20PROTOCOLO.png",
    "/images/QA.png"
];

export default function Deliverables() {
    // Carousel State
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length);
        }, 3000); // 3 seconds per slide

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        O que você vai <span className="text-purple-500">conseguir</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        O arsenal completo para garantir sua aprovação.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Item 1: The Book Carousel (Focus on PDFs) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative bg-neutral-900 rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-purple-500/50 transition-all flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full pointer-events-none" />

                        <div className="w-full h-[300px] flex items-center justify-center mb-8 relative z-10">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentImageIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <Image
                                        src={carouselImages[currentImageIndex]}
                                        alt={`Product ${currentImageIndex + 1}`}
                                        width={300}
                                        height={400}
                                        className="w-auto h-full max-h-[280px] drop-shadow-2xl object-contain hover:scale-105 transition-transform duration-500"
                                        unoptimized
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="relative z-10 mt-auto">
                            {/* Slide Indicators */}
                            <div className="flex justify-center gap-2 mb-6">
                                {carouselImages.map((_, i) => (
                                    <div
                                        key={i}
                                        className={`w-2 h-2 rounded-full transition-colors ${i === currentImageIndex ? "bg-purple-500" : "bg-white/20"}`}
                                    />
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">3 PDFs Estratégicos</h3>
                            <ul className="space-y-4 text-gray-400 text-sm md:text-base">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Saiba responder as perguntas mais comuns</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Use respostas prontas em inglês profissional</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-purple-500 shrink-0" />
                                    <span>Evite "branco" e ganhe confiança total</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Item 2: The App (Big Feature) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="relative bg-neutral-900 rounded-3xl p-8 border border-white/10 overflow-hidden group hover:border-green-500/50 transition-all flex flex-col h-full"
                    >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-green-500/20 blur-[80px] rounded-full pointer-events-none" />

                        <div className="flex-1 flex flex-col justify-center items-center mb-8">
                            <div className="mb-6 relative group transform hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full opacity-50 group-hover:opacity-80 transition-opacity" />
                                <Image
                                    src="/images/Brown%20Elegant%20and%20Modern%20Podcast%20Playlist%20Facebook%20Post%20(2).jpg"
                                    alt="App Scripts Blindados Preview"
                                    width={300}
                                    height={300}
                                    className="relative w-auto h-64 md:h-72 object-contain rounded-xl shadow-[0_0_30px_rgba(34,197,94,0.3)] border border-green-500/30"
                                    unoptimized
                                />
                            </div>
                            <div className="text-center space-y-2">
                                <div className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30">
                                    TECNOLOGIA EXCLUSIVA
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl font-bold text-white mb-4">App Scripts Blindados</h3>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                A única ferramenta do mercado que monta suas respostas perfeitas em minutos. Basta preencher as lacunas e copiar.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Treine antes da entrevista no app
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Sem teoria, sem enrolação
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckCircle className="w-5 h-5 text-green-500 shrink-0" /> Segurança para falar com recrutadores
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
