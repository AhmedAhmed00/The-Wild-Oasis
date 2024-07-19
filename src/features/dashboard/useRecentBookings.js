import { useQuery } from '@tanstack/react-query'
import { subDays } from 'date-fns'
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { getBookingsAfterDate } from '../../services/apiBookings'

export default function useRecentBookings() {
    const [searchParams] = useSearchParams()
    const numDays = !searchParams.get("last") ? "7" : Number(searchParams.get("last"))
    const queryDate = subDays(new Date(), numDays).toISOString();
    const { isLoading, data: bookings } = useQuery({
        queryKey: ['bookings', numDays],
        queryFn: () => getBookingsAfterDate(queryDate),
    })



    return { isLoading, bookings }
}
