import { cn } from "../../utils";

import { Flex as FlexType } from "./types";
import { useFlex } from "./use-flex";

const Flex = ({
    children,
    breakpoints,
    direction = "row",
    className,
    gap = 16,
}: FlexType) => {
    const { flexBreakpointsClasses, flexWrapperCssProperties } = useFlex({
        direction,
        gap,
        breakpoints,
    });

    return (
        <div
            data-slot="base"
            style={flexWrapperCssProperties}
            className={cn("flex", className, ...flexBreakpointsClasses)}
        >
            {children.map((child, index) => (
                <div key={index} data-slot="content">
                    {child}
                </div>
            ))}
        </div>
    );
};

export default Flex;
