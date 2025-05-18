import Link from "next/link";

export function RuqyahIcon({ isActive = false }: { isActive?: boolean }) {
    return (
        <Link
            href="/"
            className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent duration-200 hover:bg-green ${isActive ? "" : ""
                }`}
        >
            {/* Filled State (active or hover) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
                className={`size-[22px] text-darkGreen ${isActive ? "block" : "hidden group-hover:block group-[.active]:block"}`}
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    opacity="0.8"
                    d="M4.5 1a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1zm6.25 0h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-8.5a1.5 1.5 0 0 1-1.5-1.5v-10A1.5 1.5 0 0 1 2.75 1h.5v.5A2.25 2.25 0 0 0 5.5 3.75h3a2.25 2.25 0 0 0 2.25-2.25zM5.97 5.948c0-.217.176-.392.393-.392h1.275c.216 0 .392.175.392.392v1.56h1.56c.217 0 .392.176.392.393v1.275a.39.39 0 0 1-.392.392H8.03v1.56a.39.39 0 0 1-.392.393H6.362a.39.39 0 0 1-.392-.393v-1.56H4.41a.39.39 0 0 1-.392-.392V7.9c0-.217.175-.393.392-.393h1.56z"
                    clipRule="evenodd"
                />
            </svg>

            {/* Outlined State (default) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 14 14"
                className={`size-[22px] text-darkGreen ${isActive ? "hidden" : "block group-hover:hidden group-[.active]:hidden"}`}
            >
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.5 1.5H11a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1h1.5" />
                    <path d="M8.5.5h-3a1 1 0 0 0-1 1V2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-.5a1 1 0 0 0-1-1M6.303 5.21a.43.43 0 0 0-.43.43v1.207H4.666a.43.43 0 0 0-.43.43v1.395c0 .237.193.43.43.43h1.207v1.207c0 .237.193.43.43.43h1.395a.43.43 0 0 0 .43-.43V9.1h1.207a.43.43 0 0 0 .43-.43V7.277a.43.43 0 0 0-.43-.429H8.128V5.639a.43.43 0 0 0-.43-.429z" />
                </g>
            </svg>

            {/* Tooltip */}
            <span className="hidden group-hover:block absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap">
                Ruqyah
            </span>
        </Link>
    );
}
