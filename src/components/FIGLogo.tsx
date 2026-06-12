import React from "react";

interface FIGLogoProps {
  className?: string;
  light?: boolean; // If true, colors the logo white/silver for dark backgrounds
  height?: number | string;
}

export default function FIGLogo({ className = "", light = false, height }: FIGLogoProps) {
  const fillColor = light ? "white" : "#050505";
  const textColor = light ? "white" : "#050505";

  return (
    <div className={`flex flex-col items-center ${className}`} id="fig-brand-logo-root">
      <svg
        viewBox="0 0 500 240"
        className="w-full h-auto max-w-full"
        style={{ height: height || "auto" }}
        role="img"
        aria-label="Focus International Group Logo"
      >
        {/* F Character */}
        <g id="fg-letter-f">
          {/* Vertical Stem */}
          <rect x="0" y="0" width="70" height="200" fill={fillColor} />
          {/* Top horizontal stroke */}
          <rect x="70" y="0" width="130" height="65" fill={fillColor} />
          {/* Middle horizontal stroke */}
          <rect x="70" y="110" width="130" height="30" fill={fillColor} />
        </g>

        {/* I Character (hollow rectangular stroke) */}
        <rect
          id="fg-letter-i"
          x="226"
          y="6"
          width="48"
          height="188"
          fill="none"
          stroke={fillColor}
          strokeWidth="12"
        />

        {/* G Character */}
        <g id="fg-letter-g">
          {/* Top horizontal stroke */}
          <rect x="300" y="0" width="200" height="65" fill={fillColor} />
          {/* Left vertical stem */}
          <rect x="300" y="0" width="70" height="200" fill={fillColor} />
          {/* Bottom horizontal stroke */}
          <rect x="300" y="160" width="200" height="40" fill={fillColor} />
          {/* Inner shelf & partial right stem */}
          <rect x="370" y="110" width="130" height="30" fill={fillColor} />
          <rect x="430" y="140" width="70" height="20" fill={fillColor} />
        </g>

        {/* Aligned text wordmark */}
        <text
          x="250"
          y="232"
          fill={textColor}
          fontSize="24"
          fontFamily="'Inter', 'Space Grotesk', system-ui, sans-serif"
          fontWeight="800"
          textAnchor="middle"
          textLength="500"
          lengthAdjust="spacing"
          letterSpacing="0.05em"
          className="uppercase select-none"
        >
          Focus International Group
        </text>
      </svg>
    </div>
  );
}
