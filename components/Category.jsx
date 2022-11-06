import Image from "next/image";
// import styles from "../styles/Category.module.css";
import Link from "next/link";

const Category = ({ pizza }) => {
  return (
    <div>
      <Link href={`/product/${pizza.category}`}>
          <div className={'styles.product_card'}>
            Category
            {pizza.category}
          </div>
      </Link>
    </div>
  );
};

export default Category;
