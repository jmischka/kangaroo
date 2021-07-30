import SearchFormStyles from "./styles/SearchFormStyles";

function SearchForm(props) {
    return (
        <SearchFormStyles>
            <h1>Search Wiki Term</h1>
            <form onSubmit={props.handleSubmit}>
                <input type="text" name="search" id="search" value={props.inputs.search} onChange={props.handleChange} />
                <button type="submit">Submit</button>
            </form>
        </SearchFormStyles>
    )
}

export default SearchForm