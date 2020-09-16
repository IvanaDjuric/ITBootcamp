import React,{useEffect} from 'react'
import{getAll} from '../services'

export const Show = ({show,setShow}) => {
    useEffect(() => {
        getAll().then(res => {
            console.log(res.data.data)
            setShow(res.data.data)
        })
    },[])
    return(
        show.map(el => <p key={el.id}>{el.first_name} {el.last_name}</p>)
    )
}