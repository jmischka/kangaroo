import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const TopAlbumsStyles = styled.div`
    position: relative;
    margin: 50px auto;
    width: 100%; 
    max-width: 1250px;
    height: auto;
    padding: 100px 0 75px;

    ul {
        position: relative;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 1fr;
        grid-gap: 25px;
        margin: 25px 0 0;
        width: 100%;
        padding: 0 25px;
        list-style-type: none;
        animation: 1s ${fadeIn} ease-out;
    }

    h1 {
        margin: 0;
        width: 100%;
        height: auto;
        font-size: 5em;
        line-height: 1;
        font-weight: 700;
        padding: 0 25px;
        color: #333333;
        letter-spacing: -1.5px;

        @media screen and (max-width: 600px) {
            font-size: 3.5em;
            letter-spacing: 0px;
        }
    }

    p {
        margin: 50px 0 0;
        width: 100%;
        height: auto;
        font-size: 1.6em;
        line-height: 1.1;
        font-weight: 400;
        font-style: italic;
        text-align: center;
        color: #999999; 
    }
`

export default TopAlbumsStyles;