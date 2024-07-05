import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updateSetting } from '../../services/apiSettings'
import toast from 'react-hot-toast'

export default function useUpdateSettings() {
    const queryClient = useQueryClient()
    const { data, mutate: mutateSettings, status, isLoading } = useMutation({
        mutationFn: updateSetting,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["settings"]
            })
            toast.success("Updated")
        },
        onError: () => {
            toast.error("Cannot update")
        }
    })

    return { mutateSettings, status, data, isLoading }
}
