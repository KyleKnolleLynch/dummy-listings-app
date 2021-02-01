import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Meta from '../components/Meta'

const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }, [])

  return (
    <div className='not-found'>
      <Meta title='People Listings | 404' />
      <h1>Ooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back{' '}
        <Link href='/'>
          <a>Home</a>
        </Link>
      </p>
    </div>
  )
}

export default NotFound
