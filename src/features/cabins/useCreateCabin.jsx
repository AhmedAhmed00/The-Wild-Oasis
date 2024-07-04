import { useMutation, useQueryClient } from '@tanstack/react-query'

import { insertNewCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export default function useCreateCabin() {

    const queryClient = useQueryClient()
    const { mutate: addNewCabin, isError: isErrorDeleting, data, status: deletingStatus } = useMutation({
        mutationFn: insertNewCabin,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
            toast.success("the cabin has been added")
        },
        onError: () => {
            toast.error("cannot Add this cabin")
        }

    })




    return { addNewCabin, isErrorDeleting, data, deletingStatus }
}
