import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteBooking, getBooking } from '../../services/apiBookings'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function useDeleteBooking() {

    const queryClient = useQueryClient()

    const { mutate, status } = useMutation(
        {
            mutationFn: deleteBooking,
            onSuccess: (data) => {
                toast.success(`booking #${data.id} deleted`)
                queryClient.invalidateQueries({
                    queryKey: ['bookings']
                })
            },
            onError: () => {
                toast.error("cannot delete")
            }

        })
    return { mutate, status }
}
