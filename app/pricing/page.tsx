"use client";
import React, { useState } from "react";
import Link from "next/link";
import DemoModal from "../../components/demo/DemoModal";
import { Check, X, Zap, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly"
  );

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small clinics",
      monthlyPrice: 499,
      annualPrice: 4990,
      popular: false,
      features: [
        "1 AI Agent of your choice",
        "Up to 500 patients/month",
        "Basic EHR integration",
        "Email support",
        "HIPAA compliant storage",
      ],
      notIncluded: [
        "Multiple agents",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
      ],
    },
    {
      name: "Professional",
      description: "For growing practices",
      monthlyPrice: 1499,
      annualPrice: 14990,
      popular: true,
      features: [
        "3 AI Agents",
        "Up to 2,000 patients/month",
        "Advanced EHR integration",
        "Priority support",
        "HIPAA compliant storage",
        "Advanced analytics dashboard",
        "Custom workflows",
      ],
      notIncluded: [
        "Unlimited patients",
        "All 4 AI agents",
        "Dedicated account manager",
      ],
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      monthlyPrice: null,
      annualPrice: null,
      customPrice: true,
      popular: false,
      features: [
        "All 4 AI Agents",
        "Unlimited patients",
        "Enterprise EHR integration",
        "24/7 dedicated support",
        "HIPAA compliant storage",
        "Advanced analytics & reporting",
        "Custom AI agent training",
        "Dedicated account manager",
        "SLA guarantees",
      ],
      notIncluded: [],
    },
  ];

  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What's included in the free trial?",
      answer:
        "Get full access to all Professional features for 14 days. No credit card required.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill monthly or annually. Annual plans save you 17% compared to monthly billing.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We're HIPAA compliant, SOC 2 certified, and use enterprise-grade encryption.",
    },
    {
      question: "Can I cancel anytime?",
      answer:
        "Yes, cancel anytime with no penalties. Your data remains accessible for 30 days after cancellation.",
    },
  ];

  return (
    <main className="min-h-screen bg-neutral-950 relative">
      {/* Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-secure-teal/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-threat-blue/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Hero */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 text-white">
            Simple, Transparent{" "}
            <span className="bg-gradient-to-r from-yellow to-alert-amber bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-neutral-400 mb-12 max-w-2xl mx-auto">
            Choose the plan that fits your organization. No hidden fees, cancel
            anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-2 bg-neutral-900 border border-neutral-800 rounded-full mb-16">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-secure-teal text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-secure-teal text-white"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Annual <span className="text-sm ml-1">(Save 17%)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl ${
                  plan.popular
                    ? "bg-neutral-900 border-2 border-yellow"
                    : "bg-neutral-900 border-2 border-neutral-800"
                } transition-all hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 px-4 py-2 bg-yellow rounded-full text-sm font-bold text-neutral-900">
                      <Zap className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-neutral-400">{plan.description}</p>
                </div>

                <div className="mb-8">
                  {plan.customPrice ? (
                    <div>
                      <div className="text-5xl font-black text-white mb-2">
                        Custom
                      </div>
                      <p className="text-neutral-400">Contact us for pricing</p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-5xl font-black text-white mb-2">
                        $
                        {billingCycle === "monthly"
                          ? plan.monthlyPrice
                          : (plan.annualPrice! / 12).toFixed(0)}
                        <span className="text-2xl font-normal text-neutral-400">
                          /mo
                        </span>
                      </div>
                      {billingCycle === "annual" && (
                        <p className="text-neutral-500 text-sm">
                          Billed annually at ${plan.annualPrice}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className={`w-full py-4 rounded-xl font-bold mb-8 transition-all ${
                    plan.popular
                      ? "bg-secure-teal text-white hover:bg-secure-teal/90"
                      : "bg-neutral-800 text-white hover:bg-neutral-700"
                  }`}
                >
                  {plan.customPrice ? "Contact Sales" : "Get Started"}
                </button>

                <div className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-secure-teal flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 opacity-40">
                      <X className="w-5 h-5 text-neutral-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-500">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-black text-center mb-12 text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-neutral-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="p-12 rounded-3xl border-2 border-threat-blue/30 bg-neutral-900/50 backdrop-blur-sm text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-xl text-neutral-400 mb-8">
              Our team is here to help you find the perfect plan
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-5 bg-secure-teal hover:bg-secure-teal/90 text-white rounded-xl font-bold text-lg transition-opacity inline-flex items-center gap-2"
            >
              Talk to Sales <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
