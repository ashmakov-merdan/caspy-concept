import { navigation } from "../../static";
import NavItem from "./NavItem";

type NavListProps = {
    show: boolean,
    close: () => void
}

const NavList = ({show, close}: NavListProps) => {
    return (
        <ul className="nav-list" style={{right: show ? "0%" : "-200%"}}>
            {
                navigation.map((nav, i) => {
                    return <NavItem key={i} {...nav} close={close}/>
                })
            }
        </ul>
    )
};

export default NavList;