// src/types/index.ts
export interface Category {
    id: number;
    cat_id: number;
    subcategories: Subcategory[]
    cat_name_bn: string;
    cat_name_en: string;
    no_of_subcat: number;
    no_of_dua: number;
    cat_icon: string;
}

export interface Subcategory {
    id: number;
    cat_id: number;
    subcat_id: number;
    subcat_name_bn: string;
    subcat_name_en: string;
    no_of_dua: number;
}

export interface Dua {
    id: number;
    cat_id: number;
    subcat_id: number;
    subcategory: Subcategory;
    dua_id: number;
    dua_name_bn: string | null;
    dua_name_en: string | null;
    top_bn: string | null;
    top_en: string | null;
    dua_arabic: string | null;
    dua_indopak: string | null;
    clean_arabic: string | null;
    transliteration_bn: string | null;
    transliteration_en: string | null;
    translation_bn: string | null;
    translation_en: string | null;
    bottom_bn: string | null;
    bottom_en: string | null;
    refference_bn: string | null;
    refference_en: string | null;
    audio: string | null;
}