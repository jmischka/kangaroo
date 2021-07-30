import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const AlbumDetailsStyles = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px auto;
    width: 100%; 
    max-width: 1000px;
    height: auto;
    padding: 150px 25px 75px;
    animation: 1s ${fadeIn} ease-out;

    figure {
        position: relative;
        margin: 0;
        width: 40%;
        height: auto;

        @media screen and (max-width: 1000px) {
            width: 45%;
        }

        @media screen and (max-width: 800px) {
            width: 100%;
        }
    }

    img {
        position: relative;
        margin: 0;
        width: 100%;
        height: auto;
    }

    div {
        position: relative;
        margin: 0;
        width: 40%;
        height: auto;
        padding: 0 50px;

        @media screen and (max-width: 1000px) {
            width: 45%;
        }

        @media screen and (max-width: 800px) {
            width: 100%;
            padding: 50px 0;
        }
    }

    h1 {
        margin: 0;
        font-size: 4em;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -1px;
        color: #333333;
    }

    h2, p {
        margin: 50px 0 0;
        font-size: 3.5em;
        font-weight: 400;
        line-height: 1;
        color: #333333;

        @media screen and (max-width: 460px) {
            font-size: 2.5em;
        }
    }

    a {
        display: block;
        margin: 50px 0 0;
        padding: 25px;
        color: #333333;
        background-color: #D9D9D9;
        font-size: 3em;
        font-weight: 400;
        width: 300px;
        text-decoration: none;
        text-align: center;
        border-radius: 16px;
        transition-duration: .3s;
        &:hover {
            background-color: #0FB6FF;
            color: white;
        }

        @media screen and (max-width: 460px) {
            font-size: 2.5em;
        }
    }
`

export default AlbumDetailsStyles;