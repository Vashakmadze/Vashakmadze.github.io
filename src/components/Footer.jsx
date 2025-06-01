import { Link } from 'react-router';

function Footer() {
	return (
		<footer className='px-3 lg:px-6'>
			<div className='flex gap-x-16 justify-between'>
				<Link
					to='/'
					className='uppercase tracking-[.07em] font-medium block py-6 transition ease-in-out hover:opacity-60'>
					Linkedin
				</Link>
				<Link
					to='/'
					className='uppercase tracking-[.07em] font-medium block py-6 transition ease-in-out hover:opacity-60'>
					lukavasha03@gmail.com
				</Link>
			</div>
		</footer>
	);
}

export default Footer;
