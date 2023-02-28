import { v4 as uuidv4 } from 'uuid'
import { IItemCard } from '../../models/models'
import ShopCard from './ShopCard'

const Shop = () => {
	const items: IItemCard[] = [
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/b5/87/b5872b55-53dd-44ce-87a4-ef29f1c2a447.jpg?n=7311043_Feature-0_Celebrate_1040x700.jpg',
			cost: 200,
			color: '#1c1c1c',
			title: 'Dark/Grey Gamepad',
			costColor: '#ff3737',
			currentHeight: '200px',
			currentWidth: '400px',
		},
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/ed/bf/edbf1336-0b0c-4167-8824-570923137056.jpg?n=111101_Gallery-0_25_1350x759.jpg',
			cost: 230,
			color: 'red',
			title: 'Red Gamepad',
		},
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/ba/40/ba40e598-da1c-4034-9117-bcc1c1086f6d.jpg?n=111101_Gallery-0_18_1350x759.jpg',
			cost: 230,
			color: 'blue',
			title: 'Blue gamepad',
		},
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/31/58/31580571-d688-4255-92bb-80d89ebee0c6.jpg?n=111101_Gallery-0_10_1350x759.jpg',
			cost: 230,
			color: 'white',
			title: 'White Gamepad',
		},
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/fa/b8/fab86afd-63d6-45a9-862f-798e5e45cda2.jpg?n=111101_Gallery-0_4_1350x759.jpg',
			cost: 230,
			color: 'black',
			title: 'Dark Gamepad',
		},
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/60/95/6095efe6-883d-41d0-8227-0609013a70ff.jpg?n=444793_Gallery-0_3_1350x759.jpg',
			cost: 230,
			color: '#590101',
			title: 'Red/Dark Gamepad',
		},
		{
			id: uuidv4(),
			img: 'https://assets.xboxservices.com/assets/1b/82/1b8254ab-e3cd-4443-8494-2478696632e7.jpg?n=111101_Gallery-0_31_1350x759.jpg',
			cost: 230,
			color: 'yellow',
			title: 'Yellow Gamepad',
		},
	]

	return (
		<div className=' pt-[70px] relative bg-black overflow-hidden'>
			<div className='container'>
				<h1 className='text-4xl mt-28 font-semibold text-center text-white'>
					Shop
				</h1>
				<div className='mt-24  mx-auto'>
					{items.map(item => (
						<ShopCard {...item} key={item.id} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Shop
