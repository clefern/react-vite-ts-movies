import { HTMLAttributes } from 'react'
import styles from '../Header.module.css'

const HeaderList = ({children}: HTMLAttributes<HTMLUListElement>) => {
  return (
    <ul className={styles.cabecalho}>{children}</ul>
  )
}

export default HeaderList