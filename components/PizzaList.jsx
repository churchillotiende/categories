import styled from 'styled-components';
import styles from "../styles/PizzaList.module.css";
import Filter from './Filter';
import PizzaCard from './PizzaCard';

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Products</h1>
        <div className="maylike-products-wrapper">
          <div className="marquee">
            <div className="maylike-products-container track">
            </div>
          </div>
          <div className={styles.wrapper}>
          </div>
          {/* <div className={styles.wrapper}>
            {pizzaList.map(pizza => (
              <PizzaCard key={pizza._id} pizza={pizza}/>
            ))}
          </div> */}
      </div>   
    </div>
  );
};

export default PizzaList;

const WorkCarousel = styled.div`
`
