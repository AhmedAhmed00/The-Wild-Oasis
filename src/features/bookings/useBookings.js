import { useQuery } from '@tanstack/react-query'
import { getAllBookings } from '../../services/apiBookings'
import { useSearchParams } from 'react-router-dom'

export default function useBookings() {
    const [searchParams] = useSearchParams()
    const filterQeury = searchParams.get("status")
    const filter = !filterQeury || filterQeury === 'all' ? null : {
        field: "status",
        value: filterQeury,

    }
    const sortQuery = searchParams.get("sortBy") || "date-desc"
    const [field, direction] = sortQuery.split('-')
    const sortBy = { field, direction }



    const { data: bookings, isError, isLoading } = useQuery({
        queryKey: ['bookings', filter, sortBy],
        queryFn: () => getAllBookings({ filter, sortBy })
    })
    return { bookings, isError, isLoading }
}
