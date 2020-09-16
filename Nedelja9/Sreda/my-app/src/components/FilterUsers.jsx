import React from 'react'

export const FilterUsers = ({filtered,show,setShow}) => {
    let tmp = [...show]

    return(
        <>
        {console.log(filtered)}
        {tmp
        .filter(el => el.first_name.toLowerCase().includes(filtered.toLowerCase())).map(el => {
            return(
                <>
                <p key={el.id}>{el.first_name} {el.last_name}</p>
                {console.log(el.id)}
                
                <button onClick={() => {
                    return(
                        <>
                        {tmp.splice(tmp.findIndex(element => element.id === el.id),1)}
                        {setShow(tmp)}
                        </>
                    )
                }}>X</button>
                </>
            )
        })
        }
        </>
    )
}