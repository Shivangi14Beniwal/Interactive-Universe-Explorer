"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon, InfoIcon, HelpCircleIcon } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ControlsProps {
  onStartTour: () => void;
}

export function Controls({ onStartTour }: ControlsProps) {
  return (
    <TooltipProvider>
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-4 z-10">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onStartTour}
              className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
              size="lg"
            >
              <RocketIcon className="mr-2 h-4 w-4" />
              Start Tour
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Begin a guided tour of our solar system</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-sm"
              size="lg"
            >
              <HelpCircleIcon className="mr-2 h-4 w-4" />
              Help
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>View controls and instructions</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}