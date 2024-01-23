import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Navbar(){
    return(
        <nav className="navbar">
            <h1>Ashley G. Photography</h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;