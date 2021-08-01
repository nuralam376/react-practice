import Link from 'next/link'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
     
     <h1>Home</h1>
     <Link href = "/about">
       <a>About</a>
     </Link>
    </div>
  )
}
