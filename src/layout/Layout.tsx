import Footer from './Footer'
import Header from './Header'

interface IChildren {
	children: JSX.Element
}

const Layout = ({ children }: IChildren) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}

export default Layout
