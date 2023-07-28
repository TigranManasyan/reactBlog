import { NavLink } from "react-router-dom";
import routes from "./routes";
import "./NavBar.css"; 
function NavBar() {
    return (
        <nav>
            <ul>
                {routes.map((route, index) => <li key={index}><NavLink to={route.path}>{route.name}</NavLink></li>)}
            </ul>
        </nav>
    );
}
export default NavBar;