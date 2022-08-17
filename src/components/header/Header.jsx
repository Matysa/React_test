import React from 'react'
import './header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Ahoj, já jsem</h5>
        <h1>Někdo Něco</h1>
        <h5 className="text-light">A takto to je</h5>
        <CTA/>
      </div>
    </header>
  )
}

export default Header