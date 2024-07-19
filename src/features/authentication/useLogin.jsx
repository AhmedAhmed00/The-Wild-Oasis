import { useMutation, useQueryClient } from '@tanstack/react-query'

import { login as loginApi } from '../../services/apiAuth'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

export default function useLogin() {
    const queryClient = useQueryClient()

    const navigate = useNavigate()

    const { mutate: login, status } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            navigate('/dashboard')

        },
        onError: (err) => {

            toast.error("incorrect email or pass")
        },
    })

    return { login, status }
}
