import { useState } from 'react'
import Cart from '../../assets/icons/Cart'
import { useAppDispatch } from '../../hooks/hooks'
import { IItemCard } from '../../models/models'
import {
	removeItemFromCart,
	setItemsInCart,
} from '../../store/cartSlice/cartSlice'

const ShopCard = (item: IItemCard) => {
	const dispatch = useAppDispatch()
	const [isItemInCart, setIsItemInCart] = useState(false)

	const addToCart = () => {
		dispatch(setItemsInCart(item))
		setIsItemInCart(true)
	}
	const removeFromCart = (id: string) => {
		dispatch(removeItemFromCart(id))
		setIsItemInCart(false)
	}
	return (
		<div
			style={{ height: item.currentHeight }}
			className='w-full shadow-xl bg-dark  rounded-2xl my-10 h-[150px] flex justify-start items-center overflow-hidden'
		>
			<div>
				<img
					style={{
						height: item.currentHeight,
						width: item.currentWidth,
					}}
					className=' bg-green w-[300px] h-[150px]'
					src={item.img}
					alt=''
				/>
			</div>
			<div className='px-2 py-4 grid grid-cols-3 justify-between w-full items-center '>
				<div className='text-white text-2xl font-semibold text-center ml-10'>
					{item.title}
				</div>
				<div className='flex items-center justify-center'>
					<div className='bg-black px-10 py-2  flex items-center justify-center  rounded-2xl '>
						<p
							style={{ color: item.costColor }}
							className='font-bold text-white text-2xl'
						>
							{item.cost} <span className='font-normal'>$</span>
						</p>
					</div>
				</div>
				<div className='flex items-center justify-center'>
					<div
						style={{ background: item.color }}
						className='h-[100px] w-5 mr-5 rounded-2xl '
					></div>
					{isItemInCart ? (
						<div
							onClick={() => removeFromCart(item.id)}
							className='bg-red px-10 py-10 hover:opacity-30 w-9/12  transition-all hover:py-5 flex items-center justify-center  rounded-2xl cursor-pointer'
						>
							<p className='text-white font-semibold'>Delete from cart</p>
						</div>
					) : (
						<div
							onClick={addToCart}
							className='bg-green px-5 py-10 hover:opacity-30 w-1/2 transition-all hover:py-5 flex items-center justify-between  rounded-2xl cursor-pointer'
						>
							<div className=''>
								<Cart width='20px' fill='white' />
							</div>
							<p className='text-white font-semibold'>Add to Cart</p>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default ShopCard
