import styled, { keyframes } from 'styled-components';
import Albums from '../components/Albums';

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
    max-width: 1232px;
    height: auto;
    padding: 100px 0 75px;

    ul {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 25px 0 0;
        width: 100%;
        padding: 0;
        list-style-type: none;
        animation: 1s ${fadeIn} ease-out;
    }

    h1 {
        margin: 0;
        width: 100%;
        height: auto;
        font-size: 5em;
        line-height: 1.3;
        font-weight: 700;
        padding: 0 25px;
        color: #333333;
        letter-spacing: -1.5px;
    }

    p {
        margin: 50px 0 0;
        width: 100%;
        height: auto;
        font-size: 1.6em;
        line-height: 1.3;
        font-weight: 400;
        font-style: italic;
        text-align: center;
        color: #999999; 
    }
`

function TopAlbums(props) {
    return (
        <TopAlbumsStyles>
            <h1>Top New Releases</h1>
            { props.albums.isLoading
            ? <p>Data is loading</p>
            : <ul>
                {props.albums.data.map((album,indx) => <Albums key={indx} album={album} handleAlbumClick={props.handleAlbumClick} />)}
            </ul>
            }
        </TopAlbumsStyles>
    )
}

export default TopAlbums;