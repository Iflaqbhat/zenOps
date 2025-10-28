"use client";

import React, { useState } from "react";
import AgentsGrid from "../../components/agents/AgentsGrid";
import DemoModal from "../../components/demo/DemoModal";
import { Check, Zap, Plug } from "lucide-react";

export default function AgentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950 relative">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-secure-teal/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-threat-blue/10 rounded-full blur-[80px] pointer-events-none" />

      <section className="relative py-32 px-4 text-white overflow-hidden">
        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-8 text-white">
            AI Agents for{" "}
            <span className="bg-gradient-to-r from-yellow to-alert-amber bg-clip-text text-transparent">
              Healthcare
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Meet your new superhuman team. Each AI agent is trained on millions
            of healthcare interactions, HIPAA-compliant, and ready to transform
            your workflow.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full text-sm font-semibold">
              <Check className="w-4 h-4 text-secure-teal" />
              <span className="text-neutral-300">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4 text-secure-teal" />
              <span className="text-neutral-300">24/7 Available</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 px-6 py-3 rounded-full text-sm font-semibold">
              <Plug className="w-4 h-4 text-secure-teal" />
              <span className="text-neutral-300">EHR Integration</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-4">
        <div className="container mx-auto max-w-7xl">
          <AgentsGrid />
        </div>
      </section>

      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-5xl font-black mb-6 text-white">
            Ready to Build Your AI Team?
          </h2>
          <p className="text-xl text-neutral-400 mb-12 leading-relaxed">
            Start with one agent or deploy the full suite. See results in days,
            not months.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-secure-teal hover:bg-secure-teal/90 text-white px-12 py-6 rounded-xl font-bold transition-opacity text-lg"
          >
            Schedule Demo
          </button>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
