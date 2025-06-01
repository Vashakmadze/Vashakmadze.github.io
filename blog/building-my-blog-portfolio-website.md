# Building My Minimalist Portfolio Website with React

As a developer passionate about clean design and efficient functionality, I set out to create a minimalist portfolio website that not only showcases my work but also serves as a personal blogging platform. While I previously shared my thoughts on Medium, I desired a unified space under my own domain, [lukavasha.com](https://lukavasha.com), to present both my projects and writings cohesively.

## Inspiration and Goals

The primary goal was to develop a simple, fast, and elegant website that reflects my personal style. I drew inspiration from various minimalist portfolio websites, appreciating their focus on content and user experience without unnecessary distractions. Given my familiarity with ReactJS, it was the natural choice for building this project efficiently.

## Tech Stack and Tools

- **ReactJS**: Leveraged for its component-based architecture and efficient rendering.
- **React Router**: Implemented for seamless navigation between pages.
- **Tailwind CSS**: Utilized for rapid and responsive UI development.
- **React Markdown**: Employed to parse and render Markdown files for the blog section.
- **Vite**: Chosen for its fast development server and optimized build process.

## Structuring the Portfolio

The website is structured to provide a clear and intuitive user experience:

- **Homepage**: Features a brief introduction and highlights of selected projects.
- **Projects Page**: Displays a list of my work, each linking to detailed pages with descriptions, roles, and media.
- **Blog Section**: Hosts my writings, with each post written in Markdown and rendered dynamically.

## Implementing the Blog

To maintain simplicity and control over my content, I opted to store blog posts as Markdown (`.md`) files within the `public/blog` directory. Each file is named using the blog title, facilitating straightforward routing.

- **Blog Listing**: A `blogIndex.json` file maintains metadata for each post, including title, slug, date, and description. This file is fetched to display a list of blog entries.
- **Individual Posts**: When a user navigates to a specific post, the corresponding Markdown file is fetched and rendered using the `ReactMarkdown` component.

This approach ensures that adding a new blog post is as simple as creating a new Markdown file and updating the index.

## Deployment and Domain

After development and testing, I deployed the website and linked it to my existing domain, [lukavasha.com](https://lukavasha.com). This consolidation provides visitors with a seamless experience, accessing both my portfolio and blog in one place.

## Reflections and Future Plans

Building this website allowed me to merge my professional work and personal writings under a unified platform. The minimalist design ensures that content remains the focal point, and the use of React and Markdown provides flexibility for future enhancements.

Looking ahead, I plan to:

- Implement a tagging system for blog posts to improve navigation.
- Add a contact form to facilitate communication with visitors.
- Optimize performance and accessibility across devices.

This project has been a fulfilling endeavor, aligning with my vision of a personal space that is both functional and reflective of my aesthetic preferences.
