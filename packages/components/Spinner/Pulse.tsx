import { IconProps } from "./types";

const Pulse = ({ className, size }: IconProps) => {
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
            <circle cx="12" cy="12" r="0">
                <animate
                    id="spinner_lNK6"
                    begin="0;spinner_NDtD.begin+0.6s"
                    attributeName="r"
                    calcMode="spline"
                    dur="1.2s"
                    values="0;11"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                />
                <animate
                    begin="0;spinner_NDtD.begin+0.6s"
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    values="1;0"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                />
            </circle>
            <circle cx="12" cy="12" r="0">
                <animate
                    id="spinner_NDtD"
                    begin="spinner_lNK6.begin+0.6s"
                    attributeName="r"
                    calcMode="spline"
                    dur="1.2s"
                    values="0;11"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                />
                <animate
                    begin="spinner_lNK6.begin+0.6s"
                    attributeName="opacity"
                    calcMode="spline"
                    dur="1.2s"
                    values="1;0"
                    keySplines=".52,.6,.25,.99"
                    fill="freeze"
                />
            </circle>
        </svg>
    );
};

export default Pulse;
