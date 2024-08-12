import { ReactNode } from "react";

import { LwColor, LwFontSize, LwRadius } from "../../types";

type ButtonVariantProp = "contained" | "outlined" | "light";

export type ButtonProps = {
    children: ReactNode;
    className?: string;
    variant?: ButtonVariantProp;
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
