import { useState } from 'react'
import styles from './App.module.css'
import {Link} from 'react-router-dom'

function App() {

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>React Learning Projects</h1>
      <p className={styles.paragraph}>A simple react website to store all my simple projects for learning purposes.</p>
      <ul className={styles.link_container}>
        <li><Link to={'./add-remove-cards'} className={styles.link}>Add Remove Cards</Link></li>
        <li><Link to={'./to-do-list'} className={styles.link}>To Do List</Link></li>
        <li><Link to={'./pikachu-api'} className={styles.link}>Pikachu Image Generator</Link></li>
        <li><Link to={'./login-form'} className={styles.link}>Login Form</Link></li>
      </ul>
    </div>
  )
}

export default App
