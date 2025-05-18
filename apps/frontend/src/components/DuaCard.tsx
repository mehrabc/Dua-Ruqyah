import { Dua } from "@/types";

export default function DuaCard({ dua }: { dua: Dua }) {
    return (
        <div className="border rounded p-4 bg-white shadow-sm">
            <h2 className="font-bold text-lg mb-2">{dua.dua_name_en}</h2>
            <p className="text-right text-xl mb-2 font-arabic">{dua.dua_arabic}</p>
            <p className="text-sm text-gray-700">{dua.translation_en}</p>
        </div>
    );
}
