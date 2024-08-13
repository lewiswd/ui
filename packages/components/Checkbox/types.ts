import { ReactNode } from "react";

import { LwColor, LwFontSize, LwRadius } from "../../types";

type CheckboxClassnamesProp = {
    base?: string;
    wrapper?: string;
    icon?: string;
    label?: string;
};

type CheckboxEvent = {
    isSelected: boolean;
    value: string | undefined;
};

export type CheckboxProps = {
    children: ReactNode;
    icon?: ReactNode;
    value?: string;
    color?: LwColor;
    size?: LwFontSize;
    radius?: LwRadius;
    isSelected?: boolean;
    isDisabled?: boolean;
    classNames?: CheckboxClassnamesProp;

    onPress?: (e: CheckboxEvent) => void;
};
