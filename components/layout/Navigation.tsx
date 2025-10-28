"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent border-b border-neutral-800/30">
      <div className="container mx-auto px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="group text-3xl font-black relative">
            <span className="bg-gradient-to-r from-yellow to-alert-amber bg-clip-text text-transparent">
              Zen<span className="text-white">Ops</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              href="/"
              className="px-5 py-2.5 rounded-xl font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            >
              Home
            </Link>
            <Link
              href="/agents"
              className="px-5 py-2.5 rounded-xl font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            >
              AI Agents
            </Link>
            <Link
              href="/integrations"
              className="px-5 py-2.5 rounded-xl font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            >
              Integrations
            </Link>
            <Link
              href="/case-studies"
              className="px-5 py-2.5 rounded-xl font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            >
              Case Studies
            </Link>
            <Link
              href="/pricing"
              className="px-5 py-2.5 rounded-xl font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800 transition-all"
            >
              Pricing
            </Link>

            {/* CTA Button */}
            <button className="ml-4 px-6 py-2.5 bg-secure-teal hover:bg-secure-teal/90 text-white rounded-xl font-semibold transition-all shadow-lg">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-neutral-800 transition-colors text-white"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-2 border-t border-neutral-800">
            <Link
              href="/"
              className="block text-neutral-300 hover:text-white hover:bg-neutral-800 py-3 px-4 rounded-xl transition-all font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/agents"
              className="block text-neutral-300 hover:text-white hover:bg-neutral-800 py-3 px-4 rounded-xl transition-all font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              AI Agents
            </Link>
            <Link
              href="/integrations"
              className="block text-neutral-300 hover:text-white hover:bg-neutral-800 py-3 px-4 rounded-xl transition-all font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link
              href="/case-studies"
              className="block text-neutral-300 hover:text-white hover:bg-neutral-800 py-3 px-4 rounded-xl transition-all font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link
              href="/pricing"
              className="block text-neutral-300 hover:text-white hover:bg-neutral-800 py-3 px-4 rounded-xl transition-all font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <button className="w-full bg-secure-teal hover:bg-secure-teal/90 text-white px-6 py-3 rounded-xl font-semibold mt-2 shadow-lg">
              Book Demo
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
