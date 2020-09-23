import React from 'react';
import ReactDOM from 'react-dom';

// const Header = ({ ime,godine }) => {
//   // let ime = props.ime
 
//   return (
//     <header>
//       <h2>Hello {ime}</h2>
//     </header>
//   )
// }
// // JSX синтакса
// const App = () => {
//   let greet = 'Hello'
//   let a = 5
//   let b = 10

//   const veci = (a,b) => {
//     if(a > b)
//       return a
//     else return b
//   }

//   return (
//     <div>
//       <Header ime="Pera" godine="32" />
//       <Header ime="Zika" />
//       <Header ime="Ana" />
//       <p>{greet}</p>
//       <p>{a} + {b} = {a + b}</p>
//       <p>Већи од два броја је: 
//         {
//           veci(a,b)
//         }
//         </p>
//     </div>
//   )
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const App = () => {
  const pab = 'Jolly'
  const osoba1 = 'Пера'
  const alkohol1 = 5
  const osoba2 = 'Ана'
  const alkohol2 = 7
  const osoba3 = 'Жика'
  const alkohol3 = 13

  return (
    <div>
      <header>{pab}</header>
      <p>
        {osoba1} {alkohol1}
      </p>
      <p>
        {osoba2} {alkohol2}
      </p>
      <p>
        {osoba3} {alkohol3}
      </p>
      <p>Укупно пића: {alkohol1 + alkohol2 + alkohol3}</p>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)