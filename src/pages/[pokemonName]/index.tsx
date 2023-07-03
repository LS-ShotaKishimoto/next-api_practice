import React from 'react'
import styles from './Detail.module.css'
import axios from 'axios'

const index = ({results}) => {
  return (
    <div className={styles.content}>
      <div className={styles.inner}>
          <button className={styles.backButton}>Back</button>
          <div className={styles.box}>
            <img className={styles.image} src="./sample.jpg" />
            <p className={styles.text}>
              <span>Name: charizard</span>
              <span>Type: fire / flying</span>
            </p>
          </div>
      </div>
    </div>
  )
}

export default index