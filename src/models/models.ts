export interface IIcon {
	fill?: string
	width: string
	height?: string
}
export interface IItemCard {
	id: string
	img: string
	title: string
	cost: number
	color: string
	costColor?: string
	currentHeight?: string
	currentWidth?: string
	count?: number
}
export type TItemCard = {
	id: string
	img: string
	title: string
	cost: number
	color: string
	costColor?: string
	currentHeight?: string
	currentWidth?: string
	count?: number
}
