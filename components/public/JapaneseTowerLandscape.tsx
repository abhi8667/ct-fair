"use client";

import { useEffect, useMemo, useState } from "react";
import { TOWER_COUNTRIES, TowerCountry } from "@/src/shaders/japanese-tower/JapaneseTowerLandscape";

export { TOWER_COUNTRIES };
export type { TowerCountry };

const COUNTRY_LABELS: Record<TowerCountry, string> = {
  india: "Indian Temple Monument (Vedic Stone Shikhara)",
  japan: "Indian Temple Monument (Vedic Stone Shikhara)",
};

export type JapaneseTowerLandscapeProps = {
  className?: string;
  sourceUrl?: string;
  country?: TowerCountry;
  hero?: boolean;
  sandbox?: string;
  onReady?: () => void;
};

export function JapaneseTowerLandscape({
  className = "",
  sourceUrl = "/japanese-tower.html",
  country = "japan",
  hero = false,
  sandbox = "allow-scripts allow-same-origin",
  onReady,
}: JapaneseTowerLandscapeProps) {
  const [ready, setReady] = useState(false);
  const frameSource = useMemo(() => {
    const hashIndex = sourceUrl.indexOf("#");
    const base = hashIndex >= 0 ? sourceUrl.slice(0, hashIndex) : sourceUrl;
    const hash = hashIndex >= 0 ? sourceUrl.slice(hashIndex) : "";
    const [pathPart, queryPart] = base.split("?");
    const params = new URLSearchParams(queryPart || "");
    if (!params.has("country")) params.set("country", country);
    if (hero && !params.has("hero")) params.set("hero", "true");
    return `${pathPart}?${params.toString()}${hash}`;
  }, [country, sourceUrl, hero]);

  useEffect(() => setReady(false), [frameSource]);

  return (
    <div
      className={`japanese-tower-landscape${className ? ` ${className}` : ""}`}
      data-state={ready ? "ready" : "loading"}
    >
      <iframe
        key={frameSource}
        className={`japanese-tower-landscape__frame${ready ? " is-ready" : ""}`}
        title={`${COUNTRY_LABELS[country]} in a procedural landscape`}
        src={frameSource}
        sandbox={sandbox}
        loading="eager"
        onLoad={() => {
          setReady(true);
          onReady?.();
        }}
      />
    </div>
  );
}

export default JapaneseTowerLandscape;
