interface DonutProps {
  width: number;
  height: number;
  outerColor: string;
  innerColor: string;
  strokeWidth?: number;
  // percentage: number;
}

export const Donut: React.FC<DonutProps> = ({
  width,
  height,
  outerColor,
  innerColor,
  strokeWidth,
  // percentage,
}) => {
  const radius = 15.9155;
  // const circumference = 2 * Math.PI * radius;
  // const dashArray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 42"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Inner Circle */}
      <circle
        cx="21"
        cy="21"
        r={radius}
        fill="none"
        stroke={innerColor}
        strokeWidth={strokeWidth ?? 5}
      />
      {/* Donut Circle */}
      <circle
        cx="21"
        cy="21"
        r={radius}
        fill="none"
        stroke={outerColor}
        strokeWidth={strokeWidth ?? 5}
        // strokeDasharray={dashArray}
        strokeDashoffset="25"
        transform="rotate(-90 21 21)"
      />
    </svg>
  );
};
