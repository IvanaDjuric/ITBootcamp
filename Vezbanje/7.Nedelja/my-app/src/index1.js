import React from 'react'
import ReactDOM from 'react-dom'
const Header = ({pab}) => {  
  return (
    <h1>{pab}</h1>
  )
}
const Osoba = ({ime,pice}) => {
  return (
    <p>{ime} {pice}</p>
  )
}
const Content = ({o1,o2,o3,a1,a2,a3}) => {
  return (
    <>
      <Osoba ime={o1} pice={a1}/>
      <Osoba ime={o2} pice={a2}/>
      <Osoba ime={o3} pice={a3}/>
    </>
  )
}
const Ukupno = ({ kolicina }) => {
  return (
    <p>Укупно пића: {kolicina}</p>
  )
}
const App = () => {
  const pab = {
    ime: 'Jolly',
    osobe: [
      {
        ime: 'Пера',
        alkohol: 5
      },
      {
        ime: 'Ана',
        alkohol: 7
      },
      {
        ime: 'Жика',
        alkohol: 13
      }
    ]
  }  
  let ukupno = pab.osobe[0].alkohol + pab.osobe[1].alkohol + pab.osobe[2].alkohol  
  return (
    <div>
      <Header pab={pab.ime} />
      <Content 
        o1={pab.osobe[0].ime} a1={pab.osobe[0].alkohol}
        o2={pab.osobe[1].ime} a2={pab.osobe[1].alkohol}
        o3={pab.osobe[2].ime} a3={pab.osobe[2].alkohol}
      />
      <Ukupno kolicina={ukupno} />
    </div>
  )
}
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)