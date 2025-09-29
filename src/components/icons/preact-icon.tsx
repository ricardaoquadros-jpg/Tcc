export function PreactIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1.5 -1.5 19 19"
      fill="none"
      stroke="#673AB8"
      strokeWidth="1"
      {...props}
    >
      <circle cx="7.5" cy="7.5" r="1.5" fill="#673AB8" />
      <ellipse rx="7" ry="2.5" />
      <ellipse rx="7" ry="2.5" transform="rotate(60 7.5 7.5)" />
      <ellipse rx="7" ry="2.5" transform="rotate(120 7.5 7.5)" />
    </svg>
  );
}
