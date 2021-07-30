import PropTypes from 'prop-types';
import ListStyles from "./styles/ListStyles";

function WikiListItem(props) {
    return (
        <ListStyles>
            <h2>{props.result.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: props.result.snippet}}></p>
        </ListStyles>
    )
}

WikiListItem.propTypes = {
    result: PropTypes.shape({
        title: PropTypes.string,
        snippet: PropTypes.string
    })
}

export default WikiListItem;