import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TItemCard } from './../../models/models'

type CartState = {
	list: TItemCard[]
}
const initialState: CartState = {
	list: [],
}

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		setItemsInCart: (state, action: PayloadAction<TItemCard>) => {
			state.list.push(action.payload)
		},
		removeItemFromCart: (state, action) => {
			state.list = state.list.filter(item => item.id !== action.payload)
		},
	},
})

export const { setItemsInCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
