import { useQuery } from "@tanstack/react-query"
import { getLoggedInUser } from "../../services/apiAuth"

export default function useUser() {
    const { isLoading, isError, data: user } = useQuery({
        queryKey: ['user'],
        queryFn: getLoggedInUser
    })

    return { isLoading, isError, isAuthenticated: user?.role === 'authenticated' }
}
