import {useState} from "react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 ">
			<nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
				<div className="flex items-center justify-between">
					<a
						className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
						href="/"
						aria-label="Brand"
					>
						<svg
							width="40"
							height="40"
							viewBox="0 0 1000 1000"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<g clip-path="url(#clip0_310_1405)">
								<rect
									width="1000"
									height="1000"
									rx="120"
									fill="url(#paint0_linear_310_1405)"
								/>
								<path
									d="M202.016 669V619.2H352.016V669H202.016ZM352.016 669V619.2C357.216 619.2 360.416 621.4 361.616 625.8C363.216 630.2 364.016 636.2 364.016 643.8C364.016 651.4 363.216 657.6 361.616 662.4C360.416 666.8 357.216 669 352.016 669ZM202.016 669C196.816 669 193.616 666.8 192.416 662.4C190.816 657.6 190.016 651.4 190.016 643.8C190.016 636.2 190.816 630.2 192.416 625.8C193.616 621.4 196.816 619.2 202.016 619.2V669ZM355.016 669V619.2H651.416L622.616 644.4V399L646.016 418.8H551.216C529.616 418.8 512.816 421.4 500.816 426.6C488.816 431.8 480.416 441.6 475.616 456C471.216 470.4 469.016 491.4 469.016 519C469.016 546.6 471.216 567.6 475.616 582C480.416 596.4 488.816 606.2 500.816 611.4C512.816 616.6 529.616 619.2 551.216 619.2V658.2C516.416 658.2 489.016 653.8 469.016 645C449.016 636.2 434.616 621.6 425.816 601.2C417.416 580.8 413.216 553.4 413.216 519C413.216 485 417.416 457 425.816 435C434.616 412.6 449.016 396 469.016 385.2C489.016 374 516.416 368.4 551.216 368.4H678.416V669H355.016ZM355.016 669C349.816 669 346.616 666.8 345.416 662.4C343.816 657.6 343.016 651.4 343.016 643.8C343.016 636.2 343.816 630.2 345.416 625.8C346.616 621.4 349.816 619.2 355.016 619.2V669ZM494.216 319.8V261.6H550.616V319.8H494.216ZM576.416 319.8V261.6H632.816V319.8H576.416Z"
									fill="white"
								/>
							</g>
							<defs>
								<linearGradient
									id="paint0_linear_310_1405"
									x1="-500"
									y1="500"
									x2="500"
									y2="1500"
									gradientUnits="userSpaceOnUse"
								>
									<stop stop-color="#38B8F2" />
									<stop offset="1" stop-color="#623CF6" />
								</linearGradient>
								<clipPath id="clip0_310_1405">
									<rect width="1000" height="1000" fill="white" />
								</clipPath>
							</defs>
						</svg>
					</a>
					<div className="sm:hidden">
						<button
							type="button"
							className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
							aria-expanded={isOpen}
							aria-controls="hs-navbar-example"
							aria-label="Toggle navigation"
							onClick={toggleMenu}
						>
							<svg
								className={`${isOpen ? "hidden" : "block"} shrink-0 size-4`}
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<line x1="3" x2="21" y1="6" y2="6" />
								<line x1="3" x2="21" y1="12" y2="12" />
								<line x1="3" x2="21" y1="18" y2="18" />
							</svg>
							<svg
								className={`${isOpen ? "block" : "hidden"} shrink-0 size-4`}
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
							<span className="sr-only">Toggle navigation</span>
						</button>
					</div>
				</div>
				<div
					id="hs-navbar-example"
					className={`${
						isOpen ? "block" : "hidden"
					} hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block`}
					aria-labelledby="hs-navbar-example-collapse"
				>
					<div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
						<a
							className="font-medium text-blue-500 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
							href="#"
							aria-current="page"
						>
							Home
						</a>
						<a
							className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
							target="_blank"
							href="https://buymeacoffee.com/auvik/membership"
						>
							Donate
						</a>
						<a
							className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500"
							href="mailto:email@auvik.me"
						>
							Contact
						</a>
						{/* <a
							className="font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400"
							href="#"
						>
							Share
						</a> */}
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
