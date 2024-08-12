import { ReactNode } from "react";

import { Range } from "../../types";

export type GridVariant = "column" | "auto-fit" | "auto-fill";

export type GridBreakpoint = {
    cols?: Range<12>;
    rows?: Range<12>;
    gap?: Range<12>;
};

export type GridBreakpoints = {
    sm?: GridBreakpoint;
    md?: GridBreakpoint;
    lg?: GridBreakpoint;
    xl?: GridBreakpoint;
    "2xl"?: GridBreakpoint;
};

export type Grid = {
    children: ReactNode[];
    className?: string;
    variant?: GridVariant;
    breakpoints?: GridBreakpoints;
    width?: number;
};

export type UseGrid = {
    variant: GridVariant;
    breakpoints?: GridBreakpoints;
    width?: number;
};
