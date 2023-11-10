export default function Component() {
	return (
		<div className='flex flex-col min-h-screen'>
			<header className='px-4 lg:px-6 h-14 flex items-center'>
				<span className='font-bold text-2xl'>Felipe Malacarne</span>
				<nav className='ml-auto flex gap-4 sm:gap-6'>
					<a
						className='text-sm font-medium hover:underline underline-offset-4'
						href='#projects'
					>
						Projects
					</a>
					<a
						className='text-sm font-medium hover:underline underline-offset-4'
						href='#skills'
					>
						Skills
					</a>
					<a
						className='text-sm font-medium hover:underline underline-offset-4'
						href='#contact'
					>
						Contact
					</a>
				</nav>
				{/* <button className='ml-4'>Download Resume</button> */}
			</header>
			<main className='flex-1'>
				<section className='w-full py-12 md:py-24 lg:py-32'>
					<div className='container px-4 md:px-6'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>
							Hello, I'm a web developer
						</h1>
						<button className='mt-4'>View Projects</button>
					</div>
				</section>
				<section
					className='w-full py-12 md:py-24 lg:py-32'
					id='projects'
				>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							My Projects
						</h2>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
							<div className='border rounded-md p-4'>
								<img
									alt='Project 1'
									className='w-full h-48 object-cover mb-4'
									height='200'
									src='/placeholder.svg'
									style={{
										aspectRatio: "200/200",
										objectFit: "cover",
									}}
									width='200'
								/>
								<h3 className='text-lg font-bold'>Project 1</h3>
								<p className='text-zinc-500'>
									Lorem ipsum dolor sit amet, consectetur
									adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</section>
				<section
					className='w-full py-12 md:py-24 lg:py-32 bg-gray-100'
					id='skills'
				>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Skills
						</h2>
						<ul className='list-none grid grid-cols-2 md:grid-cols-4 gap-4 mt-8'>
							<li>TypeScript</li>
							<li>JavaScript</li>
							<li>NextJS</li>
							<li>Web Performance</li>
							<li>Docker</li>
							<li>NodeJS</li>
						</ul>
					</div>
				</section>
				<section
					className='w-full py-12 md:py-24 lg:py-32'
					id='contact'
				>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
							Contact Me
						</h2>
						<p className='mt-4'>
							You can reach me at:{" "}
							<a className='underline text-blue-500' href='#'>
								jethrinfox@gmail.com
							</a>
						</p>
					</div>
				</section>
			</main>
		</div>
	)
}
