import React from 'react'

const Emoji = ({url}) => {
    return(
        <img src={url} alt=''/>
    )
}

const Description = ({text}) => {
    return(
        <p>{text}</p>
    )
}

const Card =({url, text}) =>{
    return(
        <>
            <Emoji url = {url}/>
            <Description text = {text}/>
        </>
    )
}

export default Card