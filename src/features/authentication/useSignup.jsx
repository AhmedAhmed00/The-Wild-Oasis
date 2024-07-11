import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { signUp as singupApi } from '../../services/apiAuth'

export default function useSignup() {
    const queryClient = useQueryClient()

    const navigate = useNavigate()

    const { mutate: signup, status } = useMutation({
        mutationFn: ({ fullName, email, password }) => singupApi({ fullName, email, password }),
        onSuccess: () => {
            toast.success("account successfully created")

        },
        onError: () => {
            toast.error("invalid data")
        },
    })

    return { signup, status }
}
