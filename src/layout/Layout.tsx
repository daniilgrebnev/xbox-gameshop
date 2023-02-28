import { useEffect, useState } from 'react'
import Logo from '../assets/icons/Logo'
import Footer from './Footer'
import Header from './Header'

interface IChildren {
	children: JSX.Element
}

const Layout = ({ children }: IChildren) => {
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		setIsLoading(true)
		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 900)
		return () => {
			clearTimeout(timeout)
		}
	}, [])

	return (
		<>
			{isLoading ? (
				<div className='h-screen w-screen overflow-hidden flex items-center justify-center bg-black '>
					<div className='flex items-center select-none animate-ping'>
						<div className='animate-logo  '>
							<Logo width='100px' fill='#107c10' />
						</div>
						<p className='  font-righteous text-6xl ml-5 text-green'>
							Xbox-Gaming
						</p>
					</div>
				</div>
			) : (
				<>
					<Header />
					{children}
					<Footer />
				</>
			)}
		</>
	)
}

export default Layout
