import { Link } from "react-router-dom";
import { Logo } from "../../assets/icons";
import NavList from "./NavList";
import { Burger } from "../../components";
import "./navbar.scss";
import useToggle from "../../hooks/useToggle";

const Navbar = () => {
    const { show, toggle } = useToggle();
    
    const closeNavbar = () => {
        toggle();
    }

    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={"/"}>
                    <Logo />
                </Link>
                <Burger show={show} toggle={toggle}/>
                <NavList show={show} close={closeNavbar} />
            </div>
        </nav>
    )
};

export default Navbar;