import React from 'react'
import './portfolio.css'

function Portfolio() {
  return (
    <div>
       <div className='container input__container'>
          <h5>Délka stěny</h5>
          <input type={"value"} className="inputs"></input>
        </div> 
        <div className='container input__container'>
          <h5>Výška stěny</h5>
          <input type={"text"} className="inputs"></input>
        </div>
    </div>
   
      
    
    
  )
}

export default Portfolio