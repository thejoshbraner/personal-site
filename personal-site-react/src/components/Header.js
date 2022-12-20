import { useState } from "react";
import {
    Nav,
    Navbar,
    NavItem,
    Collapse,
    NavbarToggler,
    NavbarBrand,
} from "reactstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color="black" className="py-0" expand="md">
            <NavbarBrand>
                <h2 className="stylized-text ms-2">jb</h2>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className="ms-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/placeholder">
                            Placeholder
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;
