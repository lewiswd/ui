import { useCallback, useMemo, useState } from "react";

import { AvatarProps } from "./types";

import { avatarBgColor, avatarBorderColor } from "../../constants";
import { cn } from "../../utils";

const Avatar = ({
    src,
    classNames,
    color = "gray",
    fallback,
    isBorder,
    isDisabled,
    name,
    radius = "full",
    showFallback = false,
    size = 40,
}: AvatarProps) => {
    const [isLoadedImageFail, setIsLoadedImageFail] = useState<boolean>(false);

    const colorClassname = useMemo(() => {
        if (isBorder) {
            return `${avatarBgColor[color]} ${avatarBorderColor[color]}`;
        }

        return avatarBgColor[color];
    }, [color, isBorder]);

    /**
     * TODO: Function to get content callback
     */
    const fallbackContent = useCallback(() => {
        if (showFallback && fallback) return fallback;

        if (name)
            return (
                <span className="font-bold text-white text-lg uppercase truncate">
                    {name[0]}
                </span>
            );

        return null;
    }, [fallback, showFallback, name]);

    return (
        <div
            data-slot="base"
            style={{
                width: size,
            }}
            className={cn(
                "relative aspect-square overflow-hidden outline-none",
                "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-75",
                colorClassname,
                classNames?.base
            )}
            data-radius={radius}
            data-disabled={isDisabled}
        >
            <div
                data-slot="img"
                className={cn("w-full h-full", classNames?.img)}
            >
                <img
                    className={cn(
                        "w-full h-full object-cover",
                        isLoadedImageFail ? "opacity-0" : ""
                    )}
                    src={src}
                    alt={name}
                    onError={() => setIsLoadedImageFail(true)}
                />
            </div>
            {(src === "" || isLoadedImageFail) && (
                <div
                    data-slot="fallback"
                    className={cn(
                        "absolute top-0 left-0 right-0 bottom-0 w-full h-full",
                        "flex items-center justify-center",
                        classNames?.fallback
                    )}
                >
                    {fallbackContent()}
                </div>
            )}
        </div>
    );
};

export default Avatar;
