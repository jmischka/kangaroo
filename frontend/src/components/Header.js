import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderStyles = styled.header`
    position: fixed;
    margin: 0;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    background-color: white;
    padding: 0 25px;
    background-color: rgba(255,255,255,.9);
    z-index: 10;

    nav {
        margin: 0 auto;
        width: 100%;
        max-width: 1200px;
        height: auto;
        padding: 35px 0 25px;
        border-bottom: 1px solid black;
    }

    ul {
        margin: 0;
        display: flex;
        flex-direction: row;
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0;
        padding: 0;
        &:first-child {
            margin-right: 25px;
        }

        a {
            display: block;
            margin: 0;
            text-decoration: none;
            font-size: 3.5em;
            line-height: 1;
            font-weight: 700;
            color: #999999;
            &:hover {
                color: #0FB6FF;
            }
        }

        a.active-link {
            color: #333333;
        }
    }
`

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