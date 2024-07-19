import { subDays } from 'date-fns';
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import { getStaysAfterDate } from '../../services/apiBookings';
import { useQuery } from '@tanstack/react-query';

export default function useRecentStays() {
    const [searchParams] = useSearchParams()
    const numDays = !searchParams.get("last") ? "7" : Number(searchParams.get("last"))
    const queryDate = subDays(new Date(), numDays).toISOString();

    const { isLoading, data: stays } = useQuery({
        queryKey: ['stays', `last-${numDays}`],
        queryFn: () => getStaysAfterDate(queryDate),
    })

    const confirmedStays = stays?.filter(stay => stay.status === 'checked-in' || 'checked-out')



    return { isLoading, stays, confirmedStays }

}
