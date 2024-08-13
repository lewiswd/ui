import { useMemo } from "react";

import { IconButtonProps } from "./types";

import {
    buttonContainedColor,
    buttonIconContainedColor,
    buttonIconLightColor,
    buttonIconOutlinedColor,
    buttonLightColor,
    buttonOutlinedColor,
} from "../../constants";
import { cn } from "../../utils";

const IconButton = ({
    icon,
    className,
    color = "gray",
    isDisabled,
    radius = "lg",
    variant = "contained",
    onClick,
}: IconButtonProps) => {
    const colorBasedOnVariant = useMemo(() => {
        switch (variant) {
            case "contained":
                return buttonContainedColor[color];
            case "outlined":
                return buttonOutlinedColor[color];
            case "light":
                return buttonLightColor[color];
            default:
                return color;
        }
    }, [color, variant]);

    const colorIconBasedOnVariant = useMemo(() => {
        switch (variant) {
            case "contained":
                return buttonIconContainedColor[color];
            case "outlined":
                return buttonIconOutlinedColor[color];
            case "light":
                return buttonIconLightColor[color];
            default:
                return color;
        }
    }, [color, variant]);

    return (
        <button
            role="button"
            className={cn(
                "p-2 appearance-none select-none outline-none cursor-pointer transition",
                "data-[pressed=true]:scale-[0.9] data-[disabled=true]:opacity-75 data-[disabled=true]:pointer-events-none",
                className,
                colorBasedOnVariant,
                colorIconBasedOnVariant
            )}
            onMouseDown={(e) => {
                e.currentTarget.dataset.pressed = "true";
            }}
            onMouseUp={(e) => {
                e.currentTarget.removeAttribute("data-pressed");
            }}
            data-radius={radius}
            data-disabled={isDisabled}
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default IconButton;
