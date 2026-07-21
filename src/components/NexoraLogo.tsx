/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface NexoraLogoProps {
  className?: string;
  size?: number;
}

export default function NexoraLogo({ className = "", size = 48 }: NexoraLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} select-none pointer-events-none`}
    >
      <defs>
        {/* Deep, metallic Tokyo Walnut linear gradient */}
        <linearGradient id="indigo-gradient" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F6E5CD" />
          <stop offset="30%" stopColor="#D4A05F" />
          <stop offset="70%" stopColor="#B58145" />
          <stop offset="100%" stopColor="#784C22" />
        </linearGradient>

        {/* Highlight sheen for the crescent bevels */}
        <linearGradient id="indigo-crescent-gradient" x1="85" y1="20" x2="15" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF1E3" />
          <stop offset="50%" stopColor="#B58145" />
          <stop offset="100%" stopColor="#3A200A" />
        </linearGradient>

        {/* Custom luxury glow filter */}
        <filter id="indigo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Golden Crescent Ring Sweep */}
      <path
        d="M 40 25 
           A 31 31 0 1 1 28 69
           A 29.5 29.5 0 1 0 39.5 25"
        fill="url(#indigo-crescent-gradient)"
        filter="url(#indigo-glow)"
      />

      {/* The Central Beveled N Structure */}
      {/* Left pillar shadow and main */}
      <path
        d="M 34 32 L 37 32 L 37 62 L 34 65 Z"
        fill="url(#indigo-gradient)"
      />
      {/* Diagonal beveled connector */}
      <path
        d="M 34 32 L 60 59 L 60 62 L 34 34 Z"
        fill="url(#indigo-gradient)"
      />
      {/* Right pillar main */}
      <path
        d="M 58 37 L 61 37 L 61 62 L 58 62 Z"
        fill="url(#indigo-gradient)"
      />

      {/* Highlight edge bevels */}
      <path
        d="M 34 32 L 35 32 L 35 63 L 34 65 Z"
        fill="#FFFFFF"
        opacity="0.25"
      />
      <path
        d="M 58 37 L 59 37 L 59 62 L 58 62 Z"
        fill="#FFFFFF"
        opacity="0.2"
      />
    </svg>
  );
}
