'use client'
import { useState } from 'react';
interface SliderProps {
    slider: number;
    setSlider: (val: number) => void;
}
const Slider = ({ slider, setSlider }: SliderProps) => {


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlider(Number(e.target.value));
    };

    return (
        <div className="w-full flex flex-col ">

            <input
                id="slider"
                type="range"
                min="0"
                max="100"
                value={slider}
                onChange={handleChange}
                className="slider w-full h-2 rounded-lg cursor-pointer appearance-none mt-2"
                style={{
                    background: `linear-gradient(to right, #116B3F ${slider}%, #E1EBE1 ${slider}%)`
                }}
            />
        </div>
    );
};

export default Slider;
