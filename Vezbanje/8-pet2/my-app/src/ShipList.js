import React from 'react'
import Ship from './Ship'

const ShipList = ({arr}) => {
return <div>{arr.map((ship) => <Ship key={ship.valuation} ship={ship} />)}</div>
}

export default ShipList