import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../useFetch'
import { useHistory } from 'react-router-dom'

function BlogDetails() {
	const { id } = useParams()
	const {
		data: blog,
		loading,
		error,
	} = useFetch(
		`https://my-json-server.typicode.com/farajabien/fakeDB/blogs/${id}`
	)
	const history = useHistory()

	const handleClick = () => {
		fetch(
			`https://my-json-server.typicode.com/farajabien/fakeDB/blogs/${blog.id}`,
			{
				method: 'DELETE',
			}
		).then(() => {
			history.push('/')
		})
	}

	return (
		<div className='blog-details'>
			{error && <div>{error}</div>}
			{loading && <h1>Loading...</h1>}
			{blog && (
				<article>
					<h2>{blog.title}</h2>
					<p>Written by {blog.author}</p>
					<div>{blog.content}</div>
					<button onClick={handleClick}>delete</button>
				</article>
			)}
		</div>
	)
}

export default BlogDetails
