import useUser from "../features/authentication/useUser"
import FullPageSpinner from "./FullPageSpinner"
import Spinner from "./Spinner"
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export default function ProtectedRoute({ children }) {
    const navigate = useNavigate()
    const { isLoading, isAuthenticated } = useUser()



    useEffect(function () { if (!isAuthenticated && !isLoading) navigate("/login") }
        , [isLoading, navigate, isAuthenticated])



    if (isLoading) {
        return <FullPageSpinner>
            <Spinner />
        </FullPageSpinner>
    }


    if (isAuthenticated) return children





}
