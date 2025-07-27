"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function LangChangeButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentLang = searchParams.get("lang") || "bn";

  const handleLang = () => {
    const nextLang = currentLang === "en" ? "bn" : "en";
    router.push(`/homepage?lang=${nextLang}`);
  };

  return (
    <button
      onClick={handleLang}
      className="border border-[#dbe1eb] rounded md:px-3 cursor-pointer"
    >
      {currentLang === "bn" ? "EN" : "BN"}
    </button>
  );
}
