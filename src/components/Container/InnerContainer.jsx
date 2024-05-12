import React from 'react'
import styles from '../Container/InnerContainer.module.css'

function InnerContainer({children}) {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default InnerContainer