"use client";

export function PrivacySettingsButton({ label }: { label: string }) {
  return (
    <button 
      onClick={() => window.dispatchEvent(new CustomEvent('open-consent-preferences'))}
      className="hover:text-primary transition-colors text-left"
    >
      {label}
    </button>
  );
}
