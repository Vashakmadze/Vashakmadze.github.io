// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/Home';
import Project from './pages/Project';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'projects/:projectname', element: <Project /> },
			{ path: 'blog', element: <Blog /> },
			{ path: 'blog/:postId', element: <BlogPost /> },
		],
	},
]);

const App = () => <RouterProvider router={router} />;

export default App;
