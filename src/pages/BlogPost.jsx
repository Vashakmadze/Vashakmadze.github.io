import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import '../Blog.css';

const BlogPost = () => {
	const { postId } = useParams();
	const [content, setContent] = useState('');

	useEffect(() => {
		fetch(`/blog/${postId}.md`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Blog post not found');
				}
				return response.text();
			})
			.then((text) => setContent(text))
			.catch((error) => {
				console.error('Error fetching blog post:', error);
				setContent('# Blog post not found');
			});
	}, [postId]);

	return (
		<div className='prose px-3 mt-6 lg:mt-[120px] lg:px-6 markdown'>
			<ReactMarkdown children={content} />
		</div>
	);
};

export default BlogPost;
