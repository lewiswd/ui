import { ComponentProps, ReactNode } from "react";

import { LwFontSize, LwRadius } from "../../types";

type InputVariant = "default" | "float" | "standard";
type InputValidateOn = "change" | "blur";
type InputClassnamesProp = {
    base?: string;
    label?: string;
    mainWrapper?: string;
    inputWrapper?: string;
    clearButton?: string;
    helperWrapper?: string;
    errorMessage?: string;
};

export type InputProps = ComponentProps<"input"> & {
    children: ReactNode;
    variant?: InputVariant;
    size?: LwFontSize;
    radius?: LwRadius;
    label?: string;
    description?: string;
    errorMessage?: string;
    validate?: (value: string) => boolean;
    validateOn?: InputValidateOn;
    isClearable?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    classNames?: InputClassnamesProp;
};
