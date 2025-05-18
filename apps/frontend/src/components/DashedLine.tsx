import React, { useRef, useEffect, useState } from "react";

interface DashedLineProps {
    direction?: "horizontal" | "vertical";
    numDashes?: number;
    color?: string;
    strokeWidth?: number;
    className?: string;
}

const DashedLine: React.FC<DashedLineProps> = ({
    direction = "horizontal",
    numDashes,
    color = "gray-400",
    strokeWidth = 2,
    className = "w-full h-4",
}) => {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const [dashData, setDashData] = useState({ dash: 6, gap: 6 });

    useEffect(() => {
        if (!svgRef.current || numDashes) return;

        const size = svgRef.current.getBoundingClientRect();
        const length = direction === "horizontal" ? size.width : size.height;

        const approxDashSize = 12; // 6px dash + 6px gap
        const calculatedDashes = Math.floor(length / approxDashSize);
        const segment = length / (calculatedDashes * 2);

        setDashData({ dash: segment, gap: segment });
    }, [direction, numDashes]);

    const viewBoxSize = 100;
    const isHorizontal = direction === "horizontal";

    const lineProps = isHorizontal
        ? { x1: 0, y1: viewBoxSize / 2, x2: viewBoxSize, y2: viewBoxSize / 2 }
        : { x1: viewBoxSize / 2, y1: 0, x2: viewBoxSize / 2, y2: viewBoxSize };

    const dashLength = numDashes
        ? viewBoxSize / (numDashes * 2)
        : dashData.dash * (viewBoxSize / 100);
    const gapLength = numDashes
        ? viewBoxSize / (numDashes * 2)
        : dashData.gap * (viewBoxSize / 100);

    return (
        <svg
            ref={svgRef}
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
            preserveAspectRatio="none"
            className={`${className} text-${color}`}
        >
            <line
                {...lineProps}
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeDasharray={`${dashLength} ${gapLength}`}
            />
        </svg>
    );
};

export default DashedLine;
