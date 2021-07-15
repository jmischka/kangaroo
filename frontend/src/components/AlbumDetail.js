import styled from 'styled-components';

const AlbumDetailStyles = styled.div`
    position: fixed;
    left: 0;
    top: 100%;
    width: 100%;
    height: 100vh;
    background-color: #333333;
    z-index: 100;
    transition: .5s;
    transition-timing-function: ease-in;
    &.triggered {
        top: 0;

        div.window {
            opacity: 1;
        }
    }

    button {
        display: block;
        position: absolute;
        top: 35px;
        right: 35px;
        width: 50px;
        height: 50px;
        outline: none;
        background: #333333;
        border: 1px dotted white;
        border-radius: 100%;
        cursor: pointer;
        transition-duration: .35s;
        &:hover {
            background: white;
            span {
                background-color: #333333;
            }
        }

        span {
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 60%;
            height: 3px;
            border-radius: 3px;
            background-color: white;
            &:nth-child(1) {
                transform: translate(-50%, -50%) rotate(45deg);
            }
            &:nth-child(2) {
                transform: translate(-50%, -50%) rotate(-45deg);
            }
        }
    }

    div.window {
        position: absolute;
        width: calc((100% / 12) * 10);
        max-width: 1200px;
        height: 90vh;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 2s;
        opacity: 0;
    }

    ul {
        margin: 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        height: auto;
        padding: 0;
        list-style-type: none;
    }

    li {
        margin: 0;
        padding: 50px;
        width: 40%;
        height: auto;

        h2 {
            margin: 0;
            font-size: 6em;
            font-weight: 700;
            line-height: 1;
            color: white;
        }

        p {
            margin: 25px 0 0;
            font-size: 3em;
            font-weight: 400;
            line-height: 1.3;
            color: white;
        }

        a {
            display: block;
            margin: 35px 0 0;
            width: 175px;
            font-size: 3em;
            font-weight: 400;
            line-height: 1.3;
            padding: 16px;
            background-color: white;
            border-radius: 16px;
            color: #333333;
            transition: .35s;
            text-align: center;
            text-decoration: none;
            &:hover {
                background-color: #0FB6FF;
                color: white;
            }
        }
    }

    figure, img {
        margin: 0;
        width: 100%;
        height: auto;
    }
`

function AlbumDetail(props) {
    return (
        <AlbumDetailStyles className={!props.triggered ? null : 'triggered'}>
            <div className="window">
                <ul>
                    <li>
                        <figure>
                            <img src={props.detail.albumCover} alt={props.detail.albumName} />
                        </figure>
                    </li>
                    <li>
                        <h2>{props.detail.artistName}</h2>
                        <p>{props.detail.albumName}</p>
                        <p>{props.detail.releaseDate}</p>
                        <a target="_blank" rel="noreferrer" href={props.detail.albumUrl}>More Info</a>
                    </li>
                </ul>
            </div>
            <button onClick={props.handleButtonClick}>
                <span />
                <span />
            </button>
        </AlbumDetailStyles>
    )
}

export default AlbumDetail;