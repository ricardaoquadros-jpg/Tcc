export function FXBLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="60"
        fontWeight="bold"
        fill="currentColor"
        className="font-headline"
      >
        FXB
      </text>
    </svg>
  );
}
