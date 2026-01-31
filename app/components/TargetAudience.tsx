"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function TargetAudience() {
    const [activeCard, setActiveCard] = useState<number | null>(null);

    const points = [
        {
            text: "Vai fazer entrevista em inglês nos próximos dias",
            icon: <AlertCircle className="w-6 h-6 text-yellow-500" />,
            detail: "Não tente aprender inglês em 48h. Você precisa de estratégia. O Kit te entrega roteiros prontos para 'copiar, colar e treinar', salvando sua preparação mesmo com prazo curto."
        },
        {
            text: "Já sabe inglês, mas trava sob pressão",
            icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
            detail: "O 'branco' acontece porque seu cérebro tenta traduzir na hora. Com nossos scripts blindados, você automatiza as respostas e libera sua mente para focar em conexão e confiança."
        },
        {
            text: "Tem medo de errar e parecer inseguro",
            icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
            detail: "A insegurança vem do improviso. Ao usar modelos validados por recrutadores de Big Techs, você elimina o risco de falar bobagem e se posiciona como um profissional sênior."
        },
        {
            text: "Disputa vagas em TI, Business ou multinacionais",
            icon: <CheckCircle2 className="w-6 h-6 text-purple-400" />,
            detail: "Nessas áreas, 'inglês básico' não basta. Você será testado em Soft Skills e Cultura. O Kit traz exatamente os termos e estruturas que os Hiring Managers internacionais esperam ouvir."
        },
    ];

    const toggleCard = (index: number) => {
        setActiveCard(activeCard === index ? null : index);
    };

    return (
        <section className="bg-neutral-900 border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-2xl md:text-3xl font-bold mb-2">
                            <span className="text-purple-400">Este kit é para você que:</span>
                        </h2>
                        <p className="text-gray-500 text-sm mt-2">(Clique nos cards para saber mais)</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {points.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                onClick={() => toggleCard(index)}
                                className={`cursor-pointer overflow-hidden rounded-xl border transition-all duration-300 ${activeCard === index
                                        ? "bg-purple-900/10 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                    }`}
                            >
                                <div className="flex items-center justify-between p-4 gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="shrink-0 bg-black/50 p-2 rounded-full">
                                            {item.icon}
                                        </div>
                                        <span className={`font-medium md:text-lg transition-colors ${activeCard === index ? "text-white" : "text-gray-200"}`}>
                                            {item.text}
                                        </span>
                                    </div>
                                    <div className="shrink-0 text-gray-500">
                                        {activeCard === index ? <ChevronUp className="w-5 h-5 text-purple-400" /> : <ChevronDown className="w-5 h-5" />}
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {activeCard === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-4 pt-0 text-gray-400 text-sm leading-relaxed border-t border-white/5 mt-2">
                                                <div className="pt-4">
                                                    {item.detail}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 text-center"
                    >
                        <p className="text-gray-500 text-sm italic">
                            Criado por professor com mais de 15 anos de experiência preparando profissionais para o mercado internacional.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
