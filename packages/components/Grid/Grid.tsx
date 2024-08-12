import { cn } from "../../utils";

import { Grid as GridType } from "./types";
import { useGrid } from "./use-grid";

const Grid = ({
    children,
    breakpoints,
    className,
    variant = "column",
    width = 384,
}: GridType) => {
    const { gridColsBreakpointsClasses, gridWrapperCssProperties } = useGrid({
        variant,
        breakpoints,
        width,
    });

    return (
        <div
            data-slot="base"
            style={gridWrapperCssProperties}
            className={cn("grid", className, ...gridColsBreakpointsClasses)}
        >
            {children.map((child, index) => (
                <div key={index} data-slot="content">
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Grid;
