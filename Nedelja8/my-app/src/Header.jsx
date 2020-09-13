import React, { useEffect, useState } from 'react'
import {getCompInfo} from './services'

const Header = () => {
    const [compName,setCompName] = useState('')
    const [founder,setFounder] = useState('')
    const [address,setAddress] = useState('')
    
    useEffect(() => {
        getCompInfo().then(res => {
            setCompName(res.data.name)
        })
    })

    useEffect(() => {
        getCompInfo().then(res => {
            setFounder(res.data.founder)
        })
    })

    useEffect(() => {
        getCompInfo().then(res => {
            setAddress(res.data.headquarters.address)
        })
    })


    return (
        <div style={{marginBottom: `15px`}}>
        <h1 style={{fontSize:`20px`, display:`inline`, marginRight: `30px`}}>{`Company name: ${compName}`}</h1>
      
        <h1 style={{fontSize:`20px`, display:`inline`, marginRight: `30px`}}>{`Company founder: ${founder}`}</h1>
  
        <h1 style={{fontSize:`20px`, display:`inline`}}>{`Company address: ${address}`}</h1>
        </div>
    )
    
}

export default Header

