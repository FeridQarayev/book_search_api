import React, { Fragment } from "react";
import styles from "./style.module.css";

function Home() {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <h1 className={styles.title}>Dada Book Searching App</h1>
          <div className={styles.search}>
            <form>
              <input type="text" placeholder="Find book" />
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                className="sc-dJjYzT kBkKjn"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
              </svg>
            </form>
          </div>
        </div>
      </div>
      
    </Fragment>
  );
}

export default Home;
