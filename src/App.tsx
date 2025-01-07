export default function App() {
	return (
		<>
			<section className='flex flex-col md:flex-row h-screen items-center justify-center px-8 py-16 bg-gray-100 dark:bg-gray-900'>
				<div className='md:w-1/2 flex flex-col items-center justify-center space-y-6'>
					<div className='bg-white dark:bg-gray-800 shadow-lg rounded-md p-8'>
						<img
							alt='Profile Picture'
							className='rounded-full mb-4'
							height='300'
							src='/picofme.png'
							style={{
								aspectRatio: "300/300",
								objectFit: "cover",
							}}
							width='300'
						/>
						<div className='space-y-2 text-md text-gray-300'>
							<p className=''>Email: jethrinfox@gmail.com</p>
						</div>
						<div className='flex space-x-4'>
							<a
								aria-label='LinkedIn link'
								className='text-gray-900 dark:text-gray-100'
								href='https://www.linkedin.com/in/felipe-malacarne/'
								target='_blank'
							>
								<svg
									className=' h-6 w-6'
									fill='none'
									height='24'
									stroke='currentColor'
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									viewBox='0 0 24 24'
									width='24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z' />
									<rect height='12' width='4' x='2' y='9' />
									<circle cx='4' cy='4' r='2' />
								</svg>
							</a>
						</div>
					</div>
				</div>
				<div className='md:w-1/2 space-y-6'>
					<div className='bg-white dark:bg-gray-800 shadow-lg rounded-md p-8'>
						<div className='space-y-2 mb-2'>
							<h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-transparent dark:from-purple-500 dark:to-transparent'>
								Felipe Emilio
							</h2>
							<h2 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>
								Malacarne
							</h2>
						</div>
						<p className='text-lg text-gray-600 dark:text-gray-300 mb-4'>
							React Developer at Thrivemarket. Who is passionate
							about TypeScript and building great projects.
						</p>
						<h3 className='text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2'>
							Skills:
						</h3>
						<ul className='list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300'>
							<li>TypeScript</li>
							<li>JavaScript</li>
							<li>NextJS</li>
							<li>Web Performance</li>
							<li>Docker</li>
							<li>NodeJS</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
