"use client";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);
  if (!isClient) return null;
  return (
    <a
      href="https://wa.me/919999241024"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
      aria-label="Chat on WhatsApp"
    >
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <path fill="#fff" d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.37 5.07L2 22l5.13-1.34A9.93 9.93 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18c-1.61 0-3.13-.39-4.45-1.13l-.32-.18-3.05.8.82-2.98-.21-.34A7.96 7.96 0 0 1 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8Zm4.13-5.47c-.23-.12-1.36-.67-1.57-.75-.21-.08-.36-.12-.51.12-.15.23-.58.75-.71.9-.13.15-.26.17-.49.06-.23-.12-.97-.36-1.85-1.13-.68-.6-1.14-1.34-1.28-1.57-.13-.23-.01-.35.1-.46.1-.1.23-.26.34-.39.11-.13.15-.23.23-.38.08-.15.04-.28-.02-.4-.06-.12-.51-1.23-.7-1.68-.18-.44-.37-.38-.51-.39-.13-.01-.28-.01-.43-.01-.15 0-.4.06-.61.28-.21.22-.8.78-.8 1.9 0 1.12.82 2.2.94 2.36.12.15 1.62 2.47 3.93 3.37.55.19.98.3 1.31.38.55.14 1.05.12 1.45.07.44-.07 1.36-.56 1.55-1.1.19-.54.19-1 .13-1.1-.06-.1-.21-.16-.44-.28Z"/>
      </svg>
      WhatsApp
    </a>
  );
}
