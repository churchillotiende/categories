import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Add from "../../components/Add";
import AddButton from "../../components/AddButton";
import AddCategory from "../../components/AddCategory";
import styles from "../../styles/Admin.module.css";

const Index = ({ orders, products }) => {
  const [pizzaList, setPizzaList] = useState(products);
  const [orderList, setOrderList] = useState(orders);
  const status = ["preparing", "on the way", "delivered"];
  const [close , setClose] = useState(true);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/` + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = async (id) => {
    console.log(id);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/` + id
      );
      setPizzaList(pizzaList.filter((pizza) => pizza._id === id));
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/` + id, {
        status: currentStatus + 1,
      });
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]);
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        {<AddButton setClose={setClose} />}

      {!close && <Add setClose={setClose} />}

      <AddCategory />
        {/* <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {pizzaList.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTitle}>
                <td>
                  <img
                    src={product.img}
                    width={50}
                    height={50}
                    style = {{objectFit:"cover"}}
                    alt=""
                  />
                </td>
                <td>{product._id.slice(0, 5)}...</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  {/* <button className={styles.button}>Edit</button> */}
                   {/* <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))} */}
        {/* </table>   */}
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orderList.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTitle}>
                <td>{order._id.slice(0, 5)}...</td>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.NEXT_PUBLIC_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  // const productRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  const orderRes = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders`);

  return {
    props: {
      orders: orderRes.data,
      // products: productRes.data,
    },
  };
};

export default Index;
