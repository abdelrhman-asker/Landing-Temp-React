import React, {useState, useEffect} from 'react'

import { ClimbingBoxLoader } from 'react-spinners';
import App from './App';


const Spinner = () => {
  const [loading , setLoading] = useState(false);

    useEffect(() =>{
        setLoading(true)
        setTimeout(() =>{
            setLoading(false)

        } , 3000)

    },[])
  return (
    <>
    <div className='SpinnerMainDiv'>
    { loading ? (<ClimbingBoxLoader style={{display:"flex", justifyContent:"center", alignItems:"center"} } color="#A52A2A"   size={22}  loading={loading}/>) : ( <App />)
}    
    </div> 
    </>
  )
}

export default Spinner