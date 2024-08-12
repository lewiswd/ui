import { CSSProperties, useCallback, useMemo } from "react";

import {
    breakpointsPrefix,
    gapBreakpoints,
    gridColumnBreakpoints,
    gridRowBreakpoints,
} from "../../constants";

import { UseGrid } from "./types";

export const useGrid = ({ variant, breakpoints, width }: UseGrid) => {
    const addBreakpointClasses = useCallback(
        (classes: string[], bp: keyof typeof breakpoints) => {
            if (breakpoints?.[bp]) {
                const { cols, rows, gap } = breakpoints[bp];
                if (cols !== undefined && cols > 0)
                    classes.push(gridColumnBreakpoints[bp][cols]);
                if (rows !== undefined && rows > 0)
                    classes.push(gridRowBreakpoints[bp][rows]);
                if (gap !== undefined) classes.push(gapBreakpoints[bp][gap]);
            }
        },
        [breakpoints]
    );

    const gridColsBreakpointsClasses = useMemo(() => {
        const classes: string[] = [];

        breakpointsPrefix.forEach((bp) =>
            addBreakpointClasses(classes, bp as keyof typeof breakpoints)
        );

        return classes;
    }, [addBreakpointClasses]);

    const gridWrapperCssProperties = useMemo(() => {
        const props: CSSProperties = {};

        switch (variant) {
            case "auto-fill":
                props.gridTemplateColumns = `repeat(auto-fill, minmax(${width}px, 1fr))`;
                break;
            case "auto-fit":
                props.gridTemplateColumns = `repeat(auto-fit, minmax(${width}px, 1fr))`;
                break;
            default:
                break;
        }

        if (Object.keys(props).length > 0) return props;

        return undefined;
    }, [variant, width]);

    return { gridColsBreakpointsClasses, gridWrapperCssProperties } as const;
};
