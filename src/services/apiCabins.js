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

    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = `https://fcvebldtqtikhfqkfqjh.supabase.co/storage/v1/object/public/cabin-images/${imageName}`


    const { data, error } = await supabase
        .from('cabins')
        .insert([{ ...newCabin, image: imagePath }])
        .select()


    if (error) {
        console.log("feiled while adding cabin")
    }


    const { error: bucketError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)

    if (bucketError) {
        await supabase
            .from('cabins')
            .delete()
            .eq('id', newCabin.id) // the row which is its id equals the cabin id

    }





    return data

} 