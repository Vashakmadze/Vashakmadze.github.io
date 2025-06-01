import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import projectsData from '../assets/projects.json';
import Card from '../components/Card';

const categories = ['all', 'development', 'cybersecurity'];

function Home() {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedTag, setSelectedTag] = useState('');
	const [filteredProjects, setFilteredProjects] = useState([]);

	useEffect(() => {
		const params = new URLSearchParams(location.search);
		const tag = params.get('tag');
		if (tag && categories.includes(tag)) {
			setSelectedTag(tag);
			if (tag === 'all') {
				setFilteredProjects(projectsData);
			} else {
				const filtered = projectsData.filter(
					(project) => project.category.toLowerCase() === tag.toLowerCase()
				);
				setFilteredProjects(filtered);
			}
		}
	}, [location.search]);

	const handleCategoryClick = (tag) => {
		setSelectedTag(tag);
		const params = new URLSearchParams(location.search);
		if (tag) {
			params.set('tag', tag);
		} else {
			params.delete('tag');
		}
		navigate({ search: params.toString() }, { replace: true });
	};

	return (
		<div className='px-3 lg:px-6 mt-6 lg:mt-[120px]'>
			<div className='mb-3'>
				<div className='flex gap-x-3'>
					{categories.map((tag) => (
						<div
							key={tag}
							onClick={() => handleCategoryClick(tag)}
							className={`text-black/30 hover:text-black/60 transition-color duration-300 text-base leading-[1.2] tracking-[.02em] font-medium cursor-pointer ${
								selectedTag === tag ? '!text-black' : ''
							}`}>
							{tag.charAt(0).toUpperCase() + tag.slice(1)}
						</div>
					))}
				</div>
			</div>
			<div className='grid gap-3 gap-y-6 sm:grid-cols-2 md:gap-y-10 lg:grid-cols-3'>
				{filteredProjects.map((project) => (
					<h1>hello</h1>
				))}
			</div>
		</div>
	);
}

export default Home;
