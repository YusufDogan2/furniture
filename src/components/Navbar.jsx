import { Link } from 'react-router-dom';

// styles
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <Link to="/" >Home</Link>
            <Link to="/create" >Add a Product</Link>
            <Link to="/large" >Big Stuff</Link>
            <Link to="/medium" >Not so big Stuff</Link>
            <Link to="/small" >Small Stuff</Link>
        </nav>
    );
};

export default Navbar;