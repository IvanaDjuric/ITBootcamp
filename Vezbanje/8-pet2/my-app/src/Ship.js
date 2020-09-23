import React from 'react'

const Ship = ({ship}) => {
    return (
        <div>
            <div>
                <a href={ship.url}>
                    <img style={{width:`300px`}} src = {ship.image} alt="" />
                </a>
            </div>
            <div>
                <p>
                    {ship.ship_name} {ship.ship_type}
                </p>
            </div>
        </div>
    )
}

export default Ship