import styled from 'styled-components';
import WikiListItem from './WikiListItem';

const WikiListStyles = styled.div`
    position: relative;
    margin: 0 auto 100px;
    width: 100%;
    max-width: 1200px;
    height: auto;

    p {
        margin: 0;
        width: 100%;
        font-size: 1.6em;
        font-weight: 400;
        line-height: 1.3;
    }

    ul {
        margin: 0;
        width: 100%;
        height: auto;
        list-style-type: none;
        padding: 0;
    }
`

function WikiList(props) {
    if (!props.listData.isLoading && props.listData.results.length < 1) {
        return (
            <WikiListStyles>
                <p>Add a search term and we will look it up</p>
            </WikiListStyles>
        )
    }
    
    return (
        <WikiListStyles>
            { props.listData.isLoading 
            ? <p>Data is loading</p>
            : <ul>
                {props.listData.results.map((result,indx) => <WikiListItem key={indx} result={result} />)}
            </ul>
            }
        </WikiListStyles>
    )
}

export default WikiList;