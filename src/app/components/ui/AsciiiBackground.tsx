'use client';
// AsciiArtBackground.tsx
import React, { useEffect, useRef } from "react";

export interface AsciiArtBackgroundProps {
  width?: number | "100%";
  height?: number | "100%";
  // density controls vertical spacing of ascii rows (px). Lower -> denser lines
  rowHeight?: number;
  // characters from darkest-to-lightest
  ramp?: string;
  // animation speed
  speed?: number;
  // overall contrast/brightness
  contrast?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * AsciiArtBackground
 * - Procedural, animated ASCII art (horizontal-line aesthetic).
 * - No external libs. Uses canvas and draws monospace characters.
 */
export default function AsciiArtBackground({
  width = "100%",
  height = "100%",
  rowHeight = 6,
  ramp = " .:-=+*#%@",
  speed = 0.6,
  contrast = 1.0,
  className,
  style,
}: AsciiArtBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  // small, fast 2D value-noise function (not high-quality Perlin, but smooth enough)
  function valueNoise2D(x: number, y: number) {
    // integer-based pseudo-random
    function pseudo(n: number) {
      n = (n << 13) ^ n;
      return (1.0 - ((n * (n * n * 15731 + 789221) + 1376312589) & 0x7fffffff) / 1073741824.0);
    }
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;

    // smoothstep
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);

    const n00 = pseudo(xi + yi * 57);
    const n10 = pseudo(xi + 1 + yi * 57);
    const n01 = pseudo(xi + (yi + 1) * 57);
    const n11 = pseudo(xi + 1 + (yi + 1) * 57);

    const nx0 = n00 * (1 - u) + n10 * u;
    const nx1 = n01 * (1 - u) + n11 * u;
    const nxy = nx0 * (1 - v) + nx1 * v;
    // normalize to 0..1
    return (nxy + 1) * 0.5;
  }

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    function resize() {
      const parent = canvas.parentElement!;
      const cw = typeof width === "number" ? width : parent.clientWidth;
      const ch = typeof height === "number" ? height : parent.clientHeight;
      canvas.style.width = `${cw}px`;
      canvas.style.height = `${ch}px`;
      canvas.width = Math.max(1, Math.round(cw * dpr));
      canvas.height = Math.max(1, Math.round(ch * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // work in CSS pixels
    }

    resize();
    window.addEventListener("resize", resize);

    const chars = ramp.split("");
    const charsCount = chars.length;
    const fontFamily = "ui-monospace, SFMono-Regular, Menlo, Monaco, 'Roboto Mono', 'Courier New', monospace";

    let last = performance.now();
    let t = 0;

    function draw(now: number) {
      if (!startRef.current) startRef.current = now;
      const dt = (now - last) / 1000;
      last = now;
      t += dt * speed;

      const W = canvas.clientWidth;
      const H = canvas.clientHeight;

      // clear background (very dark)
      ctx.fillStyle = "#020202";
      ctx.fillRect(0, 0, W, H);

      // Choose a font size close to rowHeight, but use monospace width
      const fontSize = Math.max(4, Math.round(rowHeight * 0.95));
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "left";
      ctx.fillStyle = "#eee";

      // column width approximated by measure of 'M' char
      const measure = ctx.measureText("M");
      const colW = Math.max(4, measure.width * 0.9);

      const cols = Math.ceil(W / colW) + 1;
      const rows = Math.ceil(H / rowHeight) + 1;

      // base noise scales (tweak these to alter shapes)
      const baseScaleX = 0.0085; // horizontal feature scale
      const baseScaleY = 0.025; // vertical feature scale
      const flow = t * 0.55;

      // draw rows — we draw left->right characters
      for (let r = 0; r < rows; r++) {
        const y = r * rowHeight + rowHeight / 2;

        // small vertical offset to create slanted flow
        const vOff = r * 0.0025;

        // We'll create a brightness profile across columns to make bands
        let lineStr = "";
        // accumulate a string then draw once per row for performance
        for (let c = 0; c < cols; c++) {
          const x = c * colW + colW / 2;

          // Compose multiple octaves of value-noise and some sin waves to make flowing swirls
          const nx = x * baseScaleX;
          const ny = y * baseScaleY;

          // 3 octaves of noise
          const n1 = valueNoise2D(nx + flow * 0.3, ny + flow * 0.1);
          const n2 = valueNoise2D((nx + 100.3) * 1.8 - flow * 0.15, (ny + 50.7) * 1.3 + flow * 0.05);
          const n3 = valueNoise2D((nx - 200.1) * 3.6 + flow * 0.08, (ny - 120.4) * 2.5 - flow * 0.02);

          // subtle long-period sin ripple to create sweeping bands
          const ripple = 0.5 + 0.5 * Math.sin((x * 0.0023 + y * 0.0016) + flow * 0.6);

          // combine
          let v = (n1 * 0.6 + n2 * 0.28 + n3 * 0.12) * ripple;

          // add a broad center-dark/light shaping using another sine that creates the broad stripe
          v += 0.12 * (0.5 + 0.5 * Math.sin((x * 0.0006 + y * 0.0009) - flow * 0.2));

          // contrast and clamp
          v = Math.max(0, Math.min(1, (v - 0.12) * (1.0 + contrast * 0.8)));

          // map to ramp index but bias so darker areas use 'filled' char
          const idx = Math.floor(v * (charsCount - 1));
          const ch = chars[idx] ?? chars[charsCount - 1];

          lineStr += ch;
        }

        // draw the whole row as a precomputed string
        // use a subtle horizontal offset dependent on row to create flow & parallax
        const rowOffset = Math.sin((r * 0.16) + flow * 0.6) * (colW * 0.5);
        ctx.fillStyle = "rgba(220,220,220,0.95)";
        ctx.fillText(lineStr, -rowOffset, y);
      }

      // dark vignette top/bottom and tiny scanline effect
      // top vignette
      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, "rgba(0,0,0,0.85)");
      g.addColorStop(0.08, "rgba(0,0,0,0.4)");
      g.addColorStop(0.4, "rgba(0,0,0,0.07)");
      g.addColorStop(0.6, "rgba(0,0,0,0.14)");
      g.addColorStop(1, "rgba(0,0,0,0.95)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      // faint horizontal scanline using globalAlpha and composite
      ctx.globalAlpha = 0.06;
      ctx.fillStyle = "#000";
      for (let s = 0; s < H; s += 2.5) {
        ctx.fillRect(0, s, W, 0.9);
      }
      ctx.globalAlpha = 1.0;

      rafRef.current = requestAnimationFrame(draw);
    }

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowHeight, ramp, speed, contrast, width, height]);

  const wrapperStyle: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : `${width}`,
    height: typeof height === "number" ? `${height}px` : `${height}`,
    overflow: "hidden",
    position: "relative",
    ...style,
  };

  return (
    <div style={wrapperStyle} className={className}>
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          width: "100%",
          height: "100%",
          imageRendering: "pixelated",
          background: "#000",
          pointerEvents: "none", // <-- allow clicks to pass through
        }}
      />
    </div>
  );
}