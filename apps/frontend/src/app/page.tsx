import { redirect } from "next/navigation";
import { getAllCategoriesWithSubcategories } from "@/lib/api";

export default async function Home() {
  const categories = await getAllCategoriesWithSubcategories();
  if (!categories.length) {
    return <p>No categories found.</p>;
  }
  const slug = categories[0].cat_name_en;

  if (slug) {
    redirect(`/dua-categories/${slug}`);
  }

  return null;
}