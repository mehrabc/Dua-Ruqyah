import { Request, Response } from "express";
import db from "../config/db";

interface Dua {
    id: number
    cat_id: number
    subcat_id: number
    subcategory: Sub_Category
    dua_id: number
    dua_name_bn: string | null
    dua_name_en: string | null
    top_bn: string | null
    top_en: string | null
    dua_arabic: string | null
    dua_indopak: string | null
    clean_arabic: string | null
    transliteration_bn: string | null
    transliteration_en: string | null
    translation_bn: string | null
    translation_en: string | null
    bottom_bn: string | null
    bottom_en: string | null
    refference_bn: string | null
    refference_en: string | null
    audio: string | null
}

interface Sub_Category {
    id: number
    cat_id: number
    subcat_id: number
    subcat_name_bn: string
    subcat_name_en: string
    no_of_dua: number
}

export const getDuasHandler = (req: Request, res: Response): void => {
    const categoryId: number = Number(req.query.categoryId)
    if (!categoryId) {
        res.status(400).json({ success: false, message: 'Query param for categoryId is required!' })
        return
    }

    const query: string = 'SELECT * FROM dua AS d WHERE d.cat_id= ?'
    const query2: string = 'SELECT * FROM sub_category AS s WHERE s.cat_id= ?'

    db.all(query, [categoryId], (err: Error | null, duas: Dua[]) => {
        if (err) {
            console.error('Database error', err.message)
            return res.status(500).json({ success: false, message: 'Internal Server Error' })
        }

        db.all(query2, [categoryId], (err2: Error | null, subcategories: Sub_Category[]) => {
            if (err2) {
                console.error('Database error', err2.message)
                return res.status(500).json({ success: false, message: 'Internal Server Error' })
            }
            const merged = duas.map((dua: Dua) => ({
                ...dua,
                subcategory: subcategories.find(s => s.subcat_id === dua.subcat_id)
            }))
            return res.json({ success: true, data: merged })
        })

    })
}