import { useContext } from "react";
import { DataContext } from "../store/GlobalState";
import Filter from "./Filter";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Notify from './Notify';

const Layout = ({ children }) => {
  const {state} = useContext(DataContext);
  return (
    <>
      {/* <Filter state = {state}/> */}
      <Navbar />
      <Notify />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
