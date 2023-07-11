import "./burger.scss";

type BurgerProps = {
    show: boolean,
    toggle: () => void
}

const Burger = ({show, toggle}: BurgerProps) => {
    return (
        <button className={show ? "burger active" : "burger"} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
};

export default Burger;