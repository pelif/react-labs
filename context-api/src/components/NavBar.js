import "./NavBar.css";
import { Link, NavLink }  from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/products">Products</NavLink>
        </nav>
    );
};

export default NavBar