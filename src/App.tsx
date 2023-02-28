import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Cart from './pages/cart/Cart'
import Checkout from './pages/checkout/Checkout'
import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'

function App() {
	return (
		<div className='font-montserrat bg-black'>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/shop' element={<Shop />} />
					<Route path='/checkout' element={<Checkout />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</Layout>
		</div>
	)
}

export default App
