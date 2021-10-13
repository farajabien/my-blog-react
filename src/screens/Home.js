import BlogList from '../components/BlogList'
import useFetch from '../useFetch'

function Home() {
	const { data, loading, error } = useFetch('https://my-json-server.typicode.com/farajabien/fakeDB/blogs')

	return (
		<div className='home'>
			{error && <div>{error}</div>}
			{loading && <h1>Loading...</h1>}

			{data && <BlogList blogs={data} title='All Blogs' />}
		</div>
	)
}

export default Home
