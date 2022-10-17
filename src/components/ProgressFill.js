export const ProgressFill = ({ initVal, timerVal }) => {
  const offsetVal =
    timerVal > -1000 ? Math.floor(((initVal - timerVal) / initVal) * 855) : 855;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="288px"
      height="288px"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stopColor="#00FF00" />
          <stop offset="80%" stopColor="#FF0000" />
          <stop offset="100%" stopColor="#FF0000" />
        </linearGradient>
      </defs>
      <circle
        stroke="url(#GradientColor)"
        strokeWidth={16}
        strokeDasharray={855}
        strokeDashoffset={offsetVal}
        fill="none"
        cx="144"
        cy="144"
        r="136"
        strokeLinecap="round"
        transform="rotate(-90, 144, 144)"
      />
    </svg>
  );
};
