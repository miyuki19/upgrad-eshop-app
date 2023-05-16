import React from 'react'
import { CartIcon, Nav, NavLink, NavMenu, NavBars } from './NavigationBarStyle'
import SearchBar from './SearchBar'

const NavigationBar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <CartIcon />
          <span>upGrad E-Shop</span>
        </NavLink>
        <NavBars>
          <SearchBar />
        </NavBars>
        <NavMenu>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
        </NavMenu>
      </Nav>
    </>
  )
}

export default NavigationBar
