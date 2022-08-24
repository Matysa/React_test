import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Vypočti si náklady svého</h5>
        <h1>3D tisku</h1>
        <h5 className="text-light">Jdeme na to...</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header