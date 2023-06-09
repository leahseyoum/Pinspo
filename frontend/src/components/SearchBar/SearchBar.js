import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { useHistory} from "react-router-dom";
import { getSearchPins } from "../../store/pins";
import { RxMagnifyingGlass } from 'react-icons/rx';
import './SearchBar.css';
import { removePins } from "../../store/pins";

const SearchBar = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState('')
    const history = useHistory();
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(removePins());
        dispatch(getSearchPins(query))
            .catch(async (res) => {
                let data;
                try {
                    
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); 
                    if (data?.errors) setErrors(data.errors);
                    else if (data) setErrors([data]);
                    else setErrors([res.statusText]);
                }
            });
        return history.push(`/search/${query}`)
    }

   

    const update = (e) =>{
        e.preventDefault();
        setQuery(e.currentTarget.value)
    }

    return(
        <div className='search-bar'>
            <div className='search-bar-background'>
                <div className='magnifying-glass'><RxMagnifyingGlass id="mag-glass" size={20}/></div>
                <form className='search-input-box' onSubmit={handleSubmit}><input id='search-input' type="search" placeholder='Search' onChange={update} /></form>
            </div>
        </div>
   
    )
}

export default SearchBar