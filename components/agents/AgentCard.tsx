import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AgentCardProps {
  agent: {
    id: string;
    name: string;
    blurb: string;
    img: string;
  };
}

// Helper function to get emoji for each agent
function getAgentEmoji(id: string): string {
  const emojis: Record<string, string> = {
    nurse: "💉",
    reception: "📞",
    scribe: "📝",
    coder: "⚕️",
  };
  return emojis[id] || "🤖";
}

export default function AgentCard({ agent }: AgentCardProps) {
  const emoji = getAgentEmoji(agent.id);

  return (
    <Link href={`/agents/${agent.id}`}>
      <div className="group relative bg-neutral-900 border border-neutral-800 hover:border-threat-blue/50 rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer h-full p-8">
        {/* Emoji Icon */}
        <div className="text-6xl mb-6 transition-transform duration-300 group-hover:scale-110">
          {emoji}
        </div>

        {/* Agent Name */}
        <h3 className="text-2xl font-bold mb-3 text-white">{agent.name}</h3>

        {/* Description */}
        <p className="text-neutral-400 mb-6 leading-relaxed">{agent.blurb}</p>

        {/* CTA */}
        <div className="flex items-center gap-2 text-sm font-medium text-secure-teal group-hover:text-yellow transition-colors">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
