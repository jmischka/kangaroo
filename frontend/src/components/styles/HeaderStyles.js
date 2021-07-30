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

            @media screen and (max-width: 600px) {
                font-size: 2.5em;
            }
        }

        a.active-link {
            color: #333333;
        }
    }
`

export default HeaderStyles;