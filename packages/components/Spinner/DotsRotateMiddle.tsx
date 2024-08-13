import { IconProps } from "./types";

const DotsRotateMiddle = ({ className, size }: IconProps) => {
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
            <circle cx="12" cy="12" r="3" />
            <g>
                <circle cx="4" cy="12" r="3" />
                <circle cx="20" cy="12" r="3" />
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    calcMode="spline"
                    dur="1s"
                    keySplines=".36,.6,.31,1;.36,.6,.31,1"
                    values="0 12 12;180 12 12;360 12 12"
                    repeatCount="indefinite"
                />
            </g>
        </svg>
    );
};

export default DotsRotateMiddle;
