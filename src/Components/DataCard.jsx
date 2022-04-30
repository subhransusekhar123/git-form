
import React,{useState} from 'react'
import Card  from  './Card'
import './DataCard.css'

const DataCard = ({data}) => {
  const [state,setState] = useState([]);

 
   


  return (
    <div className='dispaly-cards'>
        

      {data.map( (ele)=>{
        return (
          <Card ele={ele} state={state} setState={setState}/>
        )
      })}



    </div>
  )
}

export default DataCard;