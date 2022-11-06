import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import styles from '../styles/Navbar.module.css';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    font-size:16px ;
    font-weight:700;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    align-items:center ;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
      font-size:16px;
    }
  }
`;

const RightNav = ({open, setOpen}) => {
    const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Ul open={open} onClick={() => setOpen(!open)}>
      <Link href={'/'}><li>Home</li></Link>
      <Link href={'/about_us'}><li>About Us</li></Link>
      <Link href={'/contact'}><li>Contact Us</li></Link>
      <Link href={'/login'}><li>Sign In</li></Link>
      <Link href="/cart">
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="20px" height="20px" />
              <div className={styles.counter}>{quantity}</div>
          </div>
         </div>
        </Link>
    </Ul>
  )
}

export default RightNav