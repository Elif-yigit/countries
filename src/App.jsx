import { useState } from 'react'
import  data  from './assets/data/data.jsx';
import './App.css'



function Countries() {

  
  return (
    <>
   <div className='container'> {

    data.map((countries) => (
      
      <div key={countries.name.common}>
     <img src={countries.flags.svg} alt={countries.name.common}/>
     <p>{countries.name.common}</p>
     </div>
    ) )
     
    }
   
   
   </div>
    </>
   
  );
 
}

export default Countries
