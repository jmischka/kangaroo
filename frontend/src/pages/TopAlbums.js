import TopAlbumsStyles from './styles/TopAlbumsStyles';
import Albums from '../components/Albums';

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