import React from "react";
import AgentCard from "./AgentCard";

const agents = [
  {
    id: "nurse",
    name: "AI Nurse",
    blurb: "Intake, triage, and pre-visit data collection.",
    img: "/images/agent-nurse.png",
  },
  {
    id: "reception",
    name: "AI Receptionist",
    blurb: "Handles patient calls and scheduling.",
    img: "/images/agent-reception.png",
  },
  {
    id: "scribe",
    name: "AI Scribe",
    blurb: "Transcribes visits into clinical notes.",
    img: "/images/agent-scribe.png",
  },
  {
    id: "coder",
    name: "AI Medical Coder",
    blurb: "Assigns clinical billing codes accurately.",
    img: "/images/agent-coder.png",
  },
];

export default function AgentsGrid() {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}
