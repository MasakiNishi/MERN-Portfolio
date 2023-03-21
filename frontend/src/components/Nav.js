import { Link } from 'react-router-dom';

function Nav() {
    return (
      <nav id="global-navigation">
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        {/* <Link to="/contact">Contact</Link> */}
        <Link to="/gallery">Gallery</Link>
        <Link to="/order">Order</Link>
        <Link to="/staff">Staff</Link>
        <Link to="/tasks">Tasks</Link>
      </nav>
    );
}

export default Nav;
