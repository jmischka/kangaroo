import AlbumDetailsStyles from "./styles/AlbumDetailsStyles";

function AlbumDetails(props) {
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

export default AlbumDetails;