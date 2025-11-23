import { Button } from '@/components/ui/button';
import Image from 'next/image';
import truckImage from '@/app/assets/about-hero.png';

export default function Hero() {
	return (
		<section className='bg-[#0F173D]'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative'>
				<div className='grid custom-lg:grid-cols-2 gap-12 items-stretch'>
					{/* Left side - Text content */}
					<div className='space-y-6 flex flex-col'>
						<h1 className='text-4xl md:text-5xl font-bold leading-tight text-balance text-white'>
							Building Reliable Cold Chain Connectivity Across Nigeria
						</h1>
						<div className='space-y-4'>
							<p className='text-lg text-white/90 leading-relaxed'>
								A structured, transparent platform that connects shippers to
								reliable refrigerated logistics across Nigeria.
							</p>
						</div>
						<div className='pt-4'>
							<Button
								size='lg'
								className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 text-lg'>
								Get Started
							</Button>
						</div>
					</div>
					{/* Right side - Truck image */}
					<div className='hidden custom-lg:flex justify-end relative h-full'>
						<Image
							src={truckImage}
							width={500}
							height={500}
							alt='Fleet of refrigerated cold chain transport trucks'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
