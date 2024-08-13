import { ReactNode } from "react";

import { LwColor, LwRadius } from "../../types";

export type AvatarClassNamesProp = {
    base?: string;
    img?: string;
    fallback?: string;
    name?: string;
};

export type AvatarProps = {
    src: string;
    color?: LwColor;
    radius?: LwRadius;
    size?: number;
    name?: string;
    fallback?: ReactNode;
    showFallback?: boolean;
    isBorder?: boolean;
    isDisabled?: boolean;
    classNames?: AvatarClassNamesProp;
};
