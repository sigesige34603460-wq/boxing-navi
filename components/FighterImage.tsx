"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  src: string | null;
  name: string;
  flag: string;
  color: string;
  size?: "sm" | "lg";
};

const gradients: Record<string, string> = {
  red: "from-red-600 to-red-900",
  blue: "from-blue-600 to-blue-900",
  green: "from-green-600 to-green-900",
  yellow: "from-yellow-500 to-yellow-800",
  purple: "from-purple-600 to-purple-900",
  orange: "from-orange-500 to-orange-800",
};

export default function FighterImage({ src, name, flag, color, size = "sm" }: Props) {
  const [error, setError] = useState(false);
  const gradient = gradients[color] ?? "from-gray-600 to-gray-900";

  const initial = name.charAt(0);

  if (!src || error) {
    // スタイリッシュなアバターフォールバック
    return (
      <div
        className={`bg-gradient-to-br ${gradient} flex flex-col items-center justify-center w-full h-full`}
      >
        <span className={size === "lg" ? "text-6xl mb-2" : "text-3xl mb-1"}>{flag}</span>
        <span
          className={`font-black text-white ${size === "lg" ? "text-4xl" : "text-2xl"}`}
        >
          {initial}
        </span>
        <span className={`text-white/60 font-medium ${size === "lg" ? "text-sm mt-1" : "text-xs"}`}>
          {name}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={name}
      fill
      className="object-cover object-top"
      onError={() => setError(true)}
      sizes={size === "lg" ? "480px" : "240px"}
    />
  );
}
