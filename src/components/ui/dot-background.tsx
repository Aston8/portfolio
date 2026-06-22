import React from "react";

interface DotBackgroundDemoProps {
  children?: React.ReactNode;
}

export function DotBackgroundDemo({
  children,
}: DotBackgroundDemoProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "24px 24px",
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(25,35,90,0.45),transparent_60%)]" />

      <div className="relative z-10 min-h-screen">
        {children}
      </div>
    </div>
  );
}