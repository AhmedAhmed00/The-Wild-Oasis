import { useMutation, useQueryClient } from '@tanstack/react-query'

import { insertNewCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export default function useCreateCabin() {

    const { mutate: addNewCabin, isError: isErrorDeleting, data, status: deletingStatus } = useMutation({
        mutationFn: insertNewCabin,


    })




    return { addNewCabin, isErrorDeleting, data, deletingStatus }
}
