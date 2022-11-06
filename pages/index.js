// import axios from "axios";
// import Head from "next/head";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import firebase from "firebase";

// import Add from "../components/Add";
// import AddButton from "../components/AddButton";
// import Featured from "../components/Featured";
// import products from "../components/products";
// import { auth, db } from "../firebase";
// import styles from "../styles/Home.module.css";
// import Login from "./login";
// import Filter from "../components/Filter";
// import { useContext } from "react";
// import { DataContext } from "../store/GlobalState";
// import { useRouter } from "next/router";
// import { getProduct } from "../util/fetchData";
// import PizzarCard from "../components/PizzaCard";

// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

// export default function Home(props) {

//   // const [user] = useAuthState(auth);

//   const{state , dispatch} = useContext(DataContext);
//   const [products, setProducts] = useState(props.products)

//   const {auth} = state;

//   // useEffect(() => {
//   // 	if(user){
//   // 		db.collection('users').doc(user.uid).set({
//   // 			email:user.email,
//   // 			lastSeen:firebase.firestore.FieldValue.serverTimestamp(),
//   // 			photoURL:user.photoURL,
//   // 		}  ,{merge:true}
//   // 		);
//   // 	}

//   // }  ,[user])

//   const [close, setClose] = useState(true);

//   // const [products, setProducts] = useState(props.products)

//   const [isCheck, setIsCheck] = useState(false)
//   const [page, setPage] = useState(1)
//   const router = useRouter()

//   // const {state, dispatch} = useContext(DataContext)
//   // const {auth} = state

//   // useEffect(() => {
//   //   setProducts(props.products)
//   // },[props.products])

//   useEffect(() => {
//     if(Object.keys(router.query).length === 0) setPage(1)
//   },[router.query])

//   useEffect(() => {
//     setProducts(props.products)
//   },[props.products])

//   const handleCheck = (id) => {
//     products.forEach(product => {
//       if(product._id === id) product.checked = !product.checked
//     })
//     setProducts([...products])
//   }

//   const handleCheckALL = () => {
//     products.forEach(product => product.checked = !isCheck)
//     setProducts([...products])
//     setIsCheck(!isCheck)
//   }

//   const handleDeleteAll = () => {
//     let deleteArr = [];
//     products.forEach(product => {
//       if(product.checked){
//           deleteArr.push({
//             data: '', 
//             id: product._id, 
//             title: 'Delete all selected products?', 
//             type: 'DELETE_PRODUCT'
//           })
//       }
//     })

//     dispatch({type: 'ADD_MODAL', payload: deleteArr})
//   }

//   const handleLoadmore = () => {
//     setPage(page + 1)
//     filterSearch({router, page: page + 1})
//   }

//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>uchoice apparels</title>
//         <meta name="description" content="Best pizza shop in town" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <Featured />
//      <AddButton setClose={setClose} />
//       <Filter state = {state}/>
//       {/* <products> */}
//         {
//           products.map(product => (
//             <PizzarCard key = {product._id} product = {product} />
//           ))
//         }
//       {/* </products> */}
//       {
//        props.result < page * 6 ? ""
//         : <button className="btn btn-outline-info d-block mx-auto mb-4"
//         onClick={handleLoadmore}>
//           Load more
//         </button>
//       }
      
//       {!close && <Add setClose={setClose} />}
//       {/* {!user ? <Login /> : "Lading"} */}

//     </div>
//   );
// }

// export const getServerSideProps = async (query) => {
//   // const myCookie = ctx.req?.cookies || "";
//   // let admin = false;

//   // if (myCookie.token === process.env.NEXT_PUBLIC_TOKEN) {
//   //   admin = true;
//   // }

//   const page = query.page || 1
//   const category = query.category || 'all'
//   const sort = query.sort || ''
//   const search = query.search || 'all'

//   const res = await getProduct(`/products?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`);
//   return {
//     props: {
//       products: res.data,
//       result: res.result
//     },
//   };
// };
import Head from "next/head";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";
import prodcont from "../styles/PizzaList.module.css";
import Filter from "../components/Filter";
import { DataContext } from "../store/GlobalState";
import { useRouter } from "next/router";
import { useState, useContext, useEffect } from 'react'

import { getData } from '../util/fetchData'
import PizzaCard from "../components/PizzaCard";
import filterSearch from '../util/filterSearch';

const Home = (props) => {
  const [products, setProducts] = useState(props.products)

  const [isCheck, setIsCheck] = useState(false)
  const [page, setPage] = useState(1)
  const router = useRouter()

  const {state, dispatch} = useContext(DataContext)
  const {auth} = state

  useEffect(() => {
    setProducts(props.products)
  },[props.products])

  useEffect(() => {
    if(Object.keys(router.query).length === 0) setPage(1)
  },[router.query])

  const handleCheck = (id) => {
    products.forEach(product => {
      if(product._id === id) product.checked = !product.checked
    })
    setProducts([...products])
  }

  const handleCheckALL = () => {
    products.forEach(product => product.checked = !isCheck)
    setProducts([...products])
    setIsCheck(!isCheck)
  }

  const handleDeleteAll = () => {
    let deleteArr = [];
    products.forEach(product => {
      if(product.checked){
          deleteArr.push({
            data: '', 
            id: product._id, 
            title: 'Delete all selected products?', 
            type: 'DELETE_PRODUCT'
          })
      }
    })

    dispatch({type: 'ADD_MODAL', payload: deleteArr})
  }

  const handleLoadmore = () => {
    setPage(page + 1)
    filterSearch({router, page: page + 1})
  }

  return(
    <>
    
    <div className={styles.container}>
       <Head>
         <title>uchoice apparels</title>
         <meta name="description" content="Best clothes shop in town" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
       <Featured />
      {/* <AddButton setClose={setClose} /> */}
      <Filter state={state}/>
       </div>

      {/* {
        auth.user && auth.user.role === 'admin' &&
        <div className="delete_all btn btn-danger mt-2" style={{marginBottom: '-10px'}}>
          <input type="checkbox" checked={isCheck} onChange={handleCheckALL}
          style={{width: '25px', height: '25px', transform: 'translateY(8px)'}} />

          <button className="btn btn-danger ml-2"
          data-toggle="modal" data-target="#exampleModal"
          onClick={handleDeleteAll}>
            DELETE ALL
          </button>
        </div>
      } */}

      <div className={prodcont.container}>
      <h1 className={prodcont.title}>Popular Products</h1>
        <div className="maylike-products-wrapper">
          <div className="marquee">
            <div className="maylike-products-container track">
            </div>
          </div>
          <div className={prodcont.wrapper}>
            {
            products.length === 0 ? <h2>No products</h2> :
            products.map(product => (
              <PizzaCard key={product._id} product={product}/>
            ))}
          </div>
      </div>   
      
      {
        props.result < page * 6 ? ""
        : <button className="btn btn-outline-info d-block mx-auto mb-4"
        onClick={handleLoadmore}>
          Load more
        </button>
      }
    
    </div>
    </>
  )
}


export async function getServerSideProps({query}) {
  const page = query.page || 1
  const category = query.category || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'

  const res = await getData(
    `products?limit=${page * 6}&category=${category}&sort=${sort}&title=${search}`
  )
  // server side rendering
  return {
    props: {
      products: res.products,
      result: res.result
    }, // will be passed to the page component as props
  }
}

export default Home