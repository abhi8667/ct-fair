"use client";

import { JapaneseTowerLandscape } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <JapaneseTowerLandscape
        country="japan"
      />
    </div>
  );
}

export default Scene;
