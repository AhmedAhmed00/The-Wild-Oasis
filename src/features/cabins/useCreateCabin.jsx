import { useMutation } from '@tanstack/react-query'

import { insertNewCabin } from '../../services/apiCabins'


export default function useCreateCabin() {

    const { mutate: addNewCabin, isError: isErrorDeleting, data, status: deletingStatus } = useMutation({
        mutationFn: insertNewCabin,


    })




    return { addNewCabin, isErrorDeleting, data, deletingStatus }
}
