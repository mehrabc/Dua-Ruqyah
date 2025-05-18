"use client"
import Image from "next/image"
import Slider from "./Slider"
import { useState } from "react";
import { motion } from "motion/react"
import FontSettings from "./SettingsItems/FontSettings";
import ViewSettings from "./SettingsItems/ViewSettings";
import AppearanceSettings from "./SettingsItems/AppearanceSettings";

const SettingsSideBar = () => {

    const [toggle, setToggle] = useState("")
    return (
        <div className="px-12 py-3.5 hidden largest:flex top-0 sticky h-screen flex-col items-center gap-5 overflow-hidden w-[352px] text-[#282E29]">
            <div className="flex items-center gap-4 w-full">
                <div className="rounded-full bg-border p-2">
                    <Image
                        src={`/smallcaps.png`}
                        width={18}
                        height={18}
                        alt="Font Capitalization Logo"
                        className="object-cover" />
                </div>
                <div className="flex w-full justify-between items-center cursor-pointer" onClick={() => setToggle(toggle === "fontSettings" ? "" : "fontSettings")}>
                    <h3 className=" text-darkGreen text-sm font-semibold">Font Settings</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 stroke-3 text-[#7D827E] ${toggle === "fontSettings" ? "text-darkGreen" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>


                </div>

            </div>
            {toggle === "fontSettings" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex flex-col text-sm w-full px-2 gap-6">
                    <FontSettings />

                </motion.div>
            )}

            <div className="flex items-center gap-4 w-full">
                <div className="rounded-full bg-border p-2">
                    <Image
                        src={`/copy-success.png`}
                        width={18}
                        height={18}
                        alt="View Settings Logo"
                        className="object-cover" />
                </div>
                <div className="flex w-full justify-between items-center cursor-pointer" onClick={() => setToggle(toggle === "viewSettings" ? "" : "viewSettings")}>
                    <h3 className=" text-darkGreen text-sm font-semibold">View Setting</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 stroke-3 text-[#7D827E] ${toggle === "viewSettings" ? "text-darkGreen" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            {toggle === "viewSettings" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex flex-col text-sm w-full px-2 gap-6">
                    <ViewSettings />

                </motion.div>
            )}


            <div className="flex items-center gap-4 w-full">
                <div className="rounded-full bg-border p-2">
                    <Image
                        src={`/color-swatch.png`}
                        width={18}
                        height={18}
                        alt="View Settings Logo"
                        className="object-cover" />
                </div>
                <div className="flex w-full justify-between items-center cursor-pointer" onClick={() => setToggle(toggle === "appearanceSettings" ? "" : "appearanceSettings")}>
                    <h3 className=" text-darkGreen text-sm font-semibold">Appearance Settings</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`size-4 stroke-3 text-[#7D827E] ${toggle === "appearanceSettings" ? "text-darkGreen" : ""}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            {toggle === "appearanceSettings" && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="flex flex-col text-sm w-full px-2 gap-6">
                    <AppearanceSettings />

                </motion.div>
            )}

        </div>
    )
}

export default SettingsSideBar

