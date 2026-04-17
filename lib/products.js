import { supabase } from "./supabaseClient";

export async function getProducts() {
    const { data, error } = await supabase
        .from("products")
        .select("*")
        .order("prod_id");

    if (error) {
        console.error(error);
        return []
    }

    return data;
}