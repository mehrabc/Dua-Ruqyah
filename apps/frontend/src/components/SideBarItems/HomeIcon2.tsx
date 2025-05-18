import Link from "next/link";

export function HomeIcon2() {
    return (
        <Link
            href="/"
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent"
        >
            {/* Filled Static Icon */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className="size-[18px] text-[#AAC2B6]"
            >
                <path
                    d="M20.5992 7.0675L13.0917 1.06583C11.9325 0.134166 10.0584 0.134166 8.91002 1.055L1.40252 7.0675C0.557524 7.73917 0.0158568 9.15833 0.200023 10.22L1.64086 18.8433C1.90086 20.3817 3.37419 21.6275 4.93419 21.6275H17.0675C18.6167 21.6275 20.1009 20.3708 20.3609 18.8433L21.8017 10.22C21.975 9.15833 21.4334 7.73917 20.5992 7.0675Z"
                    fill="currentColor"
                />
                <circle
                    className="text-darkGreen"
                    cx="11"
                    cy="12.0833"
                    r="2"
                    fill="#064E3B" // Dark green center dot (Tailwind's green-900)
                />
            </svg>
        </Link>
    );
}
