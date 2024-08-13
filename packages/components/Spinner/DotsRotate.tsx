import { IconProps } from "./types";

const DotsRotate = ({ className, size }: IconProps) => {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            color="currentColor"
        >
            <g>
                <circle cx="3" cy="12" r="2" />
                <circle cx="21" cy="12" r="2" />
                <circle cx="12" cy="21" r="2" />
                <circle cx="12" cy="3" r="2" />
                <circle cx="5.64" cy="5.64" r="2" />
                <circle cx="18.36" cy="18.36" r="2" />
                <circle cx="5.64" cy="18.36" r="2" />
                <circle cx="18.36" cy="5.64" r="2" />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1.5s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                />
            </g>
        </svg>
    );
};

export default DotsRotate;
