import { useEffect } from 'react';
import PropTypes from 'prop-types';
import TopAlbumsStyles from './styles/TopAlbumsStyles';
import Albums from '../components/Albums';

function TopAlbums(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
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

TopAlbums.propTypes = {
    albums: PropTypes.shape({
        isLoading: PropTypes.bool,
        data: PropTypes.array
    })
}

export default TopAlbums;