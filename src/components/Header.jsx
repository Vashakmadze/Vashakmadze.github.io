import { Link } from 'react-router';

function Header() {
	return (
		<header className='sticky top-0 w-full z-10 transition-all duration-300 ease-in-out-cubic bg-white text-black flex justify-between items-center px-3 lg:px-6'>
			<div>
				<Link
					to='/'
					className='pointer-events-auto block py-3 uppercase tracking-[.07em] font-medium'>
					Luka Vashakmadze
				</Link>
			</div>
			<div className='uppercase tracking-[.07em] font-500'>
				<Link
					to='/blog'
					className='pointer-events-auto block py-3 uppercase tracking-[.07em] font-medium transition ease-in-out hover:opacity-60'>
					Blog
				</Link>
			</div>
		</header>
	);
}

export default Header;
