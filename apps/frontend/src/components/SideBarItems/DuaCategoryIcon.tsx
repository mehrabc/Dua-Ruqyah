import Link from "next/link";

export function DuaCategoriesIcon({ isActive = false }: { isActive?: boolean }) {
    return (
        <Link
            href="/"
            className={`group relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent duration-200 hover:bg-green ${isActive ? "bg-green" : ""
                }`}
        >
            {/* Filled State (shown when active or on hover) */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`size-[22px] text-darkGreen ${isActive ? "block" : "hidden group-hover:block"
                    }`}
            >
                <path
                    opacity="0.4"
                    d="M20.95 14.55L18.28 17.22L17.22 18.28L14.55 20.95C13.15 22.35 10.85 22.35 9.45002 20.95L6.78001 18.28L5.72001 17.22L3.05 14.55C1.65 13.15 1.65 10.85 3.05 9.45002L5.72001 6.78001L6.78001 5.72001L9.45002 3.05C10.85 1.65 13.15 1.65 14.55 3.05L17.22 5.72001L18.28 6.78001L20.95 9.45002C22.35 10.85 22.35 13.15 20.95 14.55Z"
                    fill="currentColor"
                />
                <path
                    d="M13.0607 11.9987L18.2807 17.2188L17.2207 18.2787L12.0007 13.0587L6.7807 18.2787L5.7207 17.2188L10.9407 11.9987L5.7207 6.77875L6.7807 5.71875L12.0007 10.9388L17.2207 5.71875L18.2807 6.77875L13.0607 11.9987Z"
                    fill="currentColor"
                />
            </svg>

            {/* Outlined State (shown when not active and not hovering) */}
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`size-[22px] text-darkGreen ${isActive ? "hidden" : "block group-hover:hidden"
                    }`}
            >
                <path
                    d="M20.9498 14.55L14.5598 20.94C13.1598 22.34 10.8598 22.34 9.44978 20.94L3.05977 14.55C1.65977 13.15 1.65977 10.85 3.05977 9.44001L9.44978 3.05C10.8498 1.65 13.1498 1.65 14.5598 3.05L20.9498 9.44001C22.3498 10.85 22.3498 13.15 20.9498 14.55Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M6.25 6.25L17.75 17.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M17.75 6.25L6.25 17.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="hidden group-hover:block absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap">Category</span>
        </Link>
    );
}