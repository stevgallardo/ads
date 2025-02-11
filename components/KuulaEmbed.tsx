"use client";

import { useEffect } from "react";

interface KuulaEmbedProps {
  url: string;
  width?: string;
  height?: string;
}

export default function KuulaEmbed({
  url,
  width = "100%",
  height = "640px",
}: KuulaEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.kuula.io/embed.js";
    script.setAttribute("data-kuula", url);
    script.setAttribute("data-css", "ku-embed");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div className="w-full flex justify-center">
      <iframe
        className="ku-embed"
        frameBorder="0"
        scrolling="no"
        allow="xr-spatial-tracking;gyroscope;accelerometer;autoplay;microphone;camera"
        allowFullScreen
        src={url}
        style={{ width, height }}
      ></iframe>
    </div>
  );
}
