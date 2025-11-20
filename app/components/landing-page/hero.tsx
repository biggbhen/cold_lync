import { Button } from '@/components/ui/button';
import Image from 'next/image';
import truckImage from '@/app/assets/heroImg.png';

export default function Hero() {
	return (
		<section className='bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative'>
				<div className='grid md:grid-cols-2 gap-12 items-stretch'>
					{/* Left side - Text content */}
					<div className='space-y-6 flex flex-col'>
						<h1 className='text-5xl md:text-6xl font-bold leading-tight text-balance text-foreground'>
							Move cold cargo anywhere in Nigeria.
						</h1>
						<div className='space-y-4'>
							<p className='text-xl md:text-2xl font-semibold text-foreground'>
								Fast, reliable, temperature-safe.
							</p>
							<p className='text-lg text-muted-foreground leading-relaxed'>
								Book reliable cold chain transport in Lagos. Chilled, frozen, or
								pharma; delivered safely and on time.
							</p>
						</div>
						<div className='pt-4'>
							<Button
								size='lg'
								className='bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 text-lg'>
								Book Cold Transport
							</Button>
						</div>
					</div>

					{/* Right side - Truck image */}
					<div className='flex justify-center relative h-full'>
						<Image
							src={truckImage}
							fill
							alt='Fleet of refrigerated cold chain transport trucks'
						/>
					</div>
				</div>
			</div>

			<div className='bg-slate-900 text-white py-6'>
				<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
					<p className='text-center text-base md:text-lg font-medium'>
						On-Demand Reliability | Full Transparency | Compliance Guaranteed |
						Hassle-Free Payments
					</p>
				</div>
			</div>
		</section>
	);
}
