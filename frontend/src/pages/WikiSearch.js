import { useCallback, useEffect, useMemo, useState } from "react";
import _ from "lodash";
import axios from 'axios';
import SearchForm from "../components/SearchForm";
import WikiList from "../components/WikiList";

function WikiSearch() {
    const [listData, setListData] = useState({isLoading: false, results: []})
    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const getData = useCallback(() => {
        setListData({isLoading: true});
        let searchterm = input;
        axios.get(`/wikisearch/${searchterm}`).then(response => setListData({
            isLoading: false,
            results: response.data.query.search
        }));
    }, [input]);

    const throttledGetData = useMemo(() => _.throttle(getData, 1000), [getData]);
 
    const handleKeyUp = (e) => {
        if (input.length > 1) {
            throttledGetData();
        } else {
            setListData({isLoading: false, results: []});
            return;
        }    
    };

    useEffect(() => {
        return () => {
            throttledGetData.cancel();
        }
    }, [throttledGetData]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <SearchForm input={input} handleInputChange={handleInputChange} handleKeyUp={handleKeyUp} />
            <WikiList listData={listData} />
        </div>
    )
}

export default WikiSearch;