import { useState } from "react";
const axios = require('axios');

function useForm(initialState = {}) {
    const [inputs, setInputs] = useState(initialState);
    const [listData, setListData] = useState({isLoading: false, results: []});

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setListData({isLoading: true});
        let searchterm = inputs.search;
        axios.get(`/wikisearch/${searchterm}`).then(response => {
            setListData({
                isLoading: false,
                results: response.data.query.search
            })
        })  
        setInputs(initialState);
    }

    return [ inputs, handleChange, handleSubmit, listData ];
}

export default useForm;