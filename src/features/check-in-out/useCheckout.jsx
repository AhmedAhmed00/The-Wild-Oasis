import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'

export default function useCheckout() {


    const queryClient = useQueryClient()

    const { mutate: checkout, status } = useMutation({
        mutationFn: (id) => updateBooking(id, {
            status: "checked-out",
        }),
        onSuccess: (data) => {
            toast.success(`booking #${data.id} Checked out successfully`)
            queryClient.invalidateQueries({
                queryKey: ['booking']
            })
        }


    })



    return { checkout, status }
}
