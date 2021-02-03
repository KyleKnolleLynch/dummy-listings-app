import Meta from '../../components/Meta'
import Link from 'next/link'
import peopleStyles from '../../styles/People.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await res.json()
  
  return {
    props: {
      users: usersData,
    },
  }
}


const People = ({ users }) => {
  return (
    <div>
      <Meta title='People Listings | Listings' />
      <h1>All People</h1>
      {users.map(user => (
        <Link key={user.id} href={`/people/${user.id}`}>
          <a className={peopleStyles.single}>
            <h2>{user.name}</h2>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default People
