
import { Category, Dua, Subcategory } from "@/types";
import Image from "next/image";
import { HomeIcon2 } from "./SideBarItems/HomeIcon2";
import RightArrow from "./RightArrow";

interface DuaFeedProps {
    duas: Dua[];
    activeCategory: Category;
}
interface DuaInteractions {
    logo: string
    audio?: boolean
}

const duaInteractions: DuaInteractions[] = [
    { logo: '/dua-interaction-btns/lamp.png' },
    { logo: '/dua-interaction-btns/bookmark.png' },
    { logo: '/dua-interaction-btns/play.png', audio: true },
    { logo: '/dua-interaction-btns/calendar.png' },
    { logo: '/dua-interaction-btns/options.png' }

]

export default function DuaFeed({ duas, activeCategory }: DuaFeedProps) {

    if (duas.length === 0) {
        return <div className="text-center py-8 text-gray-500">No duas found for this subcategory</div>;
    }

    const groupedBySubcategory: Record<number, Dua[]> = duas.reduce((acc, dua) => {
        const subcatId: number = dua.subcat_id;
        if (!acc[subcatId]) {
            acc[subcatId] = []
        }
        acc[subcatId].push(dua);
        return acc
    }, {} as Record<number, Dua[]>)
    return (
        <div className="w-full">
            <div className="w-full bg-lightGreen flex gap-2 text-darkGreen items-center text-sm font-medium border-b border-border">
                <HomeIcon2 />
                <span className="text-center">Home</span>
                <RightArrow />
                <span className="text-center">Categories of Dua</span>
                <RightArrow />
                <span className="text-center">{activeCategory.cat_name_en}</span>
            </div>

            <div className="">
                <div className="flex flex-col px-8 items-start bg-lightGreen w-full">
                    <h2 className="text-darkGreen text-lg pt-4"><span className="font-semibold">Category:</span> {activeCategory.cat_name_en}</h2>

                </div>
                {Object.entries(groupedBySubcategory).map(([subcatId, subcatDuas]) => (
                    <div key={subcatId} className="">
                        <div className="flex flex-col px-8 items-start bg-lightGreen w-full pb-4">
                            <h3 className="text-darkGreen text-base mt-6 font-semibold">
                                Section:{" "}
                                <span className="text-black font-normal">
                                    {subcatDuas[0].subcategory.subcat_name_en}
                                </span>
                            </h3>
                        </div>

                        {subcatDuas.map((dua, index) => (
                            <div
                                key={index}
                                id={`dua-${dua.dua_id}`}
                                className="bg-white  shadow py-6 px-4 border-b border-border flex flex-col items-start"
                            >
                                <div className="flex gap-4 items-start text-darkGreen text-base font-semibold mb-[30px]">
                                    <Image
                                        src={`/dua-card-image.png`}
                                        alt="Dua Card Image"
                                        width={28}
                                        height={28}
                                        className="object-cover" />

                                    <h3 className=" font-semibold mb-2">
                                        {dua.dua_id < 10 ? `0${dua.dua_id}` : dua.dua_id}.    {dua.dua_name_en || `Dua ${dua.dua_id}`}
                                    </h3>
                                </div>


                                {dua.dua_arabic && (
                                    <section className="flex flex-col gap-[30px] mb-6 items-end w-full">
                                        <div className=" text-right text-[28px] font-arabic ">
                                            <p>{dua.dua_arabic}</p>
                                        </div>
                                        <div className=" italic text-[#7C827D] self-start">
                                            <p>{dua.transliteration_en}</p>
                                        </div>
                                    </section>

                                )}
                                <h4 className="text-[#282E29] font-semibold mb-2">Translation</h4>
                                {dua.translation_en && (
                                    <div className="mb-4 text-gray-700">
                                        <p>Translation: {dua.translation_en}</p>
                                    </div>
                                )}

                                {dua.top_en && (
                                    <div className="mb-[50px] text-gray-700">
                                        <p>{dua.top_en}</p>
                                    </div>
                                )}

                                <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between w-full gap-4">
                                    {dua.refference_en && (
                                        <div className="text-sm text-gray-500 flex flex-col items-start">
                                            <span className="text-[#7C827D]">Reference:</span>
                                            <span className="font-medium text-[#282E29]">{dua.refference_en}</span>
                                        </div>
                                    )}

                                    <div className="flex sm:gap-3 items-center w-full sm:w-fit justify-between">
                                        {duaInteractions.map((item, index) => (
                                            <Image
                                                key={index}
                                                src={item.logo}
                                                alt={item.logo}
                                                width={20}
                                                height={20}
                                                className="object-cover cursor-pointer"
                                            />

                                        )

                                        )}

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>
    );
}