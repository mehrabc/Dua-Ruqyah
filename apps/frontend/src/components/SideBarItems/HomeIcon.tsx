import Link from "next/link";

export function HomeIcons({ isActive = false }: { isActive?: boolean }) {
    return (
        <Link
            href="/"
            className={`relative group flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent duration-200 hover:bg-green ${isActive ? "" : ""
                }`}
        >
            {/* Filled State (shown when active or on hover) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className={`absolute size-[22px] text-darkGreen transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
            >
                <path
                    d="M20.5992 7.0675L13.0917 1.06583C11.9325 0.134166 10.0584 0.134166 8.91002 1.055L1.40252 7.0675C0.557524 7.73917 0.0158568 9.15833 0.200023 10.22L1.64086 18.8433C1.90086 20.3817 3.37419 21.6275 4.93419 21.6275H17.0675C18.6167 21.6275 20.1009 20.3708 20.3609 18.8433L21.8017 10.22C21.975 9.15833 21.4334 7.73917 20.5992 7.0675ZM11.0009 14.7917C9.50586 14.7917 8.29252 13.5783 8.29252 12.0833C8.29252 10.5883 9.50586 9.375 11.0009 9.375C12.4959 9.375 13.7092 10.5883 13.7092 12.0833C13.7092 13.5783 12.4959 14.7917 11.0009 14.7917Z"
                    fill="currentColor"
                />
            </svg>

            {/* Outlined State (shown when not active and not hovering) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                className={`size-[22px] text-darkGreen ${isActive ? "hidden" : "block group-hover:hidden"
                    }`}
            >
                <path
                    d="M9.23051 2.58494L2.87801 7.67243C2.16301 8.24076 1.70467 9.44163 1.86051 10.34L3.07968 17.6366C3.29968 18.9383 4.54634 19.9924 5.86634 19.9924H16.133C17.4438 19.9924 18.6997 18.9291 18.9197 17.6366L20.1388 10.34C20.2855 9.44163 19.8272 8.24076 19.1213 7.67243L12.7688 2.59411C11.788 1.80578 10.2022 1.80577 9.23051 2.58494Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M11.0007 14.2083C12.2663 14.2083 13.2923 13.1823 13.2923 11.9167C13.2923 10.651 12.2663 9.625 11.0007 9.625C9.735 9.625 8.70898 10.651 8.70898 11.9167C8.70898 13.1823 9.735 14.2083 11.0007 14.2083Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="hidden group-hover:block absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap">Home</span>
        </Link>
    );
}