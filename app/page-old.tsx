"use client";
import Link from "next/link";
import { useState } from "react";
import DemoModal from "@/components/demo/DemoModal";
import { Sparkles, Zap, Shield, Users, ArrowRight, Check } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stats = [
    { value: 24, suffix: "/7", label: "Available" },
    { value: 50, suffix: "%", label: "Cost Saved" },
    { value: 94, suffix: "%", label: "Satisfaction" },
    { value: 400, suffix: "+", label: "Organizations" },
  ];

  const agents = [
    {
      icon: "🩺",
      name: "AI Nurse",
      description: "24/7 patient triage and care coordination",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: "📞",
      name: "AI Receptionist",
      description: "Smart scheduling and patient communication",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: "📝",
      name: "AI Scribe",
      description: "Automated clinical documentation",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: "💊",
      name: "AI Medical Coder",
      description: "Accurate billing and coding automation",
      gradient: "from-orange-500 to-amber-500",
    },
  ];

  const features = [
    { icon: Shield, text: "HIPAA Compliant & SOC 2 Certified" },
    { icon: Zap, text: "Instant deployment in under 48 hours" },
    { icon: Users, text: "Trusted by 400+ healthcare organizations" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 relative">
      {/* Global Animated Background Grid - Always visible */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Global Gradient Orbs - Always visible */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[128px] animate-pulse pointer-events-none" style={{ animationDelay: "1s" }} />
      <div className="fixed top-1/2 right-1/3 w-96 h-96 bg-violet-500/15 rounded-full blur-[128px] animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">

        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-medium">Trusted by 400+ Healthcare Organizations</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="text-white">Transform Healthcare</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                with AI Agents
              </span>
            </h1>

            <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Reduce clinician burnout by 50% and enhance patient care with HIPAA-compliant AI agents that work 24/7
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center flex-wrap mb-16">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl font-semibold text-white shadow-[0_0_40px_rgba(6,182,212,0.3)] hover:shadow-[0_0_60px_rgba(6,182,212,0.5)] transition-all hover:scale-105 flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/agents"
                className="px-8 py-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl font-semibold text-white transition-all hover:scale-105"
              >
                Explore AI Agents
              </Link>
            </div>

            {/* Feature Pills */}
            <div className="flex gap-6 justify-center flex-wrap">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                >
                  <feature.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm text-neutral-300">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 group-hover:border-cyan-500/50 transition-all">
                  <div className="text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-br from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2.5} />
                  </div>
                  <div className="text-neutral-400 font-medium">{stat.label}</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Meet Your AI Team
            </h2>
            <p className="text-xl text-neutral-400 max-w-2xl mx-auto">
              Four specialized AI agents working together to transform your healthcare operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={`/agents/${agent.name.toLowerCase().replace(/\s+/g, '-').replace('ai-', '')}`}>
                  <div className="group relative h-full p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-transparent transition-all cursor-pointer overflow-hidden">
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="relative z-10">
                      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                        {agent.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-violet-400 group-hover:bg-clip-text transition-all">
                        {agent.name}
                      </h3>
                      <p className="text-neutral-400 mb-4">{agent.description}</p>
                      <div className="flex items-center gap-2 text-sm font-medium text-cyan-400">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Built with the highest standards of security and compliance for healthcare
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {["HIPAA", "SOC 2", "ISO 27001", "HITRUST", "GDPR", "PIPEDA"].map((badge, idx) => (
              <motion.div
                key={idx}
                className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{badge}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            className="relative p-12 rounded-3xl bg-gradient-to-r from-cyan-500 to-violet-500 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-shimmer" />
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Transform Healthcare?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join 400+ healthcare organizations using AI to reduce burnout and improve patient outcomes
              </p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-10 py-5 bg-white text-neutral-900 rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-all inline-flex items-center gap-2"
              >
                Book Your Demo
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
