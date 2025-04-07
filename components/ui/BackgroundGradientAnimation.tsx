"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BackgroundGradientAnimationProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function BackgroundGradientAnimation({
  children,
  className,
  containerClassName,
}: BackgroundGradientAnimationProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.body.style.setProperty("--mouse-x", `${mouseX}px`);
      document.body.style.setProperty("--mouse-y", `${mouseY}px`);
    }
  }, [mouseX, mouseY]);

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-[-1] h-full w-full",
          className
        )}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-500 to-transparent opacity-30"></div>
      </div>
      {children}
    </div>
  );
}
