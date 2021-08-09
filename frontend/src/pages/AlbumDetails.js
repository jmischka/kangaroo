import { useEffect } from 'react';
import PropTypes from 'prop-types';
import AlbumDetailsStyles from "./styles/AlbumDetailsStyles";

function AlbumDetails(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <AlbumDetailsStyles>
            <figure>
                <img src={props.detail.albumCover} alt={props.detail.albumName} />
            </figure>
            <div>
                <h1>{props.detail.artistName}</h1>
                <h2>{props.detail.albumName}</h2>
                <p>Release Date: {props.detail.releaseDate}</p>
                <a target="_blank" rel="noreferrer" href={props.detail.albumUrl}>More Info</a>
            </div>
        </AlbumDetailsStyles>
    )
}

AlbumDetails.propTypes = {
    detail: PropTypes.shape({
        albumCover: PropTypes.string,
        albumName: PropTypes.string,
        albumUrl: PropTypes.string,
        artistName: PropTypes.string,
        releaseDate: PropTypes.string
    })
}

export default AlbumDetails;