"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Clock, Sparkles, Lock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-12 pb-16 lg:pt-32">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 z-10 flex flex-col items-center text-center">

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-900/50 to-purple-800/50 border border-purple-500/30 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.2)] group cursor-default hover:border-purple-500/50 transition-colors"
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
                    className="text-4xl md:text-6xl font-bold leading-tight mb-4 tracking-tight max-w-5xl"
                >
                    Passe na entrevista em inglês <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                        mesmo sem ser fluente
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-xl text-gray-300 mb-4 font-normal max-w-3xl"
                >
                    Use respostas prontas testadas + app para treinar antes da entrevista.
                </motion.p>
                {/* Benefits Bullets */}
                <motion.ul
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-300 text-sm md:text-base mb-6 justify-center max-w-2xl mx-auto"
                >
                    <li className="flex items-center gap-2 text-left md:text-center">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>Respostas prontas para perguntas reais</span>
                    </li>
                    <li className="flex items-center gap-2 text-left md:text-center">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>Estrutura pronta para copiar e adaptar</span>
                    </li>
                    <li className="flex items-center gap-2 text-left md:text-center">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>Treine no app antes da entrevista</span>
                    </li>
                    <li className="flex items-center gap-2 text-left md:text-center">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>Preparação em menos de 10 minutos</span>
                    </li>
                </motion.ul>

                {/* CTA Button (Moved Up) */}
                <div className="flex flex-col items-center gap-3 mb-8 w-full">
                    <a
                        href="https://pay.kiwify.com.br/HfQu60H?sck=offer"
                        className="inline-flex items-center justify-center bg-green-500 hover:bg-green-400 text-black font-extrabold text-lg md:text-xl py-6 px-12 rounded-full decoration-0 w-full md:w-auto"
                    >
                        COMPRAR AGORA
                    </a>

                    {/* Microcopy */}
                    <p className="text-gray-500 text-xs md:text-sm font-medium flex items-center justify-center gap-2">
                        <Lock className="w-3 h-3" />
                        Acesso imediato • Garantia 7 dias • Pix / Boleto / Cartão
                    </p>
                </div>


                {/* Real Example Cards (Secondary Content) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full max-w-4xl mb-8 opacity-90 hover:opacity-100 transition-opacity"
                >
                    <div className="flex flex-col items-center mb-6">
                        <span className="text-gray-400 font-medium text-sm md:text-base border-b border-gray-700 pb-1 cursor-default">
                            EXEMPLO REAL (copie e use) ↓
                        </span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 text-left">
                        {/* Card 1 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-colors">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Pergunta</span>
                                <h3 className="text-white font-bold text-lg mt-1">"Tell me about yourself."</h3>
                            </div>
                            <div className="mb-4">
                                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Resposta pronta</span>
                                <p className="text-white/90 text-sm leading-loose bg-black/40 p-4 rounded-lg border border-white/5 font-mono mt-1">
                                    "I’m a <span className="text-white bg-white/20 px-1 rounded">[role]</span> with <span className="text-white bg-white/20 px-1 rounded">[X]</span> years of experience in <span className="text-white bg-white/20 px-1 rounded">[area]</span>. Recently, I worked on <span className="text-white bg-white/20 px-1 rounded">[project]</span>, where I achieved <span className="text-white bg-white/20 px-1 rounded">[result]</span>. I’m now looking for a role where I can contribute with <span className="text-white bg-white/20 px-1 rounded">[skill]</span> and keep growing."
                                </p>
                            </div>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-yellow-500 shrink-0" />
                                Dica: troque [termos] pela sua experiência
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 transition-colors">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">Pergunta</span>
                                <h3 className="text-white font-bold text-lg mt-1">"Why should we hire you?"</h3>
                            </div>
                            <div className="mb-4">
                                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Resposta pronta</span>
                                <p className="text-white/90 text-sm leading-loose bg-black/40 p-4 rounded-lg border border-white/5 font-mono mt-1">
                                    "You should hire me because I bring <span className="text-white bg-white/20 px-1 rounded">[strength 1]</span> and <span className="text-white bg-white/20 px-1 rounded">[strength 2]</span>. In my last role, I improved <span className="text-white bg-white/10 px-1 rounded">[process/metric]</span> by <span className="text-white bg-white/10 px-1 rounded">[result]</span>. I’m proactive, communicate clearly, and I’m ready to add value quickly."
                                </p>
                            </div>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                <Sparkles className="w-3 h-3 text-yellow-500 shrink-0" />
                                Dica: troque [termos] pela sua experiência
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Highlight Quote (Moved to bottom) */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="text-purple-300 font-bold text-lg md:text-xl mb-8 bg-purple-900/20 px-4 py-2 rounded-lg border border-purple-500/30 inline-block"
                >
                    "Você não precisa ser fluente. Precisa saber o que responder."
                </motion.p>

            </div>
        </section>
    );
}
