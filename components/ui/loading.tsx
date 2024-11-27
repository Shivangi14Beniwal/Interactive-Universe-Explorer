"use client";

import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black">
      <div className="text-center">
        <Loader2 className="h-8 w-8 animate-spin text-white mb-2" />
        <p className="text-white text-sm">Loading Universe...</p>
      </div>
    </div>
  );
}