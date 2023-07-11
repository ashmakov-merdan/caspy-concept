import { NavLink } from "react-router-dom";

type NavProps = {
    title: string,
    path: string,
    close: () => void
};

const NavItem = ({title, path, close}: NavProps) => {
    return (
        <li className="nav-item">
            <NavLink to={path} className="nav-link" onClick={() => close()}>{title}</NavLink>
        </li>
    )
};

export default NavItem;