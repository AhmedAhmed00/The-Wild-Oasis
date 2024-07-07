import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getAllBookings } from '../../services/apiBookings'
import { useSearchParams } from 'react-router-dom'

export default function useBookings() {
    const queryClient = useQueryClient()

    const [searchParams] = useSearchParams()
    const filterQeury = searchParams.get("status")
    const filter = !filterQeury || filterQeury === 'all' ? null : {
        field: "status",
        value: filterQeury,
    }



    const sortQuery = searchParams.get("sortBy") || "startDate-desc"
    const [field, direction] = sortQuery.split('-')
    const sortBy = { field, direction }


    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"))

    const { data: { data: bookings, count } = {}, isError, isLoading } = useQuery({
        queryKey: ['bookings', filter, sortBy, page],
        queryFn: () => getAllBookings({ filter, sortBy, page })
    })


    //prefetching
    queryClient.prefetchQuery({
        queryKey: ['bookings', filter, sortBy, page + 1],
        queryFn: () => getAllBookings({ filter, sortBy, page: page + 1 })

    })









    return { bookings, isError, isLoading, count }
}
