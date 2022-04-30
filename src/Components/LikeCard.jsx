import React,{useEffect,useState} from 'react'
import Like from './Like'

const LikeCard = () => {
  const [list,setList] = useState([])
 
  let Data =  JSON.parse(localStorage.getItem('sendData'))

  //delete Handler
  const deleteHandler=(param)=>{
    console.log('hii')
    Data.splice(param,1)
    localStorage.setItem('sendData',JSON.stringify(Data))
    alert(`unlike${Data[param].name}`)
   };

   useEffect(()=>{
     setList(Data)

   },[list])

  

  return (
    <div className='dispaly-cards'>
      {
        Data.map((ele,index)=>{
          
          return (
            <div>
            <Like deleteHandler={deleteHandler} ele={ele} index={index}/>
            </div>
            )
        })

      }
    </div>
  )
}

export default LikeCard ;