import { useState } from 'react'
import { useHistory } from 'react-router-dom'

function CreateBlog() {
	const [title, setTitle] = useState('')
	const [content, setContent] = useState('')
	const [author, setAuthor] = useState('Diego')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	const handleSubmit = (e) => {
		e.preventDefault()
		const blog = { title, content, author }

		setLoading(true)

		fetch('https://my-json-server.typicode.com/farajabien/fakeDB/blogs', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog),
		}).then(() => {
			setLoading(false)

			//redirect to homepage
			history.push('/')
		})
	}

	return (
		<div className='create'>
			<h2>Add A New Blog</h2>
			<form onSubmit={handleSubmit}>
				<label>Blog Title: </label>
				<input
					type='text'
					required
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>
				<label>Blog Content: </label>
				<textarea
					required
					value={content}
					onChange={(e) => setContent(e.target.value)}></textarea>
				<label>Blog Author: </label>
				<select value={author} onChange={(e) => setAuthor(e.target.value)}>
					<option value='Diego'>Diego</option>
					<option value='Iraqoz'>Iraqoz</option>
					<option value='CLB'>CLB</option>
				</select>
				{!loading && <button>Add Blog</button>}
				{loading && <button disabled>Adding Blog...</button>}
			</form>
		</div>
	)
}

export default CreateBlog
