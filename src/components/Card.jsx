import React from 'react';
import { Link } from 'react-router';

const Card = ({ title, category, videoSrc, poster, slug }) => {
	return (
		<div className='relative'>
			<div className='relative aspect-[17/20]'>
				<div className='absolute inset-0 w-full h-full'>
					<video
						loop
						playsInline
						autoPlay
						muted
						poster={poster}
						className='w-full h-full object-cover'>
						<source
							src={videoSrc}
							type='video/mp4'
						/>
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
			<div className='flex gap-x-1 mt-2 text-base leading-[1.2] font-medium lg:mt-3'>
				<Link
					to={`/projects/${slug}`}
					className='block hover:underline'
					title={title}>
					<h2 className='transition-colors duration-300 ease-in-out'>
						{title}
					</h2>
				</Link>
				<p className='text-black/40 transition-colors duration-300 ease-in-out font-normal'>
					{category}
				</p>
			</div>
		</div>
	);
};

export default Card;
