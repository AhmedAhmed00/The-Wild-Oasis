import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteCabin } from '../../services/apiCabins'
import toast from 'react-hot-toast'





export default function useDeleteCabin() {
    const queryClient = useQueryClient()
    const { mutate, data, isError } = useMutation({
        mutationFn: deleteCabin,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["cabins"],
            })
            toast.success("Cabin has been deleted successfully")
        },
        onError: () => {
            toast.error("Cannot Delete this Cabin")
        }

    })
    return { mutate, data, isError }
}
