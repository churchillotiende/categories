import React from 'react';

import styles from  '../styles/About.module.css';

const About = (props) => {
  return (
    <>
        <div className={styles.Section}>
            <div>
                <div className={styles.section_a}>Uchoice<br />Apparels Store <br /> Clothes make the man.</div>
                <div className={styles.hero_button}>
                    Get the best of products <br />at discounted prices
                </div>
            </div>
            <div className = {styles.section_b}>
            <img src = 'img/11.webp' className={styles.about_image}  alt=''/>
            </div>
        </div>
        <div className ={styles.section_c}>
            <div>
                Express is a flexible and clean Node.js web application 
                framework that provides a robust set of features to 
                develop web and mobile applications. It facilitates the 
                rapid development of Node based web applications.
                In MERN stack, Express will be used as backend API 
                server which interacts with mongoDB database to 
                serve data to client (React) application.
                Express helps build the backend very easily while 
                staying in JavaScript ecosystem. It is preferred for
            </div>
            <div>
                Express is a flexible and clean Node.js web application 
                framework that provides a robust set of features to 
                develop web and mobile applications. It facilitates the 
                rapid development of Node based web applications.
                In MERN stack, Express will be used as backend API 
                server which interacts with mongoDB database to 
                serve data to client (React) application.
                Express helps build the backend very easily while 
                staying in JavaScript ecosystem. It is preferred for
            </div>


        </div>
    </>
  )
}

export default About;
