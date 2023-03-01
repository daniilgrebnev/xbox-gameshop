import { Link, NavLink } from 'react-router-dom'
import Cart from '../assets/icons/Cart'
import Logo from '../assets/icons/Logo'
import { useAppSelector } from '../hooks/hooks'

const Header = () => {
	const cartItems = useAppSelector(state => state.cartItems.list)
	const price = cartItems.reduce(
		(accumulator: any, product: any) => (accumulator += product.cost),
		0
	)
	const count = cartItems.length

	return (
		<>
			<div className=' fixed top-0 left-0 w-screen bg-black h-[70px] flex justify-between items-center z-50 select-none'>
				<div className='container flex justify-between items-center'>
					<div className='flex items-center select-none'>
						<Logo width='50px' fill='#107c10' />
						<p className='font-righteous text-2xl ml-5 text-green'>
							Xbox-Gaming
						</p>
					</div>
					<nav className='text-white text-xl font-righteous sm:hidden tracking-widest flex justify-between items-center'>
						<NavLink className='mx-10 a' to='/'>
							Home
						</NavLink>
						<NavLink className='mx-10 a' to='/shop'>
							Shop
						</NavLink>
						<NavLink className='mx-10 a' to='/cart'>
							Checkout
						</NavLink>
					</nav>

					<Link
						className='mx-10 flex justify-between items-center cursor-pointer hover:opacity-30 transition-all relative'
						to='/cart'
					>
						<p className='text-white absolute right-14'>
							<b className='mr-1 font-righteous  tracking-widest'>{price}</b>$
						</p>
						<div className='ml-5 font-semibold'>
							<div className='w-4 h-4 text-sm bg-red rounded-full absolute flex items-center justify-center text-white font-bold right-[-5px] top-0'>
								{count}
							</div>
							<Cart width='30px' fill='white' />
						</div>
					</Link>
				</div>
			</div>
			<nav className='text-white fixed top-[70px] text-xl hidden sm:flex font-righteous z-40 w-full py-3 bg-dark tracking-widest  justify-between items-center'>
				<NavLink className='mx-5 a' to='/'>
					Home
				</NavLink>
				<NavLink className='mx-5 a' to='/shop'>
					Shop
				</NavLink>
				<NavLink className='mx-5 a' to='/cart'>
					Checkout
				</NavLink>
			</nav>
		</>
	)
}

export default Header
