import React from 'react'
import logo from './logo.png'
import styles from './Header.module.css'

function Header({ currentScore, bestScore }) {
  return (
    <div className={styles.gridContainer}>
        <img src={logo} alt="Pikachu"/>
        <div className={styles.titleWrapper}>
            <h1>Memory Card Game</h1>
            <p>Try to select every Pokemon without repeating your choice!</p>
            <div className={styles.score}>
                <div>Score: {currentScore}</div>
                <div>Best Score: {bestScore}</div>
            </div>
        </div>
    </div>
  )
}

export default Header