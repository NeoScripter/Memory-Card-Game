import React from 'react'
import logo from './logo.png'
import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.gridContainer}>
        <img src={logo} alt="Pikachu"/>
        <div className={styles.titleWrapper}>
            <h1>Memory Card Game</h1>
            <p>Get points by clicking on an image but don't click on any more than once!</p>
            <div className={styles.score}>
                <div>Score: 0</div>
                <div>Best Score: 0</div>
            </div>
        </div>
    </div>
  )
}

export default Header