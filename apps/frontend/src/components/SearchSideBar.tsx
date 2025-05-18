'use client';
import { useEffect, useRef, useState } from 'react';
import { Category, Dua } from '@/types';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from "motion/react"
interface Props {
    categories: Category[];
    activeCategory: Category;
    duaList: Dua[];
}

const SearchSideBar = ({ categories, activeCategory, duaList }: Props) => {
    const [selectedCategory, setSelectedCategory] = useState(activeCategory.cat_name_en);
    const [selectedSubcategory, setSelectedSubcategory] = useState(categories.find((item) => item.cat_name_en === activeCategory.cat_name_en)?.subcategories[0].subcat_name_en);
    const [selectedDua, setSelectedDua] = useState(duaList.some(dua => dua.subcat_id === activeCategory.subcategories[0].id));
    const [toggle, setToggle] = useState("")
    const selectedCategoryRef = useRef<HTMLDivElement | null>(null);
    const router = useRouter();


    useEffect(() => {
        if (selectedCategoryRef.current) {
            selectedCategoryRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }, [selectedCategory]);

    const handleSubcategorySelection = (subcat_name_en: string) => {
        setSelectedSubcategory(subcat_name_en)
        setToggle(() => (
            toggle === subcat_name_en ? "" : subcat_name_en
        ));
    }
    return (

        <div className="hidden lg:flex flex-col min-w-[352px] max-w-[352px] border-r border-border">
            <div className="sticky top-0 h-screen p-6 overflow-y-auto flex flex-col gap-5 scrollbar-custom">
                <label htmlFor="searchBar">
                    <div className="w-full rounded-[30px] flex justify-between border border-border py-3 px-2.5 bg-border">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-[#7C827D]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>

                        <input type="text" id="searchBar" name="searchBar" placeholder={`Search by dua categories`} className="w-full px-4 placeholder:text-[#7C827D] placeholder:text-sm focus:outline-none" />
                    </div>
                </label>
                <div className="flex flex-col gap-5 items-start w-full">
                    {categories.map((cat, index) => {
                        const isActive = selectedCategory === cat.cat_name_en;
                        return (
                            <div ref={isActive ? selectedCategoryRef : null} className="flex flex-col gap-4 items-center  w-full " key={index} >
                                <Link href={`/dua-categories/${cat.cat_name_en}`} className={`${selectedCategory === cat.cat_name_en ? "" : "hover:bg-lightGreen"} flex flex-row w-full gap-4  px-5 py-4 rounded-2xl cursor-pointer`} >
                                    <div className="p-2.5 bg-lightGreen rounded-full w-11 h-11 flex items-center justify-center">
                                        <Image
                                            src={`/dua-category-icons/${cat.cat_icon}.svg`}
                                            width={28}
                                            height={28}
                                            alt={`${cat.cat_icon}`}
                                            className="w-8 h-8"
                                        />
                                    </div>

                                    <div
                                        className="flex flex-col gap-2 items-start"
                                    >
                                        <span className="text-sm font-medium">{cat.cat_name_en}</span>
                                        <span className="text-[#7C827D] text-sm font-light w-full">{cat.no_of_subcat} Subcat | {cat.no_of_dua} Duas</span>
                                    </div>
                                </Link>
                                {
                                    selectedCategory == cat.cat_name_en && (
                                        <motion.div
                                            initial={{ opacity: 0.5, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.1, duration: 0.1 }}
                                            className="flex flex-col gap-3 border-l-2 border-dashed border-dashedLine ml-10 ">
                                            {cat.subcategories.map((item, index) => (
                                                <div className="flex items-start" key={index}>
                                                    <div className="relative top-2 min-w-4 border-t-2 border-dashed border-dashedLine">

                                                    </div>
                                                    <div className="flex flex-col gap-3">
                                                        <span onClick={() => handleSubcategorySelection(item.subcat_name_en)} className={`${selectedSubcategory === item.subcat_name_en ? "text-darkGreen font-semibold" : ""} text-sm text-black px-5 cursor-pointer`}>{item.subcat_name_en}</span>

                                                        <div className="flex flex-col gap-5 ml-8">
                                                            {selectedSubcategory === item.subcat_name_en && toggle === item.subcat_name_en && (
                                                                duaList.filter((dua) => dua.subcat_id === item.id).map((dua, index) => (
                                                                    <div className="flex gap-3" key={index}>
                                                                        <Image
                                                                            src={`/dua-arrow.png`}
                                                                            height={24}
                                                                            width={24}
                                                                            alt="Dua arrow"
                                                                            className="object-contain self-start" />

                                                                        <div key={index} className="cursor-pointer text-sm">
                                                                            {dua.dua_name_en}
                                                                        </div>
                                                                    </div>
                                                                ))

                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                            ))}
                                        </motion.div>
                                    )}
                            </div>
                        )
                    }


                    )}
                </div>
            </div >
        </div>
    )
}

export default SearchSideBar