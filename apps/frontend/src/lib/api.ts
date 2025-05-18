// lib/api.ts
import { Category, Subcategory, Dua } from "@/types";

export async function getAllCategoriesWithSubcategories(): Promise<Category[]> {
    const res = await fetch(`${process.env.API_BASE_URL}/categories`, {
        next: { revalidate: 10 }, // ISR
    });
    const data = await res.json();
    return data.data;
}

export async function getSubcategoryBySlug(catId: number): Promise<Subcategory | null> {
    const res = await fetch(`${process.env.API_BASE_URL}/subcategories/${catId}`);
    const data = await res.json();
    return data.success ? data.data : null;
}

export async function getDuasByCategoryId(catId: number): Promise<Dua[]> {
    const res = await fetch(`${process.env.API_BASE_URL}/duas?categoryId=${catId}`);
    const data = await res.json();
    return data.success ? data.data : [];
}

// import { Category, SubCategory, Dua } from "@/types/types";

// const API_BASE_URL = 'http://localhost:3001'; // Adjust to your backend URL

// export async function fetchCategories(): Promise<Category[]> {
//     const res = await fetch(`${API_BASE_URL}/categories`);
//     if (!res.ok) throw new Error('Failed to fetch categories');
//     const data = await res.json();
//     return data.data;
// }

// export async function fetchSubCategories(categoryId: number): Promise<SubCategory[]> {
//     const res = await fetch(`${API_BASE_URL}/sub-categories?categoryId=${categoryId}`);
//     if (!res.ok) throw new Error('Failed to fetch subcategories');
//     const data = await res.json();
//     return data.data;
// }

// export async function fetchDuas(categoryId: number, subCategoryId: number): Promise<Dua[]> {
//     const res = await fetch(`${API_BASE_URL}/duas?categoryId=${categoryId}&subCategoryId=${subCategoryId}`);
//     if (!res.ok) throw new Error('Failed to fetch duas');
//     const data = await res.json();
//     return data.data;
// }