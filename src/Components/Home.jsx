
import React from 'react'

import { useEffect, useState } from 'react'
import axios from 'axios'
import DataCard from './DataCard'


const Home = () => {
  const [data,setData] = useState([]);

 
   
   
 

 useEffect( ()=>{
     axios.get(`https://rickandmortyapi.com/api/character`)
     .then (Response => setData(Response.data.results) )
     .catch(err => console.log(err))
 },[] )
 console.log(data)

  return (
 <div>
  
    <DataCard data={data}/>

    </div>
  )
}

export default Home