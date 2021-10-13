import { Link } from 'react-router-dom'

function Page404() {
	return (
		<div className='page-not-found'>
			<h2>Sorry</h2>
			<p>That page cannot be found</p>
			<Link to='/'>Go back to the homepage...</Link>
		</div>
	)
}

export default Page404
