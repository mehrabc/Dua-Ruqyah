// import { Request, Response } from "express";
// import db from "../config/db";
// import { Dua, Sub_Category } from "../types";

// // interface Sub_Category {
// //     id: number
// //     cat_id: number
// //     subcat_name_bn: string
// //     subcat_name_en: string
// //     no_of_dua: number
// // }

// export const getSubCategoriesHandler = (req: Request, res: Response): void => {
//     const categoryId: number = Number(req.query.categoryId)
//     if (!categoryId) {
//         res.status(400).json({ success: false, message: 'Query param for categoryId is required!' })
//         return
//     }

//     const subcategoryQuery = 'SELECT * FROM sub_category AS s WHERE s.cat_id= ?'
//     const duaQuery = 'SELECT * FROM dua AS d WHERE d.cat_id= ?'
//     db.all(subcategoryQuery, [categoryId], (err: Error | null, subcategories: Sub_Category[]) => {
//         if (err) {
//             console.error('Database error:', err.message);
//             return res.status(500).json({ success: false, message: 'Internal Server Error' });
//         }
//         db.all(duaQuery, [categoryId], (err2: Error | null, duas: Dua[]) => {
//             if (err2) {
//                 console.error('Database error:', err2.message);
//                 return res.status(500).json({ success: false, message: 'Internal Server Error' });
//             }
//             const merged = subcategories.map((subcat: Sub_Category) => ({
//                 ...subcat,
//                 duas: duas
//                     .filter((dua: any) => dua.subcat_id === subcat.subcat_id)
//             }));
//             return res.json({ success: true, data: merged })
//         })




//     })
// }