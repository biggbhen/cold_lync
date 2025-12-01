import Image from 'next/image';
import truckImage from '@/app/assets/heroImg.png';

export default function WhoWeAre() {
	const steps = [
		{
			title: 'Our Mission',
			description:
				'At ColdLync, our mission is to build Africa’s most trusted and efficient cold chain network by enabling transparency, standardized quality, and frictionless access to cold-chain logistics infrastructure.',
		},
		{
			title: 'Our Vision',
			description:
				'Our vision is to be the backbone of temperature-controlled logistics across Africa, ensuring perishable goods move safer, faster, and with zero cold-chain breaks.',
		},
	];

	return (
		<section className='pt-20 md:pt-28 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-6'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
						Who We Are
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						A modern, interconnected cold chain ecosystem that supports
						agriculture, retail, food service, and pharma with dependable
						infrastructure.
					</p>
				</div>
				<div className='grid custom-lg:grid-cols-2 gap-8'>
					<div>
						<Image
							src={truckImage}
							alt='Truck Image'
							width={400}
							height={400}
							className='w-full h-full object-cover rounded-xl'
						/>
					</div>
					<div>
						<p>
							ColdLync is a technology-driven cold chain aggregation platform
							designed to unify Nigeria’s fragmented refrigerated logistics
							ecosystem.{' '}
						</p>
						<p className='mt-4'>
							We connect shippers to verified cold-chain transport operators and
							cold-storage providers through a single digital interface,
							enabling reliable, temperature-controlled delivery across food,
							pharma, agriculture, and FMCG supply chains.
						</p>
						<div className='grid custom-lg:grid-cols-2 gap-6 mt-6'>
							{steps.map((step, index) => (
								<div key={index} className='relative'>
									<div className='bg-white shadow-lg border p-8 rounded-lg h-full'>
										<h3 className='text-xl font-bold text-center mb-3'>
											{step.title}
										</h3>
										<p className='leading-relaxed text-center test-sm'>
											{step.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
