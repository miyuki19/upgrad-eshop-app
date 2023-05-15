import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import { InputBase } from '@material-ui/core'
import Search from '@material-ui/icons/Search'

export const CartIcon = styled(ShoppingCart)`
  color: white;
`
export const SearchIcon = styled(Search)`
  color: white;
`

export const Nav = styled.nav`
  background: #3f51b5;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 2560px) / 2);
  z-index: 10;
`
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

export const NavBars = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`

export const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
`

export const SearchBar = styled.div`
  position: relative;
  margin-left: 0;
`

export const SearchIconWrapper = styled.div`
  height: 100%;
  padding: 0 0.5rem;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const StyledInputBase = styled(InputBase)`
  background: transparent;
  width: 100%;
  padding: 0 2rem;
  border-radius: 3px;
`
