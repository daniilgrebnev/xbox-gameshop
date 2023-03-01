import { Link } from 'react-router-dom'
import Arrow from '../../assets/icons/Arrow'
import Logo from '../../assets/icons/Logo'

const Home = () => {
	return (
		<>
			<div className='h-screen pt-[70px] relative bg-black overflow-hidden'>
				<div className='absolute h-screen bg-green w-1/2 right-0 top-0 origin-center rotate-45 rounded-xl flex items-center justify-center '>
					<div className='origin-center rotate-[-45deg]'>
						<Logo width='270px' fill='white' />
					</div>
				</div>
				<div className='container flex  items-center h-screen'>
					<h1 className='text-6xl sm:mt-28 sm:w-full sm:mx-auto font-righteous sm:bg-[#0000009d] tracking-widest z-10 absolute left-0 top-4 rounded-2xl text-green shadow-2xl p-20'>
						Your Best Change
					</h1>
					<p className='absolute w-[1000px] sm:hidden left-0 bottom-1/4 rounded-2xl text-white text-lg font-semibold shadow-2xl p-20'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae qui
						eos similique, corporis error natus, rem animi illum eveniet
						assumenda in, dolor rerum? Maxime accusantium ea amet, maiores
						asperiores magni!
					</p>
				</div>
			</div>
			<div className='h-screen relative text-black bg-black overflow-hidden pt-96 sm:pt-0'>
				<h2 className='text-4xl font-bold  text-center mb-7 hidden sm:block text-white'>
					Big Sales
				</h2>
				<div className='absolute h-screen bg-green w-1/2 left-0 top-0 origin-center rotate-45 rounded-xl  '></div>
				<Link to='shop'>
					<div className='absolute flex items-center justify-between text-white sm:right-0 sm:top-[350px] right-[450px] top-[320px] font-semibold text-3xl z-10'>
						<p className='mr-5 hover:mr-3 transition-all a'>Go to shop</p>
						<div className=''>
							<Arrow width='50px' fill='white' />
						</div>
					</div>
				</Link>
				<div className='container flex items-center h-[270px] sm:h-full  sm:block justify-center shadow-2xl'>
					<div className='w-4/12 sm:w-11/12 sm:mx-auto sm:rounded-2xl sm:overflow-hidden hidden h-[270px] relative'>
						<div className='absolute left-5 top-5 text-red font-bold text-3xl'>
							- 20%
						</div>
						<img
							src='https://assets.xboxservices.com/assets/b5/87/b5872b55-53dd-44ce-87a4-ef29f1c2a447.jpg?n=7311043_Feature-0_Celebrate_1040x700.jpg'
							alt=''
							className='w-[100%] h-[270px] '
						/>
					</div>
					<div className='w-8/12 sm:w-11/12 sm:mx-auto sm:mt-10 p-10'>
						<div className='absolute sm:left-[78%] left-0 top-0 p-3'>
							<Logo width='50px' fill='white' />
						</div>
						<h2 className='text-4xl font-bold  text-center mb-7 sm:hidden'>
							Big Sales
						</h2>
						<p className='text-white sm:text-center text-xl sm:w-full sm:mx-auto w-10/12'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
							aut. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Tempore, quibusdam eligendi incidunt est ad voluptatum?
						</p>
					</div>
					<div className='w-4/12 h-[270px] relative sm:hidden'>
						<div className='absolute left-5 top-5 text-red font-bold text-3xl'>
							- 20%
						</div>
						<img
							src='https://assets.xboxservices.com/assets/b5/87/b5872b55-53dd-44ce-87a4-ef29f1c2a447.jpg?n=7311043_Feature-0_Celebrate_1040x700.jpg'
							alt=''
							className='w-[100%] h-[270px] '
						/>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
