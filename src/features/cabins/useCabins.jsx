import { getCabins } from '../../services/apiCabins'
import { useQuery } from '@tanstack/react-query'

export default function useCabins() {

    const { data: cabins, isError, isLoading } = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabins
    })
    return { cabins, isError, isLoading }
}
