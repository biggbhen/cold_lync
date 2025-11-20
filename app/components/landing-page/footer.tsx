import Link from 'next/link';

export default function Footer() {
	return (
		<footer className='bg-slate-900 text-white py-16'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Main Footer Content */}
				<div className='grid md:grid-cols-2 gap-12 mb-8'>
					{/* Description & Contact - Left Column */}
					<div className='md:col-span-1'>
						<p className='text-white/80 text-sm leading-relaxed mb-6'>
							ColdLync is Nigeria&apos;s first comprehensive cold-chain
							logistics and storage platform. We connect businesses that need to
							ship or store temperature-sensitive goods with a vetted network of
							refrigerated transport operators and cold storage facilities,
							creating a reliable, transparent, and tech-enabled ecosystem.
						</p>
						<div className='space-y-2 text-sm text-white/80'>
							<p>
								<a
									href='tel:+2348139551654'
									className='hover:text-white transition'>
									+234 (0) 813-955-1654
								</a>
							</p>
							<p>
								<a
									href='mailto:info@coldlync.com'
									className='hover:text-white transition'>
									info@coldlync.com
								</a>
							</p>
						</div>
					</div>

					<div className='grid md:grid-cols-3 gap-12'>
						{/* Quick Links */}
						<div>
							<h4 className='font-bold text-white mb-4'>Quick Links</h4>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Home
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Book Transport
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Join as Operator
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										How it Works
									</Link>
								</li>
							</ul>
						</div>

						{/* Customer Support */}
						<div>
							<h4 className='font-bold text-white mb-4'>Customer Support</h4>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Help Center
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										FAQs
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Track Delivery
									</Link>
								</li>
							</ul>
						</div>

						{/* Policies & Legal */}
						<div>
							<h4 className='font-bold text-white mb-4'>Policies & Legal</h4>
							<ul className='space-y-2'>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Terms & Conditions
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href='#'
										className='text-white/70 hover:text-white transition text-sm'>
										Refund & Cancellation
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className='border-t-2 border-[#EAEAEA] my-8'></div>

				{/* Bottom Bar */}
				<div className='flex justify-center items-center text-sm text-white/70'>
					<p>© 2025 ColdLync. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
