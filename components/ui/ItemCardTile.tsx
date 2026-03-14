import type { ReactNode } from "react";

interface Props {
  isEmpty:             boolean;
  rarColor:            string;
  background:          string;
  open:                boolean;
  onToggle:            () => void;
  /** Right padding (px) reserved for the hero image */
  contentPaddingRight: number;
  /** Optional brand/set watermark src */
  watermarkSrc?:       string;
  /** Absolutely-positioned hero image element */
  heroSlot:            ReactNode;
  /** Centered content: name block + icon row */
  children:            ReactNode;
}

export default function ItemCardTile({
  isEmpty, rarColor, background, open, onToggle,
  contentPaddingRight, watermarkSrc, heroSlot, children,
}: Props) {
  return (
    <div
      onClick={onToggle}
      className="relative cursor-pointer select-none overflow-hidden"
      style={{
        height:     104,
        background: isEmpty ? "#090d11" : background,
        filter:     isEmpty ? "grayscale(1) brightness(0.6)" : "none",
        transition: "filter 0.2s",
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position:   "absolute",
          left: 0, top: 0, bottom: 0,
          width:      9,
          background: isEmpty ? "#2a3a4a" : rarColor,
          zIndex:     4,
        }}
      />

      {/* Optional watermark (e.g. brand/gear-set icon) */}
      {watermarkSrc && (
        <img
          src={watermarkSrc}
          alt=""
          style={{
            position:     "absolute",
            left:         18,
            top:          "50%",
            transform:    "translateY(-50%)",
            width:        110,
            height:       110,
            objectFit:    "contain",
            mixBlendMode: "screen",
            opacity:      isEmpty ? 0.08 : 0.28,
            pointerEvents:"none",
            zIndex:       1,
          }}
        />
      )}

      {/* Hero image slot (caller is responsible for absolute positioning) */}
      {heroSlot}

      {/* Centered content layer */}
      <div
        style={{
          position:       "absolute",
          inset:           0,
          zIndex:          3,
          display:         "flex",
          flexDirection:   "column",
          justifyContent:  "center",
          alignItems:      "center",
          gap:             6,
          padding:         `8px ${contentPaddingRight}px 8px 18px`,
        }}
      >
        {children}
      </div>

      {/* Expand chevron */}
      <div
        className="font-rajdhani"
        style={{
          position: "absolute",
          bottom: 4, right: 6,
          zIndex: 5,
          fontSize: 9,
          color: "#3a5a7a",
        }}
      >
        {open ? "▲" : "▼"}
      </div>

      {/* Border overlay */}
      <div
        style={{
          position:     "absolute",
          inset:         0,
          border:       `1px solid ${isEmpty ? "#1a2530" : rarColor + "55"}`,
          pointerEvents:"none",
          zIndex:        5,
        }}
      />
    </div>
  );
}
