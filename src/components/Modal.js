import React from 'react'
import styles from '../css/modal..module.css'
const Modal = ({children}) => {
  return (
    <div className={styles.modal}>
        {children}

    </div>
  )
}

export default Modal
