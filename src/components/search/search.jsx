import React from 'react';

const Search = ({value, change, placeholder}) => {

    return(
        <input type='text' value={value} onChange={change} placeholder={placeholder}  />
    )

}
export default Search;