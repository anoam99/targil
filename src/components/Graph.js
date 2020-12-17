import React, {useState} from 'react'
import {ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Scatter, } from "recharts";


const Graph = ({data}) => {
    const [filterByArea, setFilterByArea] = useState(true)
    console.log(data.population)
    return (
        <div>
            <ScatterChart
                width={800}
                height={600}
                margin={{
                top: 20, right: 20, bottom: 20, left: 20,
                }}
            >
                <CartesianGrid />
                <XAxis 
                domain={[-180, 180]} 
                type="number"
                 dataKey="x" 
                 name='latitude' />

                <YAxis domain={[-180, 180]}
                 type="number"
                  dataKey="y"
                  name='longitude' />

                <ZAxis type="number"
                 dataKey="z"
                  range={filterByArea? [1, data.area/100]: [1,data.population/10000] }
                name={filterByArea? 'area': 'population'}/>

                <Scatter name="A school"
                data={[{'x': data.lat, 'y':data.lng, "z": filterByArea? data.area: data.population}]}
                fill="#8884d8" />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            </ScatterChart>
            <button onClick={()=>setFilterByArea(!filterByArea)}>Change Filter</button>
        </div>
    )
}

export default Graph
