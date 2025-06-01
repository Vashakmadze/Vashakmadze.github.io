import React from 'react';
import { useParams } from 'react-router';

const Project = () => {
	const { projectname } = useParams();

	return (
		<div>
			<h2>Project: {projectname}</h2>
			<p>Details about project {projectname} go here.</p>
		</div>
	);
};

export default Project;
