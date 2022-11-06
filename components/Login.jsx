import React from 'react';
import GoogleOutlinedIcon from '@ant-design/icons/GoogleOutlined';
import FacebookOutlinedIcon from '@ant-design/icons/FacebookOutlined';
import styled from 'styled-components';
import {auth , provider , bookProvider} from '../firebase';

const Login = () => {

  const signIn = () => {
    auth.signInWithPopup(provider).catch(alert);
  }

  const bookSignIn = () => {
    auth.signInWithPopup(bookProvider).catch(alert);

  }

  return (
    <section>
        <center><h2>Chat With Me</h2></center>
        <Container>
          <LoginCard>
                <Img src = "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" alt='' /> 
              <GoogleButton onClick={signIn}><GoogleOutlinedIcon /> : Sign In With Google</GoogleButton>
              <FacebookButton onClick={bookSignIn}><FacebookOutlinedIcon />:Sign In With Facebook</FacebookButton>
            
          </LoginCard>
        </Container>
    </section>
    
  )
}

export default Login;

export const Img = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`

const Container = styled.div`
    height:100vh;
    display: grid;
    padding: 3rem;
    place-items: center;
    column-gap: 2rem;
    row-gap: 3rem;
  @media ${props => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

const LoginCard = styled.div`
  display:flex ;
  flex-direction:column;
  @media ${props => props.theme.breakpoints.sm} {
    place-items:center;
    @media ${props => props.theme.breakpoints.lg} {
    display: flex;
    flex-direction: column;
  }
  @media ${props => props.theme.breakpoints.md} {
    display: flex;
    flex-direction: column;
  }
  }
`;
const FacebookButton  = styled.button`
  background-color: #3b5998;
  cursor: pointer;
  margin-top:15px;
  color: white;
  padding: 12px;
  border-radius: 8px;
  display: inline-block;
` ;


const GoogleButton  = styled.button`
  margin:0;
  background-color: #4285f4;
  color: white;
  cursor: pointer;
  color: white;
  padding: 12px;
  border-radius: 8px;
  display: inline-block;
`;
