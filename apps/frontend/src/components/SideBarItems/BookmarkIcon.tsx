import Link from "next/link";

export function BookmarkIcon({ isActive = false }: { isActive?: boolean }) {
    return (
        <Link
            href="/"
            className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent duration-200 hover:bg-green
                }`}
        >
            {/* Filled State (active or hover) */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`size-[22px] text-darkGreen ${isActive ? "block" : "hidden group-hover:block group-[.active]:block"}`}
            >
                <path
                    opacity="0.4"
                    d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
                    fill="currentColor"
                />
                <path
                    d="M14.5 10.8984H9.5C9.36614 10.8984 9.25 10.7823 9.25 10.6484C9.25 10.5146 9.36614 10.3984 9.5 10.3984H14.5C14.6339 10.3984 14.75 10.5146 14.75 10.6484C14.75 10.7823 14.6339 10.8984 14.5 10.8984Z"
                    fill="currentColor"
                    stroke="currentColor"
                />
            </svg>

            {/* Outlined State (default) */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`size-[22px] text-darkGreen ${isActive ? "hidden" : "block group-hover:hidden group-[.active]:hidden"}`}
            >
                <path
                    d="M14.5 10.6484H9.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.8203 2H7.18031C5.05031 2 3.32031 3.74 3.32031 5.86V19.95C3.32031 21.75 4.61031 22.51 6.19031 21.64L11.0703 18.93C11.5903 18.64 12.4303 18.64 12.9403 18.93L17.8203 21.64C19.4003 22.52 20.6903 21.76 20.6903 19.95V5.86C20.6803 3.74 18.9503 2 16.8203 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>

            <span className="z-99 hidden group-hover:block absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap">
                Bookmarks
            </span>
        </Link>
    );
}
