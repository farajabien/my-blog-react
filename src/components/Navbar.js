import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className='navbar'>
			<Link to='/'>
				<h1>Diego's Blog</h1>
			</Link>

			<div className='links'>
				<Link to='/'>Home</Link>
				<Link to='/create'>New Blog</Link>
			</div>
		</nav>
	)
}

export default Navbar
