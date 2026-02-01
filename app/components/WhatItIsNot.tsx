"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export default function WhatItIsNot() {
    return (
        <section className="py-12 bg-neutral-900/50 border-y border-white/5">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    {/* What it is NOT */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-red-500 flex items-center gap-2 mb-4">
                            <X className="w-6 h-6" /> O que NÃO é:
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3 text-gray-400">
                                <X className="w-5 h-5 text-red-500/50 shrink-0" />
                                <span>Não é curso de inglês completo</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <X className="w-5 h-5 text-red-500/50 shrink-0" />
                                <span>Não tem aulas longas e chatas</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <X className="w-5 h-5 text-red-500/50 shrink-0" />
                                <span>Não exige meses de estudo</span>
                            </li>
                        </ul>
                    </motion.div>

                    {/* What it IS */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-neutral-800/50 p-6 rounded-2xl border border-green-500/20"
                    >
                        <h3 className="text-xl font-bold text-green-500 flex items-center gap-2 mb-4">
                            <Check className="w-6 h-6" /> O que É:
                        </h3>
                        <p className="text-lg text-white font-medium flex items-start gap-3">
                            <Check className="w-6 h-6 text-green-500 shrink-0 mt-1" />
                            Preparação rápida e direta para passar na entrevista.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
