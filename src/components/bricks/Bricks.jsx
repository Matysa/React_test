import React from 'react'
import {useState} from 'react'
import './bricks.css'

function Bricks() {
  
  return (
    <div className='wrap wrap__container'>
      <div className='wrap-side wrap__column_l'>
        <h3>Údaje o tiskárně</h3>
        <div className='input-item input__item1'>
          <h5>Cena tiskárny [Kc]</h5>
          <input type="text"></input>
        </div>
        <div className='input-item input__item2'>
          <h5>Návratnost [h]</h5>
          <input type="text"></input>
        </div>
        <div className='input-item input__item3'>
          <h5>Příkon tiskárny [kW]</h5>
          <input type="text"></input>
        </div>
      </div>
      <div className='wrap-side wrap__column_r'>
        <h3>Informace o tiskové struně</h3>
          <div className='input-item input__item1'>
            <h5>Cena tiskárny [Kc]</h5>
            <input type="text"></input>
          </div>
          <div className='input-item input__item2'>
            <h5>Návratnost [h]</h5>
            <input type="text"></input>
          </div>
          <div className='input-item input__item3'>
            <h5>Příkon tiskárny [kW]</h5>
            <input type="text"></input>
          </div>
      </div>
    </div>
  )
}

export default Bricks