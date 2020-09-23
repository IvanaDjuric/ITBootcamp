import React from 'react'

const Citat = ({text,citat,citati,ratings}) => {
    return (
        <>
            <h1>{text}</h1>
            <p>{citati[citat]}</p>
            <p>Ima: {ratings[citat]} votes</p>
        </>
    )
}

export default Citat