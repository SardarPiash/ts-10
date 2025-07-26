import { Check } from "lucide-react";
import React from "react";

export default function SectionType13({ section }: { section: Section }) {
  return (
    <div
      id={section.type}
      className="border border-black md:p-5 rounded-md"
    >
      <div className="flex gap-1.5 items-center">
        <Check className="text-sky-500 w-5 h-5 mt-1" />
        <p>ইন্টারনেট সংযোগ (ওয়াইফাই বা মোবাইল ইন্টারনেট)</p>
      </div>
      <div className="flex gap-1.5 items-center">
        <Check className="text-sky-500 w-5 h-5 mt-1" />
        <p>স্মার্টফোন অথবা পিসি</p>
      </div>
    </div>
  );
}
