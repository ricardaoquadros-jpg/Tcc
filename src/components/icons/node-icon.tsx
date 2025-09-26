export function NodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 216 250"
      {...props}
    >
      <path fill="#8CC84B" d="M108 0L0 62.5v125l108 62.5 108-62.5v-125L108 0z" />
      <path fill="#77B33F" d="M108 250l108-62.5v-125L108 0v250z" />
      <path fill="#FFF" d="M108 231.25L19.5 178.57V71.43L108 18.75v212.5z" />
      <path fill="#E8E8E8" d="M108 231.25l88.5-52.68V71.43L108 18.75v212.5z" />
    </svg>
  );
}
