import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getBooking } from '../../services/apiBookings'
import { useParams } from 'react-router-dom'

export default function useBooking() {

    const { id } = useParams()
    console.log(id);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["booking", id],
        queryFn: () => getBooking(id)
    })
    return { data, isLoading, isError }
}
