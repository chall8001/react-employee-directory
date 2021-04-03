import React from 'react'

export default function Searchbar({handleSearchChange}) {

    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <form className="form-inline">
                <input type="search" className="form-control" placeholder="search" onChange={(e) => handleSearchChange(e)}/>
                </form>
                
        </nav>
    )
}
