import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetch('/blog/blogIndex.json')
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => console.error('Error fetching blog index:', error));
	}, []);

	return (
		<div className='px-3 mt-6 lg:mt-[120px] lg:px-6'>
			<ul className='space-y-4'>
				{posts.map((post) => (
					<li key={post.slug}>
						<Link
							to={`/blog/${post.slug}`}
							className='text-black hover:opacity-60'>
							<h2 className='text-xl font-semibold'>{post.title}</h2>
						</Link>
						<p className='text-gray-600'>{post.date}</p>
						<p>{post.description}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Blog;
