import Image from "next/image"

const navBarItems = [

]
const NavBar = () => {
    return (
        <nav className="bg-navBar px-6 py-2.5 flex justify-between min-w-full items-center border-b border-border">
            <div className="flex flex-col text-lg">
                <h1 className="font-semibold">Dua <span className="text-textGreen font-normal">&</span> Ruqyah</h1>
                <span className="font-medium text-xs sm:block hidden">Hisnul Muslim</span>
            </div>
            <div className="flex items-center gap-[18px]">
                <div className="relative rounded-full p-2.5 bg-lightGreen group cursor-pointer">
                    <Image
                        src={`/search-normal.png`}
                        height={18}
                        width={18}
                        alt="Search icon" />
                    <span className="hidden absolute bg-black text-white group-hover:block -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-2 text-xs whitespace-nowrap">Search</span>
                </div>

                <div className="relative rounded-full p-2.5 bg-lightGreen group cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[18px] h-[18px] text-darkGreen">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>

                    <span className="hidden absolute bg-black text-white group-hover:block -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1.5 text-xs whitespace-nowrap">Settings</span>
                </div>
                <div className="lg:flex hidden relative rounded-full p-2.5 px-5 bg-darkGreen group cursor-pointer  items-center justify-between gap-2">
                    <span className="text-white text-sm">Support Us</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none" className="size-[18px]">
                        <path
                            d="M3.21008 17.0192L4.95008 13.5392C5.43008 12.5692 5.43008 11.4392 4.95008 10.4692L3.21008 6.97924C1.72008 3.99924 4.93008 0.849241 7.88008 2.40924L9.42008 3.22924C9.64008 3.33924 9.81008 3.51924 9.90008 3.73924L15.5901 16.3892C15.8201 16.9092 15.6101 17.5192 15.1101 17.7792L7.87008 21.5892C4.93008 23.1492 1.72008 19.9992 3.21008 17.0192Z"
                            fill="#ffffff"  // Tailwind green-500
                        />
                        <path
                            d="M16.8102 15.6004L13.0802 7.32045C12.6602 6.39045 13.6602 5.45045 14.5602 5.93045L20.3302 8.97045C22.7802 10.2604 22.7802 13.7604 20.3302 15.0504L18.2902 16.1204C17.7402 16.4004 17.0702 16.1704 16.8102 15.6004Z"
                            fill="#064E3B"  // Tailwind green-900 for contrast
                        />
                    </svg>
                </div>
            </div>

        </nav>
    )
}

export default NavBar