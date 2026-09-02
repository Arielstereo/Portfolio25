const Background = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-bg-base relative text-text-primary overflow-hidden">
      {/* Aurora glows */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-aurora"
        aria-hidden="true"
      />
      {/* Fine technical grid, fading out */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-grid"
        aria-hidden="true"
      />
      {/* Subtle film grain */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-noise"
        aria-hidden="true"
      />
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
