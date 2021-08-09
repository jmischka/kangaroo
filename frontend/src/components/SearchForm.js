import PropTypes from 'prop-types';
import SearchFormStyles from "./styles/SearchFormStyles";

function SearchForm(props) {
    return (
        <SearchFormStyles>
            <h1>Search Wiki Term</h1>
            <div>
                <input type="text" name="search" id="search" value={props.input} onChange={props.handleInputChange} onKeyUp={props.handleKeyUp} />
            </div>
        </SearchFormStyles>
    )
}

SearchForm.propTypes = {
    handleInputChange: PropTypes.func,
    handleKeyUp: PropTypes.func,
    input: PropTypes.string
}

export default SearchForm