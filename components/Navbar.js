import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/images/logo.png' width={100} height={66} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/people'>
        <a>People Listings</a>
      </Link>
    </nav>
  )
}

export default Navbar
