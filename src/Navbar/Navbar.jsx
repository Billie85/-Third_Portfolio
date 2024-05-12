import React from 'react'
import styles from './Navbar.module.css'

export default function Navbar () {
  return (
    <div>
      <ul className={styles.Navbar}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}
