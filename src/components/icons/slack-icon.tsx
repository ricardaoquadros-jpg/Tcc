export function SlackIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            {...props}
        >
            <path fill="#36C5F0" d="M9.7 14.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            <path fill="#2EB67D" d="M14.3 14.3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            <path fill="#ECB22E" d="M9.7 9.7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/>
            <path fill="#E01E5A" d="M14.3 9.7a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            <path fill="#36C5F0" d="M10.7 14.3H4a1 1 0 0 1 0-2h6.7a2 2 0 0 1 0 2z"/>
            <path fill="#2EB67D" d="M14.3 10.7V4a1 1 0 0 1 2 0v6.7a2 2 0 0 1-2 0z"/>
            <path fill="#ECB22E" d="M9.7 13.3V20a1 1 0 0 1-2 0v-6.7a2 2 0 1 1 2 0z"/>
            <path fill="#E01E5A" d="M13.3 9.7H20a1 1 0 0 1 0 2h-6.7a2 2 0 1 1 0-2z"/>
        </svg>
    );
}
