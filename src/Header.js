export const Header = () => {
	return (
		<header className="p-4 dark:bg-gray-800 dark:text-gray-100">
			<div className="container flex justify-between h-16 mx-auto">
				<ul className="items-stretch hidden space-x-3 lg:flex">
					<li className="flex">
						<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400">Home</a>
					</li>
					<li className="flex">
						<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">News</a>
					</li>
					<li className="flex">
						<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">Predict</a>
					</li>
				</ul>
				<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
					<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" class="w-8 h-8 dark:text-violet-400">
						<path d="M15.999 2C8.268 2 2 8.268 2 16s6.268 14 13.999 14C23.732 30 30 23.732 30 16S23.732 2 15.999 2zm0 25.334C9.226 27.334 4.667 22.775 4.667 16S9.226 4.667 15.999 4.667 27.334 9.225 27.334 16 22.775 27.334 15.999 27.334z" />
					</svg>

				</a>
				<div className="flex items-center md:space-x-4">
					<div className="relative">
						<span className="absolute inset-y-0 left-0 flex items-center pl-2">
							<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">

							</button>
						</span>
						<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
					</div>
					<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-400 dark:text-gray-900">Log in</button>
				</div>
				<button title="Open menu" type="button" className="p-4 lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
					</svg>
				</button>
			</div>
		</header>

	);
};