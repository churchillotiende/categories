import React from 'react';
import GoogleOutlinedIcon from '@ant-design/icons/GoogleOutlined';
import FacebookOutlinedIcon from '@ant-design/icons/FacebookOutlined';
import styled from 'styled-components';
import {auth , provider , bookProvider} from '../firebase';
import { useRouter } from 'next/router';

const Login = (props) => {

    const router = useRouter();
    
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert).then(() =>{
            router.push('/')
        })
    }

    const bookSignIn = () => {
        auth.signInWithPopup(bookProvider).catch(alert);

    }

  return (
    <section id='chat'>
        <center><h2>Sign In</h2></center>
        <grid>
        <Container>
          <LoginCard>
            <Img src = "https://www.freeiconspng.com/thumbs/login-icon/user-login-icon-14.png" alt='' /> 
            <GoogleButton onClick={signIn}><GoogleOutlinedIcon /> : Sign In With Google</GoogleButton>
            <FacebookButton onClick={bookSignIn}><FacebookOutlinedIcon />:Sign In With Facebook</FacebookButton>
          </LoginCard>
        </Container>
        </grid>
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
    height:80vh;
    display: grid;
    padding: 3rem;
    place-items: center;
    column-gap: 2rem;
    row-gap: 3rem;
  
`

const LoginCard = styled.div`
  display:flex ;
  flex-direction:column;
  
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