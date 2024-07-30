import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SearchForm = () => {
   
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?q=${query}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="Search Products" onChange={(e) => setQuery(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    )
}

export default SearchForm; 