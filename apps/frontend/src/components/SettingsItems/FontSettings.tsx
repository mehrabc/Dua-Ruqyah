"use client"
import React, { useState } from 'react'
import Slider from '../Slider';

const FontSettings = () => {
    const [arabicFontSize, setArabicFontSize] = useState(27);
    const [translationFontSize, setTranslationFontSize] = useState(27);
    return (
        <div className="flex flex-col gap-4">
            <div className="font-medium w-full flex flex-col gap-3">
                <span className="">Arabic Font Face</span>
                <div className="flex items-center bg-lightGreen rounded-xl px-5 py-4 w-full justify-between cursor-pointer">
                    <span >Uthma</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 fill-[#1D1B20]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
            <div>
                <div className="flex w-full justify-between items-center">
                    <span className="">Arabic Font Size</span>
                    <span className="text-darkGreen font-semibold">{arabicFontSize}</span>
                </div>
                <Slider slider={arabicFontSize} setSlider={setArabicFontSize} />
            </div>
            <div>
                <div className="flex w-full justify-between items-center">
                    <span className="">Translation Font Size</span>
                    <span className="text-darkGreen font-semibold">{translationFontSize}</span>
                </div>
                <Slider slider={translationFontSize} setSlider={setTranslationFontSize} />
            </div></div>
    )
}

export default FontSettings