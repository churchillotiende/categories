//  import Image from "next/image";
// //  import styles from "../styles/Navbar.module.css";
//  import { useSelechrefr } from "react-redux";
//  import Link from "next/link";
//  import { useRef } from "react";
//  import { FaBars, FaDivide, FaTimes } from "react-icons/fa";

// //  const Navbar = () => {
// //    const quantity = useSelechrefr((state) => state.cart.quantity);
// //    const [isMobile, setIsMobile] = useState(false);

// //    const navRef = useRef();

// // 	 const showNavbar = () => {
// // 		 navRef.current.classList.hrefggle("responsive_nav");
// // 	 };
// //    return (
// //      <div className={styles.container}>
// //        <div className={styles.item}>
// //          <div className={styles.callButhrefn}>
// //            {/* <img src="/img/whatsapp.jpg" alt="" width='100px' height = '100px'/> */}
// //            254 743 749 054
// //          </div>
// //        </div>
// //        <div className={styles.item}>
// //          <ul ref={navRef} className={styles.list}>
// //            <Link href="/">
// //              <li className={styles.listItem}>Home</li>
// //            </Link>
// //            <Link href="/about_us">
// //              <li className={styles.listItem}>About Us</li>
// //            </Link>
// //            <Link href="/shop">
// //              <li className={styles.listItem}>Shop</li>
// //            </Link>
// //            <li className={styles.listItem}>Blog</li>
// //            <Link href="/contact">
// //              <li className={styles.listItem}>Contact Us</li>
// //            </Link>
// //          </ul>
// //        </div>
// //        <Link href="/cart">
// //          <div className={styles.item}>
// //            <div className={styles.cart}>
// //              <img src="/img/cart.png" alt="" width="20px" height="20px" style = {{cursor:'pointer'}} />
// //              <div className={styles.counter}>{quantity}</div>
// //            </div>
// //          </div>
// //        </Link>
// //        {/* <buthrefn className={styles.menu_item_bar}>
// //             {isMobile ? <i className="fas fa-items"></i>:<i className="fas fa-bars"></i>}
// //        </buthrefn> */}
// //      </div>
// //    );
// //  };

// //  export default Navbar;


//  import React, { useState } from "react";
// import  styles from '../styles/nav-bar.module.css';

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className='navbar'>
//         <div className='nav_container'>
//           <div className="nav-logo">
//             CodeBucks
//             <i className="fas fa-code"></i>
//           </div>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <Link
//                 href="/item"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 href="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 href="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 href="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </Link>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             <i className={click ? <FaBars /> : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import {useAuthState} from 'react-firebase-hooks/auth';

import {auth} from '../firebase';

const Nav = styled.nav`
  background-color:#d1411e;
  box-sizing: border-box;
  height: 70px;
  padding:0 20px;
  display: flex;
  justify-content: space-around;
  color: #fefe;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  width:100% ;
  top: 0;
  z-index: 999;
  .logo{
    padding: 15px 0;
    flex:1 ;
  }
`

const Navbar = () => {

  const [open, setOpen] = useState(false)
  const quantity = useSelector((state) => state.cart.quantity);
  const [user] = useAuthState(auth);

  return (
    <div>
    <Nav>
      <Link href={'/'}>
        <div className='logo'  style = {{cursor:'pointer'}}>
            Uchoice 
        </div>
      </Link>
      <div>
      <ul className="navbar-nav mb-3">
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </div>
          <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            {/* <Link href = '/admin'><li><a className="dropdown-item" href="#">Admin</a></li></Link> */}
             <Link href = '/register'><li><a className="dropdown-item" href="#">Sign Up</a></li></Link>
            <Link href = '/signin'><li><a className="dropdown-item" href="#">Sign In</a></li></Link>
            <Link href = '/profile'><li><a className="dropdown-item" href="#">Profile</a></li></Link>
            <Link href = '/shop'><li><a className="dropdown-item" href="#">Shop</a></li></Link>
          </ul>
        </li>
      </ul>
    </div>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Ul open={open} onClick={() => setOpen(!open)}>
      <Link href={'/'}><li>Home</li></Link>
      <Link href={'/about_us'}><li>About Us</li></Link>
      <Link href={'/contact'}><li>Contact Us</li></Link>
      <Link href={'/admin'}><li>Admin</li></Link>
      <Link href="/cart">
          <div className={styles.item}>
            <div className={styles.cart}>
              <Image src="/img/cart.png" alt="" width="20px" height="20px" />
              <div className={styles.counter}>{quantity}</div>
          </div>
         </div>
        </Link>
    </Ul>
    </Nav>
    </div>
  )
}

export default Navbar;

// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';
// import RightNav from './RightNav';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} setOpen = {setOpen}/>
    </>
  )
}


// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';
// import { useSelector } from 'react-redux';
// import styled from 'styled-components';
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