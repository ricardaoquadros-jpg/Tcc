export function PhpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="#777BB4"
      {...props}
    >
      <ellipse cx="12" cy="12" rx="10" ry="6" />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="8"
        fontWeight="bold"
        fill="white"
        fontFamily="sans-serif"
      >
        PHP
      </text>
    </svg>
  );
}
