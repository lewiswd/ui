import { ReactNode } from "react";

import { LwGap } from "../../types";

export type FlexDirection = "row" | "row-reverse" | "col" | "col-reverse";

export type FlexBreakpoint = {
    direction?: FlexDirection;
    gap?: LwGap;
};

export type FlexBreakpoints = {
    sm?: FlexBreakpoint;
    md?: FlexBreakpoint;
    lg?: FlexBreakpoint;
    xl?: FlexBreakpoint;
    "2xl"?: FlexBreakpoint;
};

export type Flex = {
    children: ReactNode[];
    className?: string;
    direction?: FlexDirection;
    gap?: number;
    breakpoints?: FlexBreakpoints;
};

export type UseFlex = {
    breakpoints?: FlexBreakpoints;
    direction: FlexDirection;
    gap: number;
};
