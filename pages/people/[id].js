export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const usersData = await res.json()

  const paths = usersData.map(user => {
    return {
      params: { id: user.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

const Details = () => {
  return (
    <div>
      <h1>Details Page</h1>
    </div>
  )
}

export default Details
