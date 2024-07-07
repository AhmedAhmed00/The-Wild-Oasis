import { useQuery } from '@tanstack/react-query'
import { getAllBookings } from '../../services/apiBookings'

export default function useBookings() {

    const { data: bookings, isError, isLoading } = useQuery({
        queryKey: ['bookings'],
        queryFn: getAllBookings
    })
    return { bookings, isError, isLoading }
}
