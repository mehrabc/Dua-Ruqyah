import Link from "next/link";

export function DuasIcon({ isActive = false }: { isActive?: boolean }) {
    return (
        <Link
            href="/"
            className={`relative group flex h-10 w-10 cursor-pointer items-center justify-center rounded-sm border-2 border-transparent duration-200 hover:bg-green ${isActive ? "bg-icon-color-bg" : ""
                }`}
        >
            {/* Filled State (shown when active or on hover) */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                className={`absolute size-[22px] text-darkGreen transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
            >
                <path
                    opacity="0.4"
                    d="M20.2264 2.16675H18.168C15.8064 2.16675 14.5605 3.41258 14.5605 5.77425V7.83258C14.5605 10.1942 15.8064 11.4401 18.168 11.4401H20.2264C22.588 11.4401 23.8339 10.1942 23.8339 7.83258V5.77425C23.8339 3.41258 22.588 2.16675 20.2264 2.16675Z"
                    fill="currentColor"
                />
                <path
                    opacity="0.4"
                    d="M7.84268 14.5491H5.78435C3.41185 14.5491 2.16602 15.7949 2.16602 18.1566V20.2149C2.16602 22.5874 3.41185 23.8332 5.77352 23.8332H7.83185C10.1935 23.8332 11.4394 22.5874 11.4394 20.2257V18.1674C11.4502 15.7949 10.2043 14.5491 7.84268 14.5491Z"
                    fill="currentColor"
                />
                <path
                    d="M6.81352 11.4617C9.38026 11.4617 11.461 9.38099 11.461 6.81425C11.461 4.2475 9.38026 2.16675 6.81352 2.16675C4.24677 2.16675 2.16602 4.2475 2.16602 6.81425C2.16602 9.38099 4.24677 11.4617 6.81352 11.4617Z"
                    fill="currentColor"
                />
                <path
                    d="M19.1866 23.8333C21.7533 23.8333 23.8341 21.7526 23.8341 19.1858C23.8341 16.6191 21.7533 14.5383 19.1866 14.5383C16.6198 14.5383 14.5391 16.6191 14.5391 19.1858C14.5391 21.7526 16.6198 23.8333 19.1866 23.8333Z"
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
                className={`absolute size-[22px] text-darkGreen transition-opacity ${isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                    }`}
            >
                <path
                    d="M15.584 9.16659H17.4173C19.2507 9.16659 20.1673 8.24992 20.1673 6.41659V4.58325C20.1673 2.74992 19.2507 1.83325 17.4173 1.83325H15.584C13.7507 1.83325 12.834 2.74992 12.834 4.58325V6.41659C12.834 8.24992 13.7507 9.16659 15.584 9.16659Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M4.58398 20.1666H6.41732C8.25065 20.1666 9.16732 19.2499 9.16732 17.4166V15.5833C9.16732 13.7499 8.25065 12.8333 6.41732 12.8333H4.58398C2.75065 12.8333 1.83398 13.7499 1.83398 15.5833V17.4166C1.83398 19.2499 2.75065 20.1666 4.58398 20.1666Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.50065 9.16659C7.5257 9.16659 9.16732 7.52496 9.16732 5.49992C9.16732 3.47487 7.5257 1.83325 5.50065 1.83325C3.47561 1.83325 1.83398 3.47487 1.83398 5.49992C1.83398 7.52496 3.47561 9.16659 5.50065 9.16659Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M16.5007 20.1666C18.5257 20.1666 20.1673 18.525 20.1673 16.4999C20.1673 14.4749 18.5257 12.8333 16.5007 12.8333C14.4756 12.8333 12.834 14.4749 12.834 16.4999C12.834 18.525 14.4756 20.1666 16.5007 20.1666Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className="hidden group-hover:block absolute top-1/2 left-full ml-2 -translate-y-1/2 bg-black text-white px-2 py-1 rounded-lg whitespace-nowrap">Dua</span>
        </Link>
    );
}