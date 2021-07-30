import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import AlbumStyles from "./styles/AlbumStyles";

function Albums(props) {
    return (
        <AlbumStyles>
            <span className="wrapper">
                <Link to="/album-details">
                    <figure>
                        <img alt={props.album.name} src={props.album.artworkUrl100} />
                    </figure>
                    <h2>{props.album.name}</h2>
                    <p>{props.album.artistName}</p>
                    <span className="click-trigger" data-artistname={props.album.artistName} data-albumname={props.album.name} data-albumcover={props.album.artworkUrl100} data-releasedate={props.album.releaseDate} data-albumurl={props.album.url} onClick={props.handleAlbumClick} />
                </Link>
            </span>
        </AlbumStyles>
    )
}

Albums.propTypes = {
    handleAlbumClick: PropTypes.func,
    album: PropTypes.shape({
        artistName: PropTypes.string,
        artworkUrl100: PropTypes.string,
        name: PropTypes.string,
        releaseDate: PropTypes.string,
        url: PropTypes.string
    })
}

export default Albums;