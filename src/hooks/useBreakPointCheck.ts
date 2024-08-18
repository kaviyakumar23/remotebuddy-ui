"use client";
import { useState, useEffect } from "react";

const breakpoints = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
} as const;

type Breakpoint = keyof typeof breakpoints;

type BreakpointState = {
  currentBreakpoint: Breakpoint;
  isGreaterThan: (breakpoint: Breakpoint) => boolean;
};

function useBreakpointCheck(): BreakpointState {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCurrentBreakpoint = (): Breakpoint => {
    if (width < breakpoints.mobile) return "mobile";
    if (width < breakpoints.tablet) return "tablet";
    if (width < breakpoints.desktop) return "desktop";
    return "wide";
  };

  const isGreaterThan = (breakpoint: Breakpoint): boolean => {
    return width > breakpoints[breakpoint];
  };

  return {
    currentBreakpoint: getCurrentBreakpoint(),
    isGreaterThan,
  };
}

export default useBreakpointCheck;
