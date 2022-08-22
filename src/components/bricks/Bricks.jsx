import React from 'react'
import {useState} from 'react'
import './bricks.css'

function Bricks() {
  const [wall_lenght, setWall_lenght] = useState('');
  const [wall_height, setWall_height] = useState('');
  const [brick_lenght, setBrick_lenght] = useState('');
  const [brick_height, setBrick_height] = useState('');

  function Brick_number(wall_lenght,brick_lenght,wall_height,brick_height){
    var brick_l = brick_lenght;
    var brick_h = brick_height;
    var wall_l = wall_lenght;
    var wall_h = wall_height;
    var brick_number = wall_l / brick_l * wall_h / brick_h;
    return parseInt(brick_number)
  } 
  return (
    <div className='wrap__container'>
      <form className='wrap__form'>
       <div className='container input__container'>
          <label>Délka stěny [mm]</label>
          <input type={"number"} className="inputs" onChange={(e) => setWall_lenght(e.target.value)}></input>
        </div> 
        <div className='container input__container'>
          <label>Výška stěny [mm]</label>
          <input type={"number"} className="inputs" onChange={(e) => setWall_height(e.target.value)}></input>
        </div>
        <div className='container input__container'>
          <label>Délka cihli [mm]</label>
          <input type={"number"} className="inputs" onChange={(e) => setBrick_lenght(e.target.value)}></input>
        </div> 
        <div className='container input__container'>
          <label>Výška cihli [mm]</label>
          <input type={"number"} className="inputs" onChange={(e) => setBrick_height(e.target.value)}></input>
        </div>
      </form>
      <div className='wrap__result'>
        <p>Ty Laďo, budeme potřebovat {Brick_number(wall_lenght,brick_lenght,wall_height,brick_height)} cihel</p>
      </div>  
    </div>
   
      
    
    
  )
}

export default Bricks