"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

interface AdSlotProps {
  slot: string;
  format?: "auto" | "rectangle" | "vertical" | "horizontal";
  responsive?: boolean;
  className?: string;
  minHeight?: string; // Critical to prevent CLS
  label?: string; // E.g., "Advertisement"
}

export function AdSlot({
  slot,
  format = "auto",
  responsive = true,
  className = "",
  minHeight = "250px", // Reserve space to avoid layout shift (CLS)
  label
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  const [isDev, setIsDev] = useState(false);
  const pathname = usePathname(); // Re-render ad on route change

  const clientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    setIsDev(!clientId || process.env.NODE_ENV === "development");
  }, [clientId]);

  useEffect(() => {
    if (isDev) return;

    try {
      if (adRef.current && !adRef.current.hasAttribute('data-adsbygoogle-status')) {
        const adsbygoogle = (window as any).adsbygoogle || [];
        adsbygoogle.push({});
      }
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, [pathname, isDev]);

  return (
    <div 
      className={`ad-container flex flex-col items-center justify-center w-full my-8 ${className}`}
      style={{ minHeight }}
    >
      {label && <span className="text-xs text-muted-foreground uppercase tracking-wider mb-2">{label}</span>}
      
      {isDev ? (
        <div 
          className="bg-muted border border-dashed border-border rounded-lg flex items-center justify-center w-full text-muted-foreground"
          style={{ minHeight }}
        >
          <span>Ad Placeholder ({slot})</span>
        </div>
      ) : (
        <ins
          ref={adRef}
          className="adsbygoogle w-full"
          style={{ display: "block", minHeight }}
          data-ad-client={clientId}
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? "true" : "false"}
        />
      )}
    </div>
  );
}
