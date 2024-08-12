import { CSSProperties, useCallback, useMemo } from "react";

import {
    breakpointsPrefix,
    flexDirection,
    flexDirectionBreakpoints,
    gapBreakpoints,
} from "../../constants";

import { UseFlex } from "./types";

export const useFlex = ({ direction, gap, breakpoints }: UseFlex) => {
    const addBreakpointClasses = useCallback(
        (classes: string[], bp: keyof typeof breakpoints) => {
            if (breakpoints?.[bp]) {
                const { direction: directionBp, gap } = breakpoints[bp];
                console.log(directionBp);
                if (directionBp)
                    classes.push(flexDirectionBreakpoints[bp][directionBp]);
                if (gap) classes.push(gapBreakpoints[bp][gap]);
            }
        },
        [breakpoints]
    );

    const flexBreakpointsClasses = useMemo(() => {
        const classes: string[] = [];

        classes.push(flexDirection[direction]);

        breakpointsPrefix.forEach((bp) =>
            addBreakpointClasses(classes, bp as keyof typeof breakpoints)
        );

        return classes;
    }, [addBreakpointClasses, direction]);

    const flexWrapperCssProperties = useMemo(() => {
        const props: CSSProperties = {};

        props.gap = gap;

        return props;
    }, [gap]);

    return { flexBreakpointsClasses, flexWrapperCssProperties } as const;
};
