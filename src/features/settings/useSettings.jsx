import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getSettings } from '../../services/apiSettings'

export default function useSettings() {
    const { data, isError, isLoading } = useQuery({
        queryKey: ['settings'],
        queryFn: getSettings,
    })
    return { data, isError, isLoading }
}
