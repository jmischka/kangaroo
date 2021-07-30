import { Link } from "react-router-dom";
import HeaderStyles from "./styles/HeaderStyles";

function Header() {
    const handleClick = (e) => {
        let activeLink = document.querySelector('.active-link');
        activeLink.classList.remove('active-link');
        e.target.classList.add('active-link');
    }
    
    return (
        <HeaderStyles>
            <nav>
                <ul>
                    <li>
                        <Link onClick={handleClick} to="/search">Search Wiki</Link>
                    </li>
                    <li>
                        <Link className="active-link" onClick={handleClick} to="/">Top Albums</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyles>
    )
}

export default Header;