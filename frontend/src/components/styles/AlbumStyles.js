import styled from 'styled-components';

const AlbumStyles = styled.li`
    position: relative;
    margin: 0;
    width: 25%;
    height: auto;
    padding: 16px;

    @media screen and (max-width: 1050px) {
        width: 50%;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
    
    span.wrapper {
        position: relative;
        display: block;
        margin: 0;
        width: 100%;
        height: auto;
        padding: 16px;
        border: 1px dotted #666666;
        background-color: white;
        cursor: pointer;
        transition: .5s;
        &:hover {
            transform: translateY(-6px);
            box-shadow: 3px 3px 10px rgba(0,0,0,.2);
        }
    }

    span.click-trigger {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }

    figure {
        position: relative;
        margin: 0;
        width: 100%;
        height: auto;
        overflow: hidden;

        img {
            margin: 0;
            width: 100%;
            height: auto;
        }
    }

    h2 {
        margin: 16px 0 0;
        font-size: 2.3em;
        font-weight: 500;
        line-height: 1;
        color: black;
    }

    p {
        margin: 9px 0 0 !important;
        font-size: 2em !important;
        font-weight: 500 !important;
        line-height: 1;
        font-style: normal !important;
        color: #999999;
        text-align: left !important;
    }

    a {
        text-decoration: none;
    }
`

export default AlbumStyles;