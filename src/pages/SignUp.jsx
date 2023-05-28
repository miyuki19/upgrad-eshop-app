import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'
import styled from 'styled-components'
import AuthIcon from '../assets/padlock.svg'

const SignUp = () => {
  const fNameRef = useRef()
  const lNameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()
  const contactNumberRef = useRef()

  const handleSubmit = (event) => {
    event.preventDefault()
  }
  return (
    <>
      <NavigationBar />
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className='brand'>
            <img src={AuthIcon} alt='Auth Icon' />
            <h2>Sign up</h2>
          </div>
          <input
            type='text'
            placeholder='First name *'
            name='firstName'
            ref={fNameRef}
          />
          <input
            type='text'
            placeholder='Last name *'
            name='lastName'
            ref={lNameRef}
          />
          <input
            type='email'
            placeholder='Email Address *'
            name='email'
            ref={emailRef}
          />
          <input
            type='password'
            placeholder='Password *'
            name='password'
            ref={passwordRef}
          />
          <input
            type='password'
            placeholder='Confirm Password *'
            name='confirmPassword'
            ref={confirmPasswordRef}
          />
          <input
            type='number'
            placeholder='Contact Number *'
            name='contactNumber'
            ref={contactNumberRef}
          />
          <button type='submit'>SIGN UP</button>
          <span>
            <Link to='/login'>Already have an account? Sign in</Link>
          </span>
        </form>
      </FormContainer>
    </>
  )
}

export default SignUp

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 1rem;
  align-items: center;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    flex-direction: column;
    img {
      height: 2rem;
    }
  }

  form {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      padding: 1rem;
      border: 0.1rem solid #464750;
      border-radius: 0.4rem;
      font-size: 1rem;
      width: 120%;
      &:focus {
        outline: none;
      }
      ::placeholder {
        color: white;
      }
    }

    button {
      background-color: #3f51b5;
      width: 135%;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: normal;
      cursor: pointer;
      font-size: medium;
      border-radius: 0.4rem;
      text-transform: uppercase;
      &:hover {
        background-color: #3b88f5;
      }
      transition: 0.3s ease-in-out;
    }
    span {
      text-transform: capitalize;
      font-weight: 500;
      a {
        display: flex;
        margin-right: 5px;
        color: #4f8afb;
        font-weight: normal;
        text-decoration: none;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
