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

export async function deleteCabin(cabinID) {
    const { data, error } = await supabase
        .from('cabins')
        .delete()
        .eq('id', cabinID) // the row which is its id equals the cabin id
    if (error) {
        console.log(error);
        throw new Error("feiled while deleteing cabin")
    }

    return data


}




export async function insertNewCabin(newCabin) {
    const { data, error } = await supabase
        .from('cabins')
        .insert([newCabin])
        .select()
    if (error) {
        console.log("feiled while adding cabin")
    }

    return data

} 