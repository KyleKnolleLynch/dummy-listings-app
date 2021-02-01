import Head from 'next/head'

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
    </Head>
  )
}

Meta.defaultProps = {
  title: 'People Listings | Home',
  keywords: 'people listings, blog, listings',
  description: 'Dummy data for learning next js',
}

export default Meta
