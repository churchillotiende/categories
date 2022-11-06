import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import Link from "next/link";

const PizzaCard = ({ product }) => {
  return (
    <div>
      <Link href={`/product/${product._id}`}>
          <div className={styles.product_card}>
            <img src={product.img} alt="" width="250" height="250" className={styles.product_image} />
            <p className={styles.product_name}>{product.title}</p>
            <p className={styles.product_price}>${product.prices[0]}</p>
          </div>
      </Link>
    </div>
  );
};

export default PizzaCard;
