type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 96 96"
      role="img"
      aria-label="Logo JH Jonathy Hauton"
    >
      <rect width="96" height="96" rx="18" fill="#fff" />
      <path
        d="M26 69H22a8 8 0 0 1-8-8V36a22 22 0 0 1 22-22h28a18 18 0 0 1 18 18v33a16 16 0 0 1-16 16H40"
        fill="none"
        stroke="#111"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path d="M12 35h8M76 75h9" stroke="#111" strokeWidth="7" strokeLinecap="square" />
      <circle cx="18" cy="49" r="2.8" fill="#c79a46" />
      <path d="M38 25h14M45 20v10" stroke="#111" strokeWidth="3.5" strokeLinecap="round" />
      <text
        x="49"
        y="66"
        fill="#c79a46"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="43"
        fontWeight="700"
        letterSpacing="-6"
        textAnchor="middle"
      >
        JH
      </text>
    </svg>
  );
}
