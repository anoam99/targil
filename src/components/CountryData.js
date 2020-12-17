import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import Graph from './Graph'

const CountryData = () => {
    const {country}  = useParams();
    const [countryParams, setCountryParams] = useState([])

     useEffect(()=>{
        axios({
            url: 'https://graphql.country/graphql',
            method: 'post',
            data: {
              query: `
              {
                countries(name_Icontains: "${country}") {
                  edges {
                    node {
                      name
                      latLng
                      area
                      population
                      capital
                    }
                  }
                }
              }              
                `
            }
          }).then((result) => {
            setCountryParams({
                "name": result.data.data.countries.edges[0].node.name,
                "lat": result.data.data.countries.edges[0].node.latLng[0],
                "lng": result.data.data.countries.edges[0].node.latLng[1],
                "area": result.data.data.countries.edges[0].node.area,
                "population": result.data.data.countries.edges[0].node.population,
                "capital": result.data.data.countries.edges[0].node.capital
            })
          })
    },[country])


    return (
        <div>
            <Link to={"/"}>
                <button>back</button>
            </Link>
            <h1>{country}</h1>
            <Graph data={countryParams}/>
        </div>
    )
}

export default CountryData
