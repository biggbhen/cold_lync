import { Button } from '@/components/ui/button';
import Image from 'next/image';
import truckImage from '@/app/assets/operator.png';

export default function Operator() {
	return (
		<section className=''>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-slate-900 rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16'>
					<div className='flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16'>
						{/* Image on the left */}
						<div className='flex-1 relative h-64 md:h-80 rounded-2xl overflow-hidden'>
							<Image
								src={truckImage}
								alt='Truck operator on highway'
								width={1000}
								height={1000}
								className='w-full h-full object-cover'
							/>
						</div>

						{/* Content on the right */}
						<div className='flex-1 flex flex-col justify-center'>
							<h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight'>
								Own a Cold Truck? Earn More With ColdLync.
							</h2>
							<p className='text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-xl'>
								Register your truck and get access to verified shipments. We
								handle bookings, you deliver.
							</p>
							<div className='w-fit'>
								<Button
									size='lg'
									className='bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-6 rounded-lg'>
									Join as Operator
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
