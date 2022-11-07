import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        {/* <Image src="/img/20.jpg" objectFit="cover" layout="fill" alt="" /> */}
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.motto}>
            Uchoice Apparels
          </h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Quick Links</h1>
          {/* <Link href = '/'> */}
            <p className={styles.text}>
            Home
          </p>
          {/* </Link> */}
           {/* <Link href = '/about_us'> */}
          <p className={styles.text}>
            About
          </p>
          {/* </Link> */}
          {/* <Link href= '/contact'> */}
          <p className={styles.text}>
          Contact
          </p>
          {/* </Link> */}
          {/* <Link href = '/signin'> */}
          <p className={styles.text}>
            Login
          </p>
          {/* </Link> */}
        </div>
        <div className={styles.card}>
          <h3 className={styles.title}>Working Hours</h3>
          <p className={styles.text}>
            Monday - Friday
            <br /> 8:00 AM – 5:00 PM
          </p>
          <p className={styles.text}>
            Saturday-Sunday
            <br /> 8:00 – 4:00 PM
          </p>
        </div>
        <p className={styles.copy}>uchoice apparels | All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
