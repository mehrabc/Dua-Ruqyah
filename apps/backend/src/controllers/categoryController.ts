


import { Request, Response } from "express";
import db from "../config/db";
// interface Category {
//     id: number
//     cat_id: number
//     cat_name_bn: string
//     cat_name_en: string
//     no_of_subact: number
//     no_of_dua: number
//     cat_icon: string
// }


// export const getCategoriesHandler = (req: Request, res: Response) => {
//     const query: string = 'SELECT * FROM category';
//     db.all(query, [], (err: Error | null, rows: Category[]) => {
//         if (err) {
//             console.error('Database error:', err.message);
//             return res.status(500).json({ success: false, message: 'Internal Server Error' });
//         }
//         res.json({ success: true, data: rows });
//     });
// };



export const getCategoriesHandler = (req: Request, res: Response) => {
    const categoryQuery = `SELECT * FROM category`;
    const subCategoryQuery = `SELECT * FROM sub_category`;

    db.all(categoryQuery, [], (err, categories) => {
        if (err) {
            return res.status(500).json({ success: false, message: "Error fetching categories" });
        }

        db.all(subCategoryQuery, [], (err2, subcategories) => {
            if (err2) {
                return res.status(500).json({ success: false, message: "Error fetching subcategories" });
            }

            const merged = categories.map((cat: any) => ({
                ...cat,
                subcategories: subcategories
                    .filter((sub: any) => sub.cat_id === cat.cat_id)
                    .map((sub: any) => ({
                        id: sub.id,
                        subcat_name_en: sub.subcat_name_en,
                        subcat_name_bn: sub.subcat_name_bn,
                        slug: sub.slug,
                    })),
            }));

            res.json({ success: true, data: merged });
        });
    });
};