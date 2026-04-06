import "./App.css";
import { Link } from "react-router-dom";

function MyNav() {
    return (
        <nav>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Products">Products</Link></li>
                <li><Link to="/MyForm">MyForm</Link></li>
            </ul>
        </nav>
    );
}

export default MyNav;