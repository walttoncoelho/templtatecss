import React from 'react'
import { NAVBAR } from './Style'

export default function Navbar() {
  return (
    <>
    <NAVBAR>

      <div className='nav__container_logo'>
        <p>Logo</p>     
      </div>
      <div className='nav__container '>

      <ul className='menu__list'>
      <li><a href="home">HOME</a></li>
      <li><a href="sobre">SOBRE</a></li>
      <li><a href="servicos">SERVIÇOS</a></li>

      </ul>
      <div className='nav__container_social'>
        <p>
          Social Icons
        </p>

      </div>
      </div>

    </NAVBAR>
    </>
  )
}
