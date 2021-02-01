import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1 className={homeStyles.title}>Homepage</h1>
      <p className={homeStyles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
        culpa?
      </p>
      <p className={homeStyles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
        culpa?
      </p>
      <Link href='/people'>
        <a className={homeStyles.btn}>See people listings</a>
      </Link>
    </div>
  )
}
