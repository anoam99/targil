import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'

const Countrypicker = ({handleCountryChange}) => {
    const [countriesNames, setCountriesNames ] = useState([])
    const [curContry, setCurCountry] = useState('Israel')

    useEffect(()=>{
        axios({
            url: 'https://graphql.country/graphql',
            method: 'post',
            data: {
              query: `
              {
                countries {
                  edges {
                    node {
                      name
                    }
                  }
                }
              }
                `
            }
          }).then((result) => {
            setCountriesNames(result.data.data.countries.edges)
          })
    },[])


    return (
        <div>
             <select onChange={(e)=>setCurCountry(e.target.value)}>
                {countriesNames.map(item =>{
                return(
                <option key={item.node.name}>{item.node.name}</option>
                )
                })}
            </select>
            <Link to={`/${curContry}`}>
                <button>submit</button>
            </Link>

            
        </div>
    )
}

export default Countrypicker
