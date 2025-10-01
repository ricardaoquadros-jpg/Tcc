export function TrelloIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#0079BF"
            {...props}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <rect x="7" y="7" width="4" height="9" fill="white" rx="1" ry="1" />
            <rect x="13" y="7" width="4" height="6" fill="white" rx="1" ry="1" />
        </svg>
    );
}
