export default function DegreeHat({
  width = "2rem",
  height = "2rem",
  className,
  ...props
}) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      {...props}
      viewBox="0 0 28 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.15625 10.6821L13.304 5.82812L25.4517 10.6821L13.304 15.5361L1.15625 10.6821Z"
        stroke="url(#paint0_linear_157_651)"
        strokeWidth="2.31143"
        strokeLinejoin="round"
      />
      <path
        d="M25.4492 10.7461V16.0757M6.67578 13.2396V20.4293C6.67578 20.4293 9.45528 23.1643 13.3015 23.1643C17.1483 23.1643 19.9278 20.4293 19.9278 20.4293V13.2396"
        stroke="url(#paint1_linear_157_651)"
        strokeWidth="2.31143"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_157_651"
          x1="13.304"
          y1="5.82812"
          x2="13.304"
          y2="15.5361"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9C1B" />
          <stop offset="1" stopColor="#EC1B09" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_157_651"
          x1="16.0625"
          y1="10.7461"
          x2="16.0625"
          y2="23.1643"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9C1B" />
          <stop offset="1" stopColor="#EC1B09" />
        </linearGradient>
      </defs>
    </svg>
  );
}
