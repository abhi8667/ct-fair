"use client";

import { useEffect, useMemo, useState } from "react";

export const TOWER_COUNTRIES = ["india", "japan"] as const;
export type TowerCountry = (typeof TOWER_COUNTRIES)[number];


const COUNTRY_LABELS: Record<TowerCountry, string> = {
  india: "Indian Temple Monument (Vedic Stone Shikhara)",
  japan: "Indian Temple Monument (Vedic Stone Shikhara)",
};

export type JapaneseTowerLandscapeProps = {
  className?: string;
  sourceUrl?: string;
  country?: TowerCountry;
  weather?: string;
  time?: string;
  hero?: boolean;
  sandbox?: string;
  onReady?: () => void;
};

export function JapaneseTowerLandscape({
  className = "",
  sourceUrl = "/japanese-tower",
  country = "india",
  weather = "storm",
  time = "sunset",
  hero = false,
  sandbox = "allow-scripts allow-same-origin",
  onReady,
}: JapaneseTowerLandscapeProps) {
  const [ready, setReady] = useState(true);
  const [wireframe, setWireframe] = useState(false);

  const frameSource = useMemo(() => {
    const hashIndex = sourceUrl.indexOf("#");
    const base = hashIndex >= 0 ? sourceUrl.slice(0, hashIndex) : sourceUrl;
    const hash = hashIndex >= 0 ? sourceUrl.slice(hashIndex) : "";
    const [pathPart, queryPart] = base.split("?");
    const params = new URLSearchParams(queryPart || "");
    if (!params.has("country")) params.set("country", country);
    if (!params.has("weather") && weather) params.set("weather", weather);
    if (!params.has("time") && time) params.set("time", time);
    if (hero && !params.has("hero")) params.set("hero", "true");
    return `${pathPart}?${params.toString()}${hash}`;
  }, [country, sourceUrl, hero, weather, time]);

  return (
    <div
      className={`japanese-tower-landscape relative group${className ? ` ${className}` : ""}`}
      data-state={ready ? "ready" : "loading"}
    >
      <iframe
        key={frameSource}
        className={`japanese-tower-landscape__frame${ready ? " is-ready" : ""}${wireframe ? " filter invert hue-rotate-180 contrast-125 brightness-90" : ""}`}
        title={`${COUNTRY_LABELS[country]} in a procedural landscape`}
        src={frameSource}
        sandbox={sandbox}
        loading="eager"
        onLoad={() => {
          setReady(true);
          onReady?.();
        }}
      />

      {/* Structural Blueprint & Rebar Stress Mode Toggle */}
      <div className="absolute top-4 right-4 z-20 pointer-events-auto">
        <button
          type="button"
          onClick={() => setWireframe(!wireframe)}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md border text-[10px] font-mono font-semibold uppercase tracking-wider transition-all duration-300 shadow-md ${
            wireframe
              ? "bg-[#176d7e] text-white border-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.4)]"
              : "bg-[#3b0924]/80 text-[#eadfd4] border-[#75435c]/80 hover:bg-[#521331] hover:text-white"
          }`}
          title="Toggle Structural Blueprint / Wireframe Stress View"
        >
          <span className={`size-1.5 rounded-full ${wireframe ? "bg-[#38bdf8] animate-ping" : "bg-[#d8c2ab]"}`} />
          <span>{wireframe ? "STRUCTURAL BLUEPRINT ACTIVE" : "STRESS WIREFRAME"}</span>
        </button>
      </div>
    </div>
  );
}

export default JapaneseTowerLandscape;
