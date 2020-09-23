import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Statistics from './components/Statistics'
import Button from './components/Button'

// styledComponents | StoryBook for React

const App = () => {
    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const [niz,setNiz] = useState([])
// [1,4,9,16,25] // [1,4,9,16,25]
    let tmp = [...niz]

    setNiz(niz.map(el => el ** 2))


    return (
        <div>
            <h1>Додај оцену:</h1>
            <Button onClick={() => console.log('ИЗ АПЛИКАЦИЈЕ')} />
            <button onClick={() => setGood(good + 1)}>Позитивно</button>
            <button onClick={() => setNeutral(neutral + 1)}>Неутрално</button>
            <button onClick={() => setBad(bad + 1)}>Негативно</button>
            <h1>Статистика:</h1>

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
            />
        </div>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)




/////////////////////
// Алгоритам најкраћег пута
// A*
// Dijkstrin algoritam

// 1 0 -1 0 1 0
// 0 -1 1 0 1 -1
// 1 0 -1 0 1 0
// 0 1 1 0 1 1
// 1 0 1 0 1 0
// 0 0 1 0 1 0






// import React, { useState } from 'react'
// import ReactDOM from 'react-dom'

// const Statistic = ({text,value}) => {
//     return (
//         <tr>
//             <td>{text}</td>
//             <td>{value}</td>
//         </tr>
//     )
// }

// const Statistics = ({good,neutral,bad}) => {
//     // Only need these for statistics, so I don't include them in 
//     const total = good + neutral + bad
//     const average = (good - bad) / total
//     const positive = (good / total) * 100

//     if(!(good || bad || neutral)){ // (All values are zero - Check)
//         return (
//             <>
//             <p>Нема оцена</p>
//             </>
//         )
//     }
//     return (
//         <table>
//             <tbody>
//                 <Statistic text="Позитивно" value ={good} />
//                 <Statistic text="Неутрално" value = {neutral} />
//                 <Statistic text="Негативно" value = {bad} />
//                 <Statistic text="Укупно" value ={total} />
//                 <Statistic text="Просек" value ={average} />
//                 <Statistic text="Позитивно" value ={positive+'%'} />
//             </tbody>
//         </table>
//     )
// }

// const Button = ({handleClick,text}) => <button onClick={handleClick}>{text}</button>

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//         <h1>Додај оцену:</h1>
//         <Button handleClick={() => setGood(good + 1)} text='Позитивно' />
//         <Button handleClick={() => setNeutral(neutral + 1)} text='Неутраллно' />
//         <Button handleClick={() => setBad(bad + 1)} text='Негативно' />
//         <h1>Статистика:</h1>
//         <Statistics good={good} neutral={neutral} bad={bad} />
//     </div>
//   )
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )