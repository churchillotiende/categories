import Link from "next/link";
import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <Link href = '/categories'>
    <div className={styles.mainAddButton}>
      Add Category
    </div>
    </Link>
  );
};

export default AddButton;