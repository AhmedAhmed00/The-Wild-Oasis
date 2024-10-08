import supabase from "./supabase";

export async function login({ email, password }) {

    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    if (error) {
        // console.log(error);
        throw new Error("Cannot Login")
    }
    // console.log(data);
    return data

}
export async function getLoggedInUser() {

    const { data: session } = await supabase.auth.getSession()

    if (!session.session) return null
    const { data } = await supabase.auth.getUser()

    // console.log(data);

    return data?.user

}




export async function logout() {

    let { error } = await supabase.auth.signOut()
    if (error) {
        console.log(error);
        throw new Error(error.message)
    }

}

export async function signUp({ fullName, email, password }) {


    let { data, error } = await supabase.auth.signUp({
        email, password,
        options: {
            data: {
                fullName,
                avatar: ""
            }
        }
    })
    if (error) {
        console.log(error);
        throw new Error(error.message)
    }



    console.log(data)

    return data

}


export async function updateCurrentUser({ password, fullName }) {

    let updateData;
    if (password) updateData = { password }
    if (fullName) updateData = { data: { fullName } }
    const { data, error } = await supabase.auth.updateUser(updateData)
    console.log(data);

    if (error) {
        console.log(error);
        throw new Error("there is an errror while updating")
    }
    ;

    return data

}
