import React from 'react'
import {FilterUsers} from './FilterUsers'

const Delete = () => {
    return(
        <button>Delete</button>
    )
}

export const Search = ({filtered,setFiltered,show,setShow}) => {
    return(
        <>
        <input onChange ={(e)=> {
            return(
                <>
        {setFiltered(e.target.value)}
        {Delete()}
                </>
            )
        }
    }
    placeholder="Search users"></input>
    <FilterUsers filtered={filtered} show={show} setShow={setShow}/>
    </>
    )
}

