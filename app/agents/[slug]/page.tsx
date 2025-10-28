"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import DemoModal from "../../../components/demo/DemoModal";

interface AgentDetailProps {
  params: {
    slug: string;
  };
}

export default function AgentDetailPage({ params }: AgentDetailProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const agent =
    agentData[params.slug as keyof typeof agentData] || agentData.nurse;

  return (
    <main className="min-h-screen bg-neutral-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-neutral-light to-neutral-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/agents"
            className="text-brand-secondary hover:text-accent-teal mb-4 inline-block transition-colors duration-300"
          >
            ← Back to AI Agents
          </Link>
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 animate-slide-up">
              <div className="text-5xl mb-4 animate-bounce-slow">
                {agent.icon}
              </div>
              <h1 className="text-5xl font-bold mb-6 text-brand-primary">
                {agent.name}
              </h1>
              <p className="text-xl text-neutral-dark mb-8">{agent.tagline}</p>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-accent-orange hover:bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Book a Demo
              </button>
            </div>
            <div className="lg:w-1/2 animate-fade-in">
              <div className="aspect-video bg-gradient-to-br from-accent-teal to-brand-secondary rounded-lg flex items-center justify-center shadow-xl">
                <span className="text-white font-semibold">
                  Demo Screenshot
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-neutral-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {agent.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-neutral-light p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group border-2 border-transparent hover:border-accent-teal"
              >
                <div className="text-2xl mb-3 group-hover:animate-bounce-slow">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-primary">
                  {feature.title}
                </h3>
                <p className="text-neutral-dark">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 px-4 bg-neutral-light">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">
            How It Works
          </h2>
          <div className="space-y-8">
            {agent.workflow.map((step, idx) => (
              <div key={idx} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:bg-brand-secondary transition-all duration-300 group-hover:scale-110">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-brand-primary">
                    {step.title}
                  </h3>
                  <p className="text-neutral-dark">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 bg-neutral-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-primary">
            Impact & Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {agent.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center group">
                <div className="text-4xl font-bold text-brand-secondary mb-2 group-hover:text-accent-teal transition-colors duration-300">
                  {benefit.metric}
                </div>
                <div className="text-neutral-dark">{benefit.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to deploy {agent.name}?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            See how it can transform your {agent.category} workflows
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-accent-orange hover:bg-amber-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Schedule Demo
          </button>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}

const agentData = {
  nurse: {
    name: "AI Nurse",
    icon: "💊",
    tagline: "Intelligent patient intake, triage, and pre-visit preparation",
    category: "clinical",
    features: [
      {
        icon: "📋",
        title: "Automated Intake",
        description:
          "Collects patient history, symptoms, and medications efficiently",
      },
      {
        icon: "🎯",
        title: "Smart Triage",
        description: "Prioritizes patients based on urgency and severity",
      },
      {
        icon: "🔍",
        title: "Pre-Visit Prep",
        description: "Prepares comprehensive patient summaries for clinicians",
      },
      {
        icon: "📊",
        title: "Data Integration",
        description: "Seamlessly updates EHR with collected information",
      },
      {
        icon: "⏰",
        title: "24/7 Availability",
        description: "Always available for patient interactions",
      },
      {
        icon: "🌐",
        title: "Multi-Language",
        description: "Supports multiple languages for diverse populations",
      },
    ],
    workflow: [
      {
        title: "Patient Contact",
        description:
          "AI Nurse contacts patients before appointments to collect information",
      },
      {
        title: "Symptom Assessment",
        description:
          "Asks relevant questions based on chief complaint and medical history",
      },
      {
        title: "Triage Assignment",
        description: "Assigns urgency level and routing recommendations",
      },
      {
        title: "EHR Update",
        description: "Automatically updates patient chart with collected data",
      },
      {
        title: "Clinician Handoff",
        description: "Provides summary and recommendations to care team",
      },
    ],
    benefits: [
      { metric: "45min", label: "Time saved per visit" },
      { metric: "2x", label: "Patient throughput" },
      { metric: "94%", label: "Data accuracy" },
      { metric: "90%", label: "Patient satisfaction" },
    ],
  },
  receptionist: {
    name: "AI Receptionist",
    icon: "📞",
    tagline: "24/7 intelligent phone answering and appointment scheduling",
    category: "administrative",
    features: [
      {
        icon: "☎️",
        title: "Call Handling",
        description: "Answers calls professionally with natural conversation",
      },
      {
        icon: "📅",
        title: "Smart Scheduling",
        description: "Books appointments based on availability and preferences",
      },
      {
        icon: "🔔",
        title: "Reminders",
        description: "Sends automated appointment reminders to reduce no-shows",
      },
      {
        icon: "💬",
        title: "Multi-Channel",
        description: "Handles phone, text, and online requests",
      },
      {
        icon: "📝",
        title: "Documentation",
        description: "Records all interactions and updates in real-time",
      },
      {
        icon: "🎭",
        title: "Custom Scripts",
        description: "Adapts to your organization's protocols and tone",
      },
    ],
    workflow: [
      {
        title: "Incoming Call",
        description:
          "AI answers with personalized greeting and identifies caller",
      },
      {
        title: "Intent Recognition",
        description: "Determines if scheduling, question, or emergency",
      },
      {
        title: "Action Processing",
        description: "Books appointments, answers FAQs, or routes as needed",
      },
      {
        title: "Confirmation",
        description: "Sends confirmation via preferred method (text/email)",
      },
      {
        title: "Follow-up",
        description: "Automated reminders and rescheduling if needed",
      },
    ],
    benefits: [
      { metric: "24/7", label: "Availability" },
      { metric: "50%", label: "Cost reduction" },
      { metric: "95%", label: "First-call resolution" },
      { metric: "30%", label: "Less no-shows" },
    ],
  },
  scribe: {
    name: "AI Scribe",
    icon: "✍️",
    tagline: "Automatic clinical documentation from patient conversations",
    category: "clinical",
    features: [
      {
        icon: "🎤",
        title: "Real-Time Transcription",
        description: "Captures conversation as it happens with high accuracy",
      },
      {
        icon: "📄",
        title: "Structured Notes",
        description: "Converts conversation into proper clinical note format",
      },
      {
        icon: "🔐",
        title: "HIPAA Compliant",
        description: "Secure, encrypted storage and transmission",
      },
      {
        icon: "✅",
        title: "Auto-Coding",
        description: "Suggests billing codes from documentation",
      },
      {
        icon: "⚡",
        title: "Instant Finalization",
        description: "Notes ready for review in seconds after visit",
      },
      {
        icon: "🎯",
        title: "Smart Templates",
        description: "Uses specialty-specific templates and terminology",
      },
    ],
    workflow: [
      {
        title: "Visit Recording",
        description: "Securely records patient-clinician conversation",
      },
      {
        title: "Transcription",
        description:
          "Converts speech to text with medical terminology accuracy",
      },
      {
        title: "Note Generation",
        description: "Structures into SOAP or preferred format",
      },
      {
        title: "Review & Edit",
        description: "Clinician reviews and makes any adjustments",
      },
      {
        title: "Finalize & Sign",
        description: "One-click completion and EHR integration",
      },
    ],
    benefits: [
      { metric: "3hrs", label: "Saved daily" },
      { metric: "99%", label: "Accuracy rate" },
      { metric: "75%", label: "Less burnout" },
      { metric: "$50K", label: "Annual savings per clinician" },
    ],
  },
  coder: {
    name: "AI Medical Coder",
    icon: "📋",
    tagline: "Automated medical coding for accurate billing and compliance",
    category: "administrative",
    features: [
      {
        icon: "🔍",
        title: "Code Extraction",
        description: "Identifies ICD-10, CPT, and other codes from notes",
      },
      {
        icon: "✅",
        title: "Compliance Checks",
        description: "Ensures codes meet payer and regulatory requirements",
      },
      {
        icon: "📊",
        title: "Analytics",
        description: "Tracks coding patterns and revenue optimization",
      },
      {
        icon: "⚠️",
        title: "Error Detection",
        description: "Flags potential denials before claim submission",
      },
      {
        icon: "🚀",
        title: "Fast Turnaround",
        description: "Codes charts within minutes of completion",
      },
      {
        icon: "💰",
        title: "Revenue Recovery",
        description: "Captures missed codes and maximizes reimbursement",
      },
    ],
    workflow: [
      {
        title: "Note Analysis",
        description:
          "Reads finalized clinical notes and extracts key information",
      },
      {
        title: "Code Suggestion",
        description: "Suggests appropriate ICD-10 and CPT codes",
      },
      {
        title: "Compliance Review",
        description: "Validates against payer rules and guidelines",
      },
      {
        title: "Human Review",
        description: "Certified coder reviews and approves suggestions",
      },
      {
        title: "Claim Submission",
        description: "Clean claims submitted with reduced denial risk",
      },
    ],
    benefits: [
      { metric: "40%", label: "Faster coding" },
      { metric: "15%", label: "Revenue increase" },
      { metric: "60%", label: "Fewer denials" },
      { metric: "98%", label: "Coding accuracy" },
    ],
  },
};
