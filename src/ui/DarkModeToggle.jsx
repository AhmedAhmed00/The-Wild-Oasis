import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/ModeContext";

export default function DarkModeToggle() {
    const { isDark, toggleDarkMode } = useDarkMode()
    return (
        <ButtonIcon onClick={toggleDarkMode}>
            {isDark ? <HiOutlineSun /> : <HiOutlineMoon />}
        </ButtonIcon>
    )
}
