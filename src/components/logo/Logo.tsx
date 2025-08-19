import Link from "next/link";
import * as React from "react";

type LogoProps = React.SVGProps<SVGSVGElement> & {
  href?: string;
};

export function Logo({ href = "/", ...props }: LogoProps) {
  return (
    <Link href={href}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={32}
        height={32}
        {...props}
      >
        <path d="M32 8L4 20l28 12 28-12-28-12z" fill="#2563eb" />
        <path
          d="M32 32v12c0 4 8 4 8 0V32"
          stroke="#2563eb"
          strokeWidth={3}
          strokeLinecap="round"
        />
        <path d="M12 26v10c0 4 20 12 20 12s20-8 20-12V26" fill="#1d4ed8" />
      </svg>
    </Link>
  );
}

export default Logo;
