import React, { useState } from 'react'
import {
  CartIcon,
  Nav,
  NavLink,
  NavMenu,
  NavBars,
  SearchBar,
  SearchIconWrapper,
  StyledInputBase,
  SearchIcon,
} from './NavigationBarStyle'

const NavigationBar = () => {
  const { isLogin, setIsLogin } = useState(false)
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <CartIcon />
          <span>upGrad E-Shop</span>
        </NavLink>
        {isLogin ? <NavBars>Search Box</NavBars> : null}
        <NavBars>
          <SearchBar>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' />
          </SearchBar>
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
