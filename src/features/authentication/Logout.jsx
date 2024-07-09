
import { HiArrowLeftOnRectangle } from 'react-icons/hi2';
import ButtonIcon from './../../ui/ButtonIcon';
import useLogout from './useLogout';
export default function Logout() {

    const { logout, status } = useLogout()

    return (
        <ButtonIcon onClick={logout} disabled={status === 'pending'}>

            <HiArrowLeftOnRectangle />
        </ButtonIcon>
    )
}
