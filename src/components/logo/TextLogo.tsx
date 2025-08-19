import Link from "next/link";
import * as React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
    href?: string;
};

export function TextLogo({ href = "/", ...props }: LogoProps) {
    return (
        <Link href={href}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 200 60"
                width={120}
                height={40}
                {...props}
            >
                <text
                    x="0"
                    y="45"
                    fontFamily="Inter, Arial, sans-serif"
                    fontSize="40"
                    fontWeight="700"
                    fill="#2563eb"
                >
                    Eduly
                </text>
            </svg>
        </Link>
    );
}

export default TextLogo;
