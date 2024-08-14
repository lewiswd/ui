import {
    ChangeEvent,
    FocusEvent,
    useCallback,
    useEffect,
    useState,
} from "react";
import { InputProps } from "./types";

export const useInput = (props: InputProps) => {
    const {
        value,
        onChange,
        validate,
        validateOn,
        isClearable,
        onBlur,
        ...rest
    } = props;

    const [inputValue, setInputValue] = useState<
        string | number | readonly string[]
    >("");
    const [isInvalid, setIsInvalid] = useState<boolean>(false);

    /**
     * TODO: Handle input change
     */
    const handleInputChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setInputValue(e.target.value);

            onChange?.(e);

            if (validate && validateOn && validateOn === "change") {
                const isValid = validate(e.target.value);

                if (isValid) setIsInvalid(false);

                if (!isValid) setIsInvalid(true);
            }
        },
        [onChange, validate, validateOn]
    );

    /**
     * TODO: Handle input blur
     */
    const handleBlur = useCallback(
        (e: FocusEvent<HTMLInputElement>) => {
            console.log(e.target.value);
            onBlur?.(e);

            if (validate && validateOn && validateOn === "blur") {
                const isValid = validate(e.target.value);

                if (isValid) setIsInvalid(false);

                if (!isValid) setIsInvalid(true);
            }
        },
        [onBlur, validate, validateOn]
    );

    /**
     * TODO: Handle clearable input
     */
    const handleClearInput = useCallback(() => {
        if (isClearable) {
            setInputValue("");
        }
    }, [isClearable]);

    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value);
        }
    }, [value]);

    return {
        value: inputValue,
        handleInputChange,
        handleBlur,
        handleClearInput,
        isInvalid,
        isClearable,
        ...rest,
    } as const;
};
