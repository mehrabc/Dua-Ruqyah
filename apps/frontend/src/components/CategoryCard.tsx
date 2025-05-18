// import { Category } from "@/types";
// import Link from "next/link";
// import SubcategoryList from "./SubcategoryList"

// interface Props {
//     category: Category;
//     activeCategorySlug: string;
//     activeSubSlug: number;
// }

// export default function CategoryCard({ category,activeCategorySlug, activeSubSlug }: Props) {
//     const isActive = category.subcategories.some((sub) => sub.id === activeSubSlug);
// const categorySlug = category.cat_name_en.toLowerCase().replace(/\s+/g, "-");
//   const isActive = activeCategorySlug.toLowerCase() === category.cat_name_en.toLowerCase()
//     return (
//         <div>
//             <div className="font-bold text-lg">{category.cat_name_en}</div>
//             {isActive && (
//                 <SubcategoryList subcategories={category.subcategories} activeSlug={activeSubSlug} />
//             )}
//         </div>
//     );
// }
