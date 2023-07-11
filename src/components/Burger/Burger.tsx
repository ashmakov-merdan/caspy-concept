import "./burger.scss";
import { useLocation } from "react-router-dom";

type BurgerProps = {
    show: boolean,
    toggle: () => void
}

const Burger = ({show, toggle}: BurgerProps) => {
    const location = useLocation();
    const path: boolean = location.pathname === "/" || location.pathname === "/about";

    return (
        <button className={show ? "burger active" : "burger"} onClick={toggle}>
            <span style={{backgroundColor: path ? '#FFFFFF' : "#184D47"}}></span>
            <span style={{backgroundColor: path ? '#FFFFFF' : "#184D47"}}></span>
            <span style={{backgroundColor: path ? '#FFFFFF' : "#184D47"}}></span>
        </button>
    )
};

export default Burger;