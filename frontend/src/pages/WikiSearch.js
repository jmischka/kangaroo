import SearchForm from "../components/SearchForm";
import WikiList from "../components/WikiList";
import useForm from '../utils/useForm';

function WikiSearch() {
    const [inputs, handleChange, handleSubmit, listData] = useForm({search: ''})
    return (
        <div>
            <SearchForm inputs={inputs} handleChange={handleChange} handleSubmit={handleSubmit} listData={listData} />
            <WikiList listData={listData} />
        </div>
    )
}

export default WikiSearch;