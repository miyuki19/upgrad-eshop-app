import React from 'react'
import ShoppingCart from '@material-ui/icons/ShoppingCart'
import styled from 'styled-components'

const NavigationBar = () => {
  return (
    <div>
      <Container>
        <Icon />
        <span>upGrad E-Shop</span>
      </Container>
    </div>
  )
}

export default NavigationBar

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 3rem;
  background-color: #3f51b5;
  width: 100vw;
  height: 4vh;
  span {
    color: white;
  }
`

const Icon = styled(ShoppingCart)`
  color: white;
`
