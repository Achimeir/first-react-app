import React from 'react'

function SearchBox(func)
{
    return(
        <div className='pa2'>
            <input 
            className='tc pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='search robots'
            onChange={func.searchChange}
            />
        </div>
    );
}

export default SearchBox;