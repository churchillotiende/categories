import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import styles from "../../styles/Admin.module.css";

const Customer = ({ orders, products }) => {
    const user = useAuthState(auth);

    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["preparing", "on the way", "delivered"];



  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Image</th>
              <th>Id</th>
              <th>Customer</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </tbody>
          {orderList.map((product) => (
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
                <td>{product.customer}</td>
                <td>${product.total}</td>
                <td>{status[product.status]}</td>
                {/* <td> */}
                  {/* <button className={styles.button}>Edit</button> */}
                  {/* <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button> */}
                {/* </td> */}
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      {/* <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Customer</th>
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
      </div> */}
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";

  if (myCookie.token !== process.env.NEXT_PUBLIC_TOKEN) {
    return {
      redirect: {
        destination: "/customer/login",
        permanent: false,
      },
    };
  }

  const productRes = await axios.get(`/api/products`);
  const orderRes = await axios.get(`/api/orders`);

  return {
    props: {
      orders: orderRes.data,
      products: productRes.data,
    },
  };
};

export default Customer;
