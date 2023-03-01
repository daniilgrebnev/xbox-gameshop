import { useAppDispatch } from '../../hooks/hooks'
import { IItemCard } from '../../models/models'
import { removeItemFromCart } from '../../store/cartSlice/cartSlice'

const CartItem = (item: IItemCard) => {
	const dispatch = useAppDispatch()

	const removeFromCart = (id: string) => {
		dispatch(removeItemFromCart(id))
	}

	return (
		<div className='bg-dark w-10/12 sm:max-w-11/12 mx-auto my-20 rounded-2xl  overflow-hidden'>
			<img className='h-[320px] sm:h-[200px] w-full' src={item.img} alt='' />
			<div style={{ background: item.color }} className='h-5 w-full'></div>
			<div className='p-2'>
				<h2 className='text-white font-semibold text-center my-10 text-2xl'>
					{item.title}
				</h2>
				<div className='flex w-full justify-between items-center'>
					<div
						onClick={() => removeFromCart(item.id)}
						className='bg-red cursor-pointer hover:opacity-70 transition tracking-widest px-4 py-2 rounded-2xl font-semibold text-white'
					>
						Remove
					</div>
					<p className='text-right text-white'>
						<b className='text-xl'>{item.cost} </b>$
					</p>
				</div>
			</div>
		</div>
	)
}

export default CartItem
