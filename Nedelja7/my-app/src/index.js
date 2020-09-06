import React from 'react'
import ReactDOM from 'react-dom'

import Card from './components/Card'


const Form = ({string}) => {
    return(
        <>
            <input type='text' />
            <button>{string}</button>
        </>
    )
}



const App = () => {
    let string = 'neki text'
    let url = 'https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/smiling-face.png'
    let text = 'smile'
    return (
        <>
           <Form string={string} /> 
           <Card url = {url} text={text}/>
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)