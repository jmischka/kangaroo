import WikiListStyles from './styles/WikiListStyles';
import WikiListItem from './WikiListItem';

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