"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InfoPanelProps {
  planetName: string;
  description: string;
  onClose: () => void;
}

export function InfoPanel({ planetName, description, onClose }: InfoPanelProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-24 right-4 w-80 pointer-events-auto"
      >
        <Card className="p-4 bg-black/80 text-white border-gray-700 backdrop-blur-lg">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold">{planetName}</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-gray-300 leading-relaxed">{description}</p>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
}
