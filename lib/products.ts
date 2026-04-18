import { supabase } from "./supabaseClient";
import { Product } from "@/types/product";

export async function getProducts(): Promise<Product[]> {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("prod_id")
        .returns<Product[]>();

    if (error) {
        console.error(error);
        return []
    }

    return data ?? [];
}

export async function getProductBySlug(slug:string) {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("slug", slug)
        .single()

    if (error) {
        console.error(error);
        return []
    }

    return data ?? []
}