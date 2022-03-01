
import "../scss/Main.scss";
import {Link, NavLink} from 'react-router-dom';

const TopNavBar = () => {
    return (
                <div className="nav-bar">
                    <div className="nav-links">
                   <ul>
                       <li>
                           <NavLink to="/home.html">Home</NavLink>
                           <NavLink to="/signup.html">Signup</NavLink>
                       </li>
                       
                   </ul>
                   </div>
                </div>
    );
}
export default TopNavBar;