import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-primary border-t border-brand-secondary text-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-black mb-4">
              Zen<span className="text-accent-teal">Ops</span>
            </h3>
            <p className="text-white/70 font-light leading-relaxed">
              Superhuman AI agents transforming healthcare organizations worldwide
            </p>
          </div>

          {/* AI Agents */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">AI Agents</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/agents/nurse"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  AI Nurse
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/receptionist"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  AI Receptionist
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/scribe"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  AI Scribe
                </Link>
              </li>
              <li>
                <Link
                  href="/agents/coder"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  AI Medical Coder
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/about"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-accent-teal transition-colors font-medium"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm font-medium">
            © 2025 ZenOps AI. All Rights Reserved.
          </p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a
              href="#"
              className="text-white/60 hover:text-accent-teal transition-colors font-semibold"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-accent-teal transition-colors font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-accent-teal transition-colors font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
