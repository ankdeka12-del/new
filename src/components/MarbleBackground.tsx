import React from "react";

export function MarbleVeinLeft() {
  return (
    <svg
      className="absolute left-0 top-0 w-full md:w-[70%] h-full opacity-40 pointer-events-none mix-blend-multiply -z-10"
      viewBox="0 0 800 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="viola-vein-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#250206" />
          <stop offset="25%" stopColor="#4A0711" />
          <stop offset="50%" stopColor="#7B1F2D" />
          <stop offset="75%" stopColor="#A65160" />
          <stop offset="90%" stopColor="#C98894" />
          <stop offset="100%" stopColor="#dfb77d" />
        </linearGradient>
        <filter id="viola-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main winding Calacatta Viola vein */}
      <path
        d="M -50,50 Q 220,180 120,450 T 420,800 T 180,1100 T -100,1250"
        stroke="url(#viola-vein-grad-1)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#viola-glow)"
        opacity="0.85"
      />

      {/* Shadow layer for depth */}
      <path
        d="M -50,50 Q 220,180 120,450 T 420,800 T 180,1100 T -100,1250"
        stroke="#4A0711"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.12"
        filter="url(#viola-glow)"
      />

      {/* Secondary branched veins */}
      <path
        d="M 120,380 Q 280,440 330,300 T 480,260"
        stroke="url(#viola-vein-grad-1)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path
        d="M 230,620 Q 140,780 70,820"
        stroke="url(#viola-vein-grad-1)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M 280,710 Q 450,760 500,920 T 680,1020"
        stroke="url(#viola-vein-grad-1)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#viola-glow)"
        opacity="0.8"
      />
      <path
        d="M 400,850 Q 580,800 650,680"
        stroke="url(#viola-vein-grad-1)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />

      {/* Crystals and gold/copper specks in the gaps */}
      <circle cx="160" cy="300" r="2.5" fill="#dfb77d" opacity="0.4" />
      <circle cx="140" cy="315" r="1.5" fill="#4A0711" opacity="0.3" />
      <circle cx="180" cy="285" r="3" fill="#cc9750" opacity="0.5" />
      <circle cx="130" cy="460" r="2" fill="#7B1F2D" opacity="0.4" />
      <circle cx="150" cy="510" r="1.8" fill="#dfb77d" opacity="0.5" />
      <circle cx="380" cy="800" r="3" fill="#cc9750" opacity="0.6" />
      <circle cx="410" cy="820" r="1.5" fill="#4A0711" opacity="0.4" />
      <circle cx="210" cy="980" r="2.5" fill="#7B1F2D" opacity="0.4" />
    </svg>
  );
}

export function MarbleVeinRight() {
  return (
    <svg
      className="absolute right-0 top-1/4 w-full md:w-[70%] h-full opacity-40 pointer-events-none mix-blend-multiply -z-10"
      viewBox="0 0 800 1200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="viola-vein-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#250206" />
          <stop offset="20%" stopColor="#4A0711" />
          <stop offset="45%" stopColor="#7B1F2D" />
          <stop offset="70%" stopColor="#A65160" />
          <stop offset="85%" stopColor="#C98894" />
          <stop offset="100%" stopColor="#cc9750" />
        </linearGradient>
        <filter id="viola-glow-strong" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur-heavy" />
          <feGaussianBlur stdDeviation="3" result="blur-light" />
          <feMerge>
            <feMergeNode in="blur-heavy" />
            <feMergeNode in="blur-light" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main winding vein starting from top right, weaving left and back */}
      <path
        d="M 850,100 Q 580,260 630,420 T 420,720 T 680,1020 T 900,1150"
        stroke="url(#viola-vein-grad-2)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#viola-glow-strong)"
        opacity="0.9"
      />

      {/* Secondary shadow path */}
      <path
        d="M 850,100 Q 580,260 630,420 T 420,720 T 680,1020 T 900,1150"
        stroke="#250206"
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.15"
        filter="url(#viola-glow-strong)"
      />

      {/* Minor branching veins */}
      <path
        d="M 620,200 Q 460,230 380,160 T 230,100"
        stroke="url(#viola-vein-grad-2)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
      <path
        d="M 640,400 Q 480,460 460,580"
        stroke="url(#viola-vein-grad-2)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
      <path
        d="M 480,600 Q 300,600 180,500 T 60,460"
        stroke="url(#viola-vein-grad-2)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      <path
        d="M 470,720 Q 330,820 360,950"
        stroke="url(#viola-vein-grad-2)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
        filter="url(#viola-glow-strong)"
      />
      <path
        d="M 580,910 Q 750,900 820,790"
        stroke="url(#viola-vein-grad-2)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.6"
      />

      {/* Crystalline and ruby patina specks */}
      <circle cx="630" cy="240" r="2.5" fill="#dfb77d" opacity="0.5" />
      <circle cx="610" cy="270" r="1.8" fill="#4A0711" opacity="0.4" />
      <circle cx="580" cy="420" r="3" fill="#7B1F2D" opacity="0.5" filter="url(#viola-glow-strong)" />
      <circle cx="490" cy="540" r="2" fill="#cc9750" opacity="0.5" />
      <circle cx="440" cy="740" r="3.5" fill="#dfb77d" opacity="0.6" filter="url(#viola-glow-strong)" />
      <circle cx="390" cy="800" r="1.5" fill="#4A0711" opacity="0.4" />
      <circle cx="530" cy="890" r="2.5" fill="#7B1F2D" opacity="0.5" />
    </svg>
  );
}

export function MarbleVeinBottom() {
  return (
    <svg
      className="absolute left-0 bottom-0 w-full h-[600px] opacity-35 pointer-events-none mix-blend-multiply -z-10"
      viewBox="0 0 1440 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="viola-vein-grad-3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#250206" />
          <stop offset="25%" stopColor="#4A0711" />
          <stop offset="50%" stopColor="#7B1F2D" />
          <stop offset="75%" stopColor="#A65160" />
          <stop offset="100%" stopColor="#dfb77d" />
        </linearGradient>
        <filter id="viola-glow-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Bottom wide vein weaving across the page horizontally near the footer */}
      <path
        d="M -50,500 C 320,440 420,220 720,320 C 1020,420 1120,180 1500,120"
        stroke="url(#viola-vein-grad-3)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#viola-glow-soft)"
        opacity="0.85"
      />

      {/* Shadow path for depth */}
      <path
        d="M -50,500 C 320,440 420,220 720,320 C 1020,420 1120,180 1500,120"
        stroke="#250206"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.1"
        filter="url(#viola-glow-soft)"
      />

      {/* Feathery branch elements */}
      <path
        d="M 280,455 C 190,360 110,370 40,300"
        stroke="url(#viola-vein-grad-3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />
      <path
        d="M 680,345 C 750,240 850,210 950,150"
        stroke="url(#viola-vein-grad-3)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
        filter="url(#viola-glow-soft)"
      />
      <path
        d="M 1020,390 C 1150,420 1220,350 1350,380"
        stroke="url(#viola-vein-grad-3)"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.75"
      />

      {/* Calacatta Viola dust elements */}
      <circle cx="320" cy="420" r="2.5" fill="#dfb77d" opacity="0.5" />
      <circle cx="690" cy="310" r="3" fill="#7B1F2D" opacity="0.6" filter="url(#viola-glow-soft)" />
      <circle cx="1040" cy="360" r="1.5" fill="#4A0711" opacity="0.4" />
    </svg>
  );
}
