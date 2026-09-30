import React from "react";
import { cn } from "@/lib/utils";

export const ToolLayout = {
  Split: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8", className)}>
      {children}
    </div>
  ),
  Stacked: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("flex flex-col gap-6", className)}>
      {children}
    </div>
  ),
  SideBySide: ({ children, className }: { children: React.ReactNode; className?: string }) => (
    <div className={cn("flex flex-col md:flex-row gap-6", className)}>
      {children}
    </div>
  )
};
