import SearchSideBar from "@/components/SearchSideBar";
import DuaFeed from "@/components/DuaFeed";
import { getAllCategoriesWithSubcategories, getDuasByCategoryId } from "@/lib/api";
import { notFound } from "next/navigation";
import { Category, Dua } from "@/types";
import { slugify, unslugify } from "@/utils/slug";

export async function generateStaticParams() {
  const categories = await getAllCategoriesWithSubcategories();
  return categories.map((cat) => ({
    slug: slugify(cat.cat_name_en),
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const categories = await getAllCategoriesWithSubcategories();
  const { slug } = await params
  const selectedCategory = categories.find(
    (cat) =>
      cat.cat_name_en.replace(/\s+/g, "-") ===
      decodeURIComponent(slug).replace(/\s+/g, '-')
  );



  if (!selectedCategory) return notFound();
  const duas: Dua[] = await getDuasByCategoryId(selectedCategory?.cat_id);
  return (
    <div className="flex">
      <SearchSideBar
        categories={categories}
        activeCategory={selectedCategory}
        duaList={duas}
      />
      <DuaFeed duas={duas} activeCategory={selectedCategory} />
    </div>
  );
}