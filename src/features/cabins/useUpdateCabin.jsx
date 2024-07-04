import { useMutation, useQueryClient } from '@tanstack/react-query'
import { insertNewCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'

export default function useUpdateCabin() {
    const queryClient = useQueryClient()
    const { mutate: updateCabin, data: editingData, status: editingStatus, isError: isErrorUpdating } = useMutation({
        mutationFn: ({ newCabinData, id }) => insertNewCabin(newCabinData, id),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"]
            })
            toast.success("the cabin has been update")
        },
        onError: () => {
            toast.error("cannot update this cabin")
        }

    })

    return { updateCabin, editingData, editingStatus, isErrorUpdating }

}
