import { useMemo } from "react";

import { ButtonProps } from "./types";

import {
    buttonContainedColor,
    buttonLightColor,
    buttonOutlinedColor,
} from "../../constants";
import { cn } from "../../utils";

const Button = ({
    children,
    className,
    color = "gray",
    fullWidth = false,
    icon,
    isDisabled,
    isLoading,
    radius = "lg",
    size = "base",
    spinner,
    textIsLoading = "loading",
    variant = "contained",
    onClick,
}: ButtonProps) => {
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

    return (
        <button
            role="button"
            className={cn(
                "inline-flex items-center justify-center gap-2 transition font-medium",
                "group px-4 py-2 appearance-none select-none whitespace-nowrap data-[pressed=true]:scale-[0.95] outline-none",
                colorBasedOnVariant,
                fullWidth ? "w-full" : undefined,
                className
            )}
            data-text={size}
            data-radius={radius}
            data-disabled={isDisabled || isLoading}
            data-loading={isLoading}
            onClick={onClick}
            onMouseDown={(e) => {
                e.currentTarget.dataset.pressed = "true";
            }}
            onMouseUp={(e) => {
                e.currentTarget.removeAttribute("data-pressed");
            }}
            disabled={isDisabled || isLoading}
        >
            {isLoading ? (
                <>
                    {spinner}
                    <span className="first-letter:uppercase">{`${textIsLoading}...`}</span>
                </>
            ) : (
                <>
                    {icon && icon}
                    <span className="first-letter:uppercase">{children}</span>
                </>
            )}
        </button>
    );
};

export default Button;
