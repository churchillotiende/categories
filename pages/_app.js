import Layout from "../components/Layout";
import "../styles/globals.css";
// import 'bootstrap/js/dist/dropdown';
// import 'bootstrap/dist/css/bootstrap.css';
import store from "../redux/store";
import { Provider } from "react-redux";
import { Toaster } from 'react-hot-toast';
import { auth } from "../firebase";
import {useAuthState} from 'react-firebase-hooks/auth';
import Login from "./login";
import { DataProvider } from '../store/GlobalState'
import Head from "next/head";
import Signin from "./signin";

function MyApp({ Component, pageProps }) {
  <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous"></script>
  </Head>

  return (
    <DataProvider>
      <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </Provider>
    </DataProvider>
    
  );
}

export default MyApp;