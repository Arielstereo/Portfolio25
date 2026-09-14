"use client";

import ShapeGrid from "./ShapeGrid";

const Background = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-bg-base relative text-text-primary overflow-hidden">
      {/* Animated technical grid - pinned to the viewport */}
      <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden="true">
        <ShapeGrid
          direction="diagonal"
          speed={0.4}
          borderColor="rgba(255,255,255,0.12)"
          squareSize={44}
          hoverFillColor="rgba(59,157,248,0.1)"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>
      {/* Scroll vignette to ground the page */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, transparent 70%, rgba(10,10,12,0.6) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default Background;
