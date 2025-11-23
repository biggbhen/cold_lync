import Image from 'next/image';
import networkConnectionImg from '@/app/assets/Network Connection.png';
import cashPaymentImg from '@/app/assets/Cash Payment.png';
import businessOperationsImg from '@/app/assets/Business Operations.png';
import optimizationImg from '@/app/assets/optimization.png';

export default function Values() {
	const services = [
		{
			title: 'Marketplace Access',
			description:
				'Connect with verified cold truck operators and secure capacity without the usual back-and-forth.',
			img: networkConnectionImg,
		},
		{
			title: 'Transparent Pricing',
			description:
				'Clear cost breakdowns backed by distance, tonnage, temperature class, and availability.',
			img: cashPaymentImg,
		},
		{
			title: 'Standard Operations',
			description:
				'Structured booking, verification, and delivery confirmation that removes guesswork from cold movement.',
			img: businessOperationsImg,
		},
		{
			title: 'Optimized Utilization',
			description:
				'We reduce empty miles and help operators maximize revenue through demand aggregation.',
			img: optimizationImg,
		},
	];

	return (
		<section className='py-16 md:py-20'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-10'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
						How We Add Value
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						We’re not just about handling cold-chain logistics; we’re about
						delivering convenience, speed, and quality.
					</p>
				</div>

				<div className='grid md:grid-cols-2 custom-lg:grid-cols-4 gap-6'>
					{services.map((service, index) => (
						<div
							key={index}
							className={`rounded-lg flex flex-col shadow-lg border p-6 cursor-pointer hover:shadow-xl transition-all duration-300`}>
							<div className='h-[80px] w-[80px] mx-auto rounded-full mb-4 relative bg-[#0F173D] flex items-center justify-center cursor-pointer'>
								<Image
									src={service.img}
									alt={service.title}
									width={40}
									height={40}
								/>
							</div>
							<div className='bg-white rounded-lg'>
								<h3 className='text-lg font-bold text-[#222222] text-center mb-3'>
									{service.title}
								</h3>
								<p className='text-center text-sm text-[#222222]/90 mb-6 leading-relaxed'>
									{service.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
