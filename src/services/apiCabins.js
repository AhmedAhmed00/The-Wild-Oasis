import supabase from "./supabase";

export async function getCabins() {

    let { data: cabins, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        console.log(error);
        throw new Error("feiled while fetching cabins")
    }

    return cabins

}