"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import DemoModal from "@/components/demo/DemoModal";
import {
  Sparkles,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentFeature, setCurrentFeature] = useState(0);

  const testimonials = [
    {
      quote:
        "ZenOps AI reduced our patient intake time by 45 minutes. Our staff can now focus on critical care.",
      author: "Dr. Lisa Martinez",
      title: "Chief Medical Officer",
      organization: "Memorial Regional Hospital",
    },
    {
      quote:
        "The AI Receptionist handles 500+ calls daily with zero wait time. Patient satisfaction increased by 35%.",
      author: "James Chen, MBA",
      title: "Director of Operations",
      organization: "Summit Medical Group",
    },
    {
      quote:
        "AI Scribe gave us 3 hours back every day per physician. Documentation is faster and more accurate.",
      author: "Dr. Robert Kim",
      title: "Lead Surgeon",
      organization: "Riverside Orthopedic Clinic",
    },
  ];

  const detailedFeatures = [
    {
      title: "Seamless EHR Integration",
      description:
        "Connect with Epic, Cerner, Athenahealth, and 150+ other EHR systems in minutes",
      icon: "🔗",
    },
    {
      title: "24/7 AI Availability",
      description:
        "Your AI agents work around the clock, never taking breaks or calling in sick",
      icon: "⏰",
    },
    {
      title: "HIPAA Compliant",
      description:
        "Enterprise-grade security with SOC 2 certification and end-to-end encryption",
      icon: "🔒",
    },
    {
      title: "Real-time Analytics",
      description:
        "Track performance metrics and ROI with comprehensive dashboards",
      icon: "📊",
    },
  ];

  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    const featureTimer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % detailedFeatures.length);
    }, 4000);

    return () => {
      clearInterval(testimonialTimer);
      clearInterval(featureTimer);
    };
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % detailedFeatures.length);
  };

  const prevFeature = () => {
    setCurrentFeature(
      (prev) => (prev - 1 + detailedFeatures.length) % detailedFeatures.length
    );
  };

  const stats = [
    { value: "24/7", label: "AI Availability" },
    { value: "40%", label: "Cost Reduction" },
    { value: "3hrs", label: "Saved Daily" },
    { value: "48hrs", label: "Quick Setup" },
  ];

  const agents = [
    {
      icon: "💉",
      name: "AI Nurse",
      description: "24/7 patient triage and care coordination",
    },
    {
      icon: "📞",
      name: "AI Receptionist",
      description: "Smart scheduling and patient communication",
    },
    {
      icon: "📝",
      name: "AI Scribe",
      description: "Automated clinical documentation",
    },
    {
      icon: "⚕️",
      name: "AI Medical Coder",
      description: "Accurate billing and coding automation",
    },
  ];

  const features = [
    { icon: Shield, text: "HIPAA Compliant & SOC 2 Certified" },
    { icon: Zap, text: "Deploy in 48 hours" },
    { icon: Users, text: "Dedicated support team" },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 relative">
      {/* Simplified Background Effects */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-[0.08]" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-secure-teal/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-threat-blue/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secure-teal/10 border border-secure-teal/20 mb-8">
              <Sparkles className="w-4 h-4 text-secure-teal" />
              <span className="text-sm text-secure-teal font-medium">
                Trusted by Healthcare Organizations Nationwide
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
              <span className="text-white">AI-Powered Healthcare</span>
              <br />
              <span className="bg-gradient-to-r from-yellow via-alert-amber to-yellow bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Automate administrative tasks, reduce staff workload, and improve
              patient care with HIPAA-compliant AI agents
            </p>

            <div className="flex gap-4 justify-center flex-wrap mb-16">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 bg-secure-teal hover:bg-secure-teal/90 rounded-xl font-semibold text-white transition-opacity flex items-center gap-2"
              >
                Book a Demo
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/agents"
                className="px-8 py-4 bg-neutral-800 border border-neutral-700 hover:border-neutral-600 rounded-xl font-semibold text-white transition-colors"
              >
                Explore AI Agents
              </Link>
            </div>

            <div className="flex gap-6 justify-center flex-wrap">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-900 border border-neutral-800"
                >
                  <feature.icon className="w-4 h-4 text-secure-teal" />
                  <span className="text-sm text-neutral-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/30 transition-all duration-200"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2 text-yellow">
                  {stat.value}
                </div>
                <div className="text-neutral-400 text-sm font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agents */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Four AI Agents for Healthcare
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Specialized agents designed to automate different aspects of your
              practice
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, idx) => (
              <Link
                key={idx}
                href={`/agents/${agent.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace("ai-", "")}`}
              >
                <div className="h-full p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-secure-teal/30 transition-all duration-200 cursor-pointer group">
                  <div className="text-4xl mb-4">{agent.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {agent.name}
                  </h3>
                  <p className="text-neutral-400 text-sm mb-4">
                    {agent.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium text-secure-teal group-hover:text-yellow transition-colors">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Slider */}
      <section className="relative py-24 px-4 bg-neutral-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Why Choose ZenOps AI
            </h2>
            <p className="text-lg text-neutral-400">
              Everything you need for modern healthcare automation
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12">
              <div className="flex items-center justify-center min-h-[250px]">
                <div className="text-center max-w-2xl mx-auto">
                  <div className="text-6xl mb-6">
                    {detailedFeatures[currentFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {detailedFeatures[currentFeature].title}
                  </h3>
                  <p className="text-lg text-neutral-400">
                    {detailedFeatures[currentFeature].description}
                  </p>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevFeature}
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  aria-label="Previous feature"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {detailedFeatures.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentFeature(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentFeature
                          ? "bg-yellow w-8"
                          : "bg-neutral-700"
                      }`}
                      aria-label={`Go to feature ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextFeature}
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  aria-label="Next feature"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              What Healthcare Professionals Say
            </h2>
            <p className="text-lg text-neutral-400">
              Real results from real practices
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800 p-8 md:p-12">
              <div className="flex items-center justify-center min-h-[300px]">
                <div className="text-center max-w-3xl mx-auto">
                  <div className="text-yellow text-5xl mb-6">"</div>
                  <p className="text-xl text-neutral-300 mb-8 italic leading-relaxed">
                    {testimonials[currentTestimonial].quote}
                  </p>
                  <div className="border-t border-neutral-800 pt-6">
                    <p className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].author}
                    </p>
                    <p className="text-neutral-400 text-sm">
                      {testimonials[currentTestimonial].title}
                    </p>
                    <p className="text-secure-teal text-sm mt-1">
                      {testimonials[currentTestimonial].organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === currentTestimonial
                          ? "bg-yellow w-8"
                          : "bg-neutral-700"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Security & Compliance
            </h2>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              Enterprise-grade security standards for healthcare data protection
            </p>
          </div>

          <div className="flex flex-wrap gap-6 justify-center">
            {["HIPAA", "SOC 2", "ISO 27001", "HITRUST", "GDPR", "PIPEDA"].map(
              (badge, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3 rounded-xl bg-neutral-900 border border-neutral-800"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-secure-teal" />
                    <span className="text-white font-semibold">{badge}</span>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Transparent Pricing
            </h2>
            <p className="text-lg text-neutral-400">
              Choose the plan that fits your practice size
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/30 transition-all duration-200">
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-yellow">$499</span>
                <span className="text-neutral-400 text-sm">/month</span>
              </div>
              <p className="text-neutral-400 text-sm mb-6">
                For small practices
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />1 AI Agent
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Up to 500 patients
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Email support
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border-2 border-yellow transition-all duration-200 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow text-neutral-900 px-3 py-1 rounded-full text-xs font-bold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Professional
              </h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-yellow">$1,499</span>
                <span className="text-neutral-400 text-sm">/month</span>
              </div>
              <p className="text-neutral-400 text-sm mb-6">
                For growing practices
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Up to 3 AI Agents
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Up to 2,500 patients
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Priority support
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/30 transition-all duration-200">
              <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-4xl font-bold text-yellow">Custom</span>
              </div>
              <p className="text-neutral-400 text-sm mb-6">
                For large organizations
              </p>
              <ul className="space-y-3 mb-8 text-sm">
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  All AI Agents
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Unlimited patients
                </li>
                <li className="flex items-center gap-2 text-neutral-300">
                  <Check className="w-4 h-4 text-secure-teal" />
                  Dedicated support
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 text-secure-teal hover:text-yellow font-semibold transition-colors"
            >
              View Full Pricing <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-neutral-400">
              Everything you need to know about ZenOps AI
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                How long does implementation take?
              </h3>
              <p className="text-neutral-400">
                Most organizations are up and running within 48 hours. Our team
                handles the entire integration process with your existing EHR
                system.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Is my patient data secure?
              </h3>
              <p className="text-neutral-400">
                Absolutely. We're HIPAA compliant, SOC 2 certified, and use
                enterprise-grade encryption. Your data never leaves your secure
                environment.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Which EHR systems do you integrate with?
              </h3>
              <p className="text-neutral-400">
                We support 150+ EHR systems including Epic, Cerner,
                Athenahealth, DrChrono, and many more. Don't see yours? We add
                new integrations monthly.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                What kind of ROI can I expect?
              </h3>
              <p className="text-neutral-400">
                On average, our clients see 50% cost savings, 45 minutes faster
                patient intake, and 94% satisfaction rates within the first 3
                months.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-3">
                Can I start with just one AI agent?
              </h3>
              <p className="text-neutral-400">
                Yes! You can start with a single agent and add more as needed.
                Many organizations begin with the AI Receptionist or AI Scribe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      {/* Final CTA */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="p-8 md:p-12 rounded-3xl border border-threat-blue/30 bg-neutral-900/50 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-['Space_Grotesk']">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              See how AI can transform your healthcare practice
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-secure-teal hover:bg-secure-teal/90 text-white rounded-xl font-semibold transition-opacity inline-flex items-center gap-2"
            >
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
