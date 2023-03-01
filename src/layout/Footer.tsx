import Logo from '../assets/icons/Logo'
import adress from '../assets/icons/png/adress.png'
import companyName from '../assets/icons/png/companyName.png'
import email from '../assets/icons/png/email.png'
import phone from '../assets/icons/png/phone.png'
import supportEmail from '../assets/icons/png/supportEmail.png'

const Footer = () => {
	return (
		<div className='bg-dark w-full  select-none'>
			<div className='flex items-center justify-center pt-4 sm:mx-auto select-none'>
				<Logo width='50px' fill='#107c10' />
				<p className='font-righteous text-2xl ml-5 text-green px-2 py-1 rounded-2xl'>
					Xbox-Gaming
				</p>
			</div>
			<div className='container sm:w-8/12 sm:block flex items-center justify-center  py-5 sm:justify-center'>
				<div className='my-3  flex items-center justify-center sm:justify-start mx-2'>
					<img className='w-5 mr-2 ' src={phone} alt='' />
					<a
						href='tel:999 99 99 99'
						className='text-white bg-black px-2 py-1 rounded-2xl'
					>
						999 99 99 99
					</a>
				</div>
				<div className='my-3  flex items-center justify-center sm:justify-start mx-2'>
					<img className='w-5 mr-2 ' src={email} alt='' />
					<a
						href='email:example@ex.com'
						className='text-white bg-black px-2 py-1 rounded-2xl '
					>
						example@ex.com
					</a>
				</div>
				<div className='my-3  flex items-center justify-center sm:justify-start mx-2'>
					<img className='w-5 mr-2 ' src={supportEmail} alt='' />
					<a
						href='email:exInfo@ex.com'
						className='text-white bg-black px-2 py-1 rounded-2xl '
					>
						exInfo@ex.com
					</a>
				</div>
				<div className='my-3 flex items-center justify-center sm:justify-start mx-2'>
					<img className='w-5 mr-2 text-white' src={adress} alt='' />
					<div className='flex bg-black  px-2 py-1 rounded-2xl'>
						<p className='text-white mx-2'>city: Fedor</p>
						<p className='text-white mx-1'>street: Fedor</p>
						<p className='text-white mx-1'>home: 21</p>
					</div>
				</div>
				<div className='my-3 flex items-center justify-center sm:justify-start mx-2'>
					<img className='w-5 mr-2   ' src={companyName} alt='' />
					<p className='text-white bg-black px-2 py-1 rounded-2xl'>
						OOO "Jopa"
					</p>
				</div>
				<div className='my-3 flex items-center justify-center sm:justify-start mx-2'>
					<img className='w-5 mr-2   ' src={companyName} alt='' />
					<p className='text-white bg-black px-2 py-1 rounded-2xl'>FAQ</p>
				</div>
			</div>
		</div>
	)
}

export default Footer
