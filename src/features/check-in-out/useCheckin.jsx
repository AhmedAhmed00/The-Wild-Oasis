import { useMutation, useQueryClient } from '@tanstack/react-query'
import { updateBooking } from '../../services/apiBookings'
import toast from 'react-hot-toast'

export default function useCheckin() {


    const queryClient = useQueryClient()

    const { mutate: checkin, status } = useMutation({
        mutationFn: ({ id, breakFast }) => updateBooking(id, {
            status: "checked-in",
            isPaid: true,
            ...breakFast
        }),
        onSuccess: (data) => {
            toast.success(`booking #${data.id} Checked in successfully`)
            queryClient.invalidateQueries({
                queryKey: ['booking']
            })
        }


    })



    return { checkin, status }
}
