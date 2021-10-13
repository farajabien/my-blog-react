import Navbar from './components/Navbar'
import Home from './screens/Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateBlog from './screens/CreateBlog'
import BlogDetails from './screens/BlogDetails'
import Page404 from './screens/Page404'
import Footer from './components/Footer'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/create'>
							<CreateBlog />
						</Route>
						<Route path='/blogs/:id'>
							<BlogDetails />
						</Route>
						<Route path='*'>
							<Page404 />
						</Route>
					</Switch>
				</div>
				<Footer />
			</div>
		</Router>
	)
}

export default App
