import React from "react";
import { cn } from "@/lib/utils";

export const ToolPanel = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 md:p-8 rounded-2xl bg-surface border border-border shadow-sm", className)} {...props}>
    {children}
  </div>
);

export const ToolPanelHeader = ({ title, description, className, ...props }: { title: string, description?: string } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-6 space-y-1.5", className)} {...props}>
    <h3 className="text-xl font-bold tracking-tight text-foreground">{title}</h3>
    {description && <p className="text-sm text-secondary-foreground">{description}</p>}
  </div>
);

export const ToolPanelContent = ({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-5", className)} {...props}>
    {children}
  </div>
);

export const ToolResult = ({ 
  label, 
  value, 
  subValue, 
  valueClassName, 
  highlight = false, 
  children, 
  className, 
  ...props 
}: { 
  label?: React.ReactNode; 
  value?: React.ReactNode; 
  subValue?: React.ReactNode; 
  valueClassName?: string; 
  highlight?: boolean; 
} & React.HTMLAttributes<HTMLDivElement>) => (
  <div 
    className={cn(
      "p-6 md:p-8 rounded-2xl border shadow-sm flex flex-col justify-center text-center",
      highlight ? "bg-primary/5 border-primary/20" : "bg-surface border-border",
      className
    )} 
    {...props}
  >
    {label && <div className="text-sm font-semibold text-secondary-foreground mb-2 uppercase tracking-wider">{label}</div>}
    {value && (
      <div className="flex items-baseline justify-center gap-2">
        <div className={cn("text-5xl font-bold text-foreground", highlight && "text-primary", valueClassName)}>{value}</div>
        {subValue && <div className="text-lg text-secondary-foreground font-medium ml-1">{subValue}</div>}
      </div>
    )}
    {children}
  </div>
);

export const ToolResultItem = ({ label, value, subValue, valueClassName, highlight }: { label: React.ReactNode, value: React.ReactNode, subValue?: React.ReactNode, valueClassName?: string, highlight?: boolean }) => (
  <div className="flex flex-col gap-1.5">
    <span className={cn("text-sm font-medium", highlight ? "text-primary font-semibold" : "text-secondary-foreground")}>{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={cn("text-3xl font-extrabold tracking-tight", highlight ? "text-primary" : "text-foreground", valueClassName)}>{value}</span>
      {subValue && <span className="text-sm text-secondary-foreground font-medium uppercase tracking-wider">{subValue}</span>}
    </div>
  </div>
);
