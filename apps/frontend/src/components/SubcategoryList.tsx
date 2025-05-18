// import { Subcategory } from "@/types";
// import Link from "next/link";
// interface Props {
//     subcategories: Subcategory[];
// }

// export default function SubcategoryList({ subcategories }: Props) {
//     return (
//         <ul className="ml-4 space-y-1">
//             {subcategories.map((sub) => (
//                 <li key={sub.id}>
//                     <Link href={`/?subcat=${sub.id}`} className="text-blue-600 hover:underline">
//                         {sub.subcat_name_en}
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     );
// }

'use client';

import { Subcategory } from "@/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SubCategoryListProps {
    subCategories: Subcategory[];
    subCatId: number;
}

export default function SubCategoryList({
    subCategories,
    subCatId,
}: SubCategoryListProps) {

    const router = useRouter();
    const pathname = usePathname();
    const currentParams = useSearchParams();
    const handleClick = () => {
        const newParams = new URLSearchParams(currentParams.toString());
        newParams.set('subcategory', subCatId.toString());

        router.push(`${pathname}?${newParams.toString()}`);
    };

    return (
        <ul className="ml-6 mt-1">
            {subCategories.map(subCategory => (
                <li
                    key={subCategory.id}
                    className={`p-2 rounded cursor-pointer ${subCatId === subCategory.id ? 'bg-green-50 text-green-600' : 'hover:bg-gray-50'}`}
                    onClick={() => handleClick}
                >
                    {subCategory.subcat_name_en} ({subCategory.no_of_dua})
                </li>
            ))}
        </ul>
    );
}