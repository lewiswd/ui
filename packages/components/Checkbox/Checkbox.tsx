import { useEffect, useMemo, useState } from "react";

import CheckIcon from "./CheckIcon";
import { CheckboxProps } from "./types";

import { checkboxColor } from "../../constants";
import { cn } from "../../utils";

const Checkbox = ({
    children,
    classNames,
    color = "gray",
    icon,
    isDisabled,
    isSelected,
    radius = "md",
    size = "base",
    value,
    onPress,
}: CheckboxProps) => {
    const [selected, setSelected] = useState<boolean>(
        isSelected !== undefined ? isSelected : false
    );

    const colorBasedOnSelect = useMemo(() => {
        return checkboxColor[color];
    }, [color]);

    /**
     * TODO: Handle events
     */
    const handleClick = () => {
        console.log(colorBasedOnSelect);
        // TODO: Set selected state
        setSelected((prev) => !prev);
        // TODO: Trigger onPress event with updated selected state and value
        onPress?.({ isSelected: !selected, value });
    };

    useEffect(() => {
        if (isSelected !== undefined) {
            setSelected(isSelected);
        }
    }, [isSelected]);

    return (
        <div
            data-slot="base"
            className={cn(
                "cursor-pointer",
                "data-[disabled=true]:opacity-75 data-[disabled=true]:pointer-events-none",
                classNames?.base
            )}
            data-selected={selected ? selected : undefined}
            data-disabled={isDisabled}
            onClick={handleClick}
        >
            <div
                data-slot="wrapper"
                className={cn(
                    "inline-flex gap-2 items-center",
                    classNames?.wrapper
                )}
            >
                <div
                    data-slot="icon"
                    className={cn(
                        "relative w-[20px] aspect-square flex justify-center items-center border-2 border-gray-300",
                        classNames?.icon
                    )}
                    data-radius={radius}
                >
                    <div
                        className={cn(
                            "absolute -top-[2px] -left-[2px] -right-[2px] -bottom-[2px] origin-center transition duration-300 p-[2px]",
                            selected
                                ? "scale-100 opacity-100"
                                : "scale-50 opacity-0",
                            colorBasedOnSelect
                        )}
                        data-radius={radius}
                    >
                        {icon ? icon : <CheckIcon />}
                    </div>
                </div>
                <div
                    className={cn("select-none", classNames?.label)}
                    data-slot="label"
                    data-text={size}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Checkbox;
