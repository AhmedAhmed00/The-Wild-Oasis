import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { logout as logoutApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'

export default function useLogout() {

    const queryClient = useQueryClient()
    const navigate = useNavigate()

    const { mutate: logout, status } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries()
            navigate('/login')

        }
    })
    return { logout, status }
}
