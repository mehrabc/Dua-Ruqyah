import { div } from "motion/react-client"

const appearanceItems = [
    {
        type: "Light"
    }
]

const AppearanceSettings = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-x-3 gap-y-4">
            <div className="flex gap-4">
                <button className="hover:scale-105 transition" title="Light Theme">
                    <svg viewBox="0 0 126 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="126" height="110" rx="16" fill="#ffffff" /> <rect x="10" y="10" width="106" height="15" rx="7.5" fill="#d1d5db30" /> <rect x="15" y="15" width="20" height="5" rx="2.5" fill="#9ca3af" /> </svg>
                </button>
                <button className="hover:scale-105 transition" title="Dark Theme"> <svg viewBox="0 0 126 110" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="126" height="110" rx="16" fill="#1f2937" /> <rect x="10" y="10" width="106" height="15" rx="7.5" fill="#37415150" /> <rect x="15" y="15" width="20" height="5" rx="2.5" fill="#f9fafb" /> </svg> </button>
                <button className="hover:scale-105 transition" title="Sepia Theme"> <svg viewBox="0 0 126 110" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="126" height="110" rx="16" fill="#f5e6c5" /> <rect x="10" y="10" width="106" height="15" rx="7.5" fill="#c2b28050" /> <rect x="15" y="15" width="20" height="5" rx="2.5" fill="#5c4033" /> </svg> </button>
                <button className="hover:scale-105 transition" title="System Theme"> <svg viewBox="0 0 126 110" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect width="126" height="110" rx="16" fill="url(#grad)" /> <defs> <linearGradient id="grad" x1="0" y1="0" x2="126" y2="110" gradientUnits="userSpaceOnUse"> <stop stopColor="#ffffff" /> <stop offset="1" stop-color="#1f2937" /> </linearGradient> </defs> <rect x="10" y="10" width="106" height="15" rx="7.5" fill="#6b728e50" /> <rect x="15" y="15" width="20" height="5" rx="2.5" fill="#6b7280" /> </svg> </button> </div>
        </div>
    )
}

export default AppearanceSettings