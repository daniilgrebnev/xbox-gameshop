import { Link } from 'react-router-dom'
import PayPal from '../../assets/icons/PayPal'
import { useAppSelector } from '../../hooks/hooks'
import CartItem from './CartItem'

const Cart = () => {
	const cartItems = useAppSelector(state => state.cartItems.list)
	const price = cartItems.reduce(
		(accumulator: any, product: any) => (accumulator += product.cost),
		0
	)

	return (
		<>
			<div className=' pt-[150px]  relative bg-black min-h-screen h-full'>
				<h1 className='text-4xl font-semibold text-white text-center'>Cart</h1>
				<div className='container '>
					{cartItems.length === 0 ? (
						<div className='mt-20 text-white text-center'>
							<h1 className='text-2xl mb-20 '>Nobody here now</h1>
							<Link className='a mt-10' to='/shop'>
								Go to shop
							</Link>
							<button className='px-4 absolute h-[50px] bottom-[-100px] left-1/3 flex items-center justify-center w-1/3 text-2xl rounded-2xl bg-[#d5ff03]  transition-all opacity-30 text-black mx-auto  '>
								<PayPal width='150px' />
							</button>
						</div>
					) : (
						<div
							className={
								cartItems.length > 1
									? 'grid grid-cols-2 sm:block'
									: 'mx-auto w-[650px] sm:w-11/12 '
							}
						>
							{cartItems.map(item => (
								<CartItem {...item} key={item.id} />
							))}

							<button className='px-4 fixed h-[100px] top-[70px] right-3  w-1/6 text-2xl rounded-2xl bg-dark  transition text-white mx-auto  sm:relative sm:bottom-12 sm:top-auto sm:w-full sm:right-0 '>
								Total Price:
								<b className='ml-4 font-righteous tracking-widest'>{price}</b>$
							</button>
							<Link
								to='/checkout'
								className='px-4  sm:relative sm:bottom-10 sm:top-auto sm:w-[200px] sm:right-0 fixed h-[60px] top-[170px] right-3  flex items-center justify-center w-1/6 text-2xl rounded-2xl bg-[#d5ff03] hover:bg-[#0062ff] transition-all text-black sm:mx-auto  '
							>
								<PayPal width='150px' />
							</Link>
						</div>
					)}
					{/* <button className='px-4 absolute h-[50px] bottom-[-100px] left-1/3 flex items-center justify-center w-1/3 text-2xl rounded-2xl bg-[#d5ff03] hover:bg-[#0062ff] transition text-black mx-auto  '>
						<PayPal width='150px' />
					</button> */}
				</div>
			</div>
		</>
	)
}

export default Cart
