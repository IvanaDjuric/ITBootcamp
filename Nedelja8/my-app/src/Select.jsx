import React from 'react'
import {useState,useEffect} from 'react'

const Select = ({setYear}) => {
    const [options,setOptions] = useState([])

    useEffect(() => {
        let yearOption = []
        for (let i = 2006; i < 2021; i++) {
            if(i === 2011) {
                continue
            }
           yearOption.push(i)     
        }
        setOptions(yearOption)
    }, [])

    const selectClick = (e) => {
        setYear(e.target.value)
    }

    return (
        <select className='form-control' onChange={selectClick}>
            <option>Years</option>
            {options.map((el) => (
                <option key={el} value={el}>
                    {el}
                </option>
            ))}
        </select>
    )
}

export default Select