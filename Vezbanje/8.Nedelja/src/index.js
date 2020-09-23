import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const App = ({citati}) => {
    
//     return(
//         <>
//         <h1>Render kolekcije</h1>
//        {citati.map(citat => <p key = {citat}>{citat}</p>)}
//        </>
//     )
// }

// const citati = [
//     'I\'m not dumb. I just have a command of thoroughly useless information.',
//     'Чудно је како је мало потребно да будемо срећни, и још чудније: како нам често баш то мало недостаје!',
//     'Што не боли – то није живот, што не пролази – то није срећа',
//     'Звезданог неба и људског срца никад се човек неће моћи нагледати',
//     'Be yourself; everyone else is already taken.',
//     'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
//     'If you tell the truth, you don\'t have to remember anything.',
//     'Insanity is doing the same thing, over and over again, but expecting different results.',
//     'A day without sunshine is like, you know, night.'
//   ]
  
const Todo = ({task,done}) => {
    return (
        <>
        <p>{task},uradjeno:{done}</p>
        </>
    )
}

const App = ({lista}) => {
    
    return(
        <>
        <input />
        <h1>Ispis:</h1>
        {lista.map(el => <Todo key ={el.id} task={el.task} done={el.done + ''}/>)}
        {/*? 'Izvrseno' : 'Nije izvrseno'*/}
        </>
    )
}

const lista = [
    {
        id: 1,
        task: 'Uradi nesto',
        done: true
    },
    {
        id: 2,
        task: 'Uradi nesto',
        done: false
    },
    {
        id: 3,
        task: 'Uradi nesto',
        done: true
    },
]

ReactDOM.render(
    <React.StrictMode>
      <App lista={lista}/>
    </React.StrictMode>,
    document.getElementById('root')
  )