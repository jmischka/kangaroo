import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const SearchFormStyles = styled.div`
    position: relative;
    margin: 50px auto 0;
    width: 100%; 
    max-width: 1232px;
    height: auto;
    padding: 100px 25px 40px;
    animation: 1s ${fadeIn} ease-out;

    h1 {
        margin: 0;
        font-size: 3em;
        font-weight: 400;
        line-height: 1;
        color: #333333;
    }

    form {
        margin: 16px 0 0;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
    }

    input {
        margin: 0;
        width: calc(100% - 150px);
        font-size: 1.8em;
        font-weight: 400;
        line-height: 1;
        color: #333333;
        border: 1px solid #666666;
        border-radius: 12px;
        padding: 12px;
    }

    button {
        display: block;
        margin: 0;
        padding: 12px; 
        width: 100px;
        font-size: 1.8em;
        font-weight: 400;
        line-height: 1;
        cursor: pointer;
        border-radius: 9px;
        outline: none;
        border: none;
        background-color: #1a73e8;
        color: white;
        &:hover {
            background-color: #0FB6FF;
        }
    }
`

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