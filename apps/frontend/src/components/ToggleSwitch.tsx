import React, { useState } from 'react'

interface ToggleProp {
    isChecked: boolean;
    setIsChecked: (val: boolean) => void;
}

const ToggleSwitch = ({ isChecked, setIsChecked }: ToggleProp) => {
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <label className='flex cursor-pointer select-none items-center' >
                <div className='relative '>
                    <input
                        type='checkbox'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className='sr-only bg-lightGreen'
                    />
                    <div
                        className={`box block h-7 w-[48px] rounded-full ${isChecked ? 'bg-border' : ' bg-lightGreen'
                            }`}
                    ></div>
                    <div
                        className={`absolute left-1 top-1 flex h-5 w-5 items-center justify-center rounded-full  transition ${isChecked ? 'translate-x-full bg-darkGreen' : 'bg-darkGreen/70'
                            }`}
                    ></div>
                </div>
            </label>
        </>
    )
}

export default ToggleSwitch
