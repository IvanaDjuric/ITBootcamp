import React, {useEffect,useState} from 'react'
import {getInfo} from './services'

const Header = () => {
    const [name,setName] = useState('')
    const [founder,setFounder] = useState('')
    const [founded,setFounded] = useState('')

    useEffect(() => {
        getInfo().then((res) => {
            setName(res.data.name)
        })
    })
    useEffect(() => {
        getInfo().then((res) => {
            setFounder(res.data.founder)
        })
    })
    useEffect(() => {
        getInfo().then((res) => {
            setFounded(res.data.founded)
        })
    })
    return (
        <div>
            <p>{`Company name: ${name}`}</p>
            <p>{`Founder: ${founder}`}</p>
            <p>{`Founded: ${founded}`}</p>
        </div>
    )
}

export default Header