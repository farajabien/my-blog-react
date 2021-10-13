import { useState } from 'react'

import { Link } from 'react-router-dom'

function BlogList({ blogs, title }) {
	const [searchTerm, setSearchTerm] = useState('')

	return (
		<div className='blog-list'>
			<input
				type='text'
				placeholder='Search Blog'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<h2>{title}</h2>
			{blogs
				.filter((blog) =>
					searchTerm === ''
						? blog
						: blog.title.toLowerCase().includes(searchTerm.toLowerCase())
				)
				.map((blog) => (
					<div className='blog-preview' key={blog.id}>
						<h2>{blog.title}</h2>
						<p>
							Written by{' '}
							<span style={{ fontWeight: 'bold' }}>{blog.author}</span>
						</p>
						<p>
							{blog.content.substring(0, 120)}...{' '}
							<span>
								<Link to={`/blogs/${blog.id}`} style={{ color: '#f1356d' }}>
									Read More
								</Link>
							</span>
						</p>
					</div>
				))}
		</div>
	)
}

export default BlogList
