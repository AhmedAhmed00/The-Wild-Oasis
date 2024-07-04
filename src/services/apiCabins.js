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




export async function insertNewCabin(newCabin, id) {
    console.log(newCabin, id);

    // const hasImagePath = newCabin.image?.startsWith?.(supabase)
    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = `https://fcvebldtqtikhfqkfqjh.supabase.co/storage/v1/object/public/cabin-images/${imageName}`



    // Create/Edit
    let query = supabase.from('cabins')


    // create new cabin
    if (!id) query = query.insert([{ ...newCabin, image: imagePath }])

    // edit existing Cabin
    if (id) query = query.update({ ...newCabin, image: imagePath }).eq('id', id)

    const { data, error } = await query.select().single()


    if (error) {
        console.log("feiled while adding cabin")
    }

    // upload image to supaBase
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