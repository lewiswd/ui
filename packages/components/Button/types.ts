import { ReactNode } from "react";

import { LwColor, LwFontSize, LwRadius } from "../../types";

type ButtonVariantProp = "contained" | "outlined" | "light";

export type ButtonProps = {
    children: ReactNode;
    variant?: ButtonVariantProp;
    className?: string;
    color?: LwColor;
    size?: LwFontSize;
    radius?: LwRadius;
    spinner?: ReactNode;
    icon?: ReactNode;
    fullWidth?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    textIsLoading?: string;

    onClick?: () => void;
};

export type IconButtonProps = {
    icon: ReactNode;
    variant?: ButtonVariantProp;
    className?: string;
    color?: LwColor;
    radius?: LwRadius;
    isDisabled?: boolean;

    onClick?: () => void;
};
