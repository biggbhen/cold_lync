import Image from 'next/image';
import verifiedColdTrucksImg from '@/app/assets/Shield.png';
import temperatureControlledHandlingImg from '@/app/assets/ice-box.png';
import transparentPricingImg from '@/app/assets/Secure Payment.png';
import antiTamperSecurityImg from '@/app/assets/Thumbsup.png';

export default function Benefits() {
	const services = [
		{
			title: 'Verified Cold Trucks Only',
			description:
				'Every operator on the platform passes a compliance check. Truck documents, refrigeration status, and maintenance records are reviewed before approval.',
			img: verifiedColdTrucksImg,
		},
		{
			title: 'Temperature-Controlled Handling',
			description:
				'Operators are required to submit pre-cooling photos, pickup temperature readings, and delivery temperature evidence ensuring your cargo stays within temperature range.',
			img: temperatureControlledHandlingImg,
		},
		{
			title: 'Transparent, Upfront Pricing',
			description:
				'ColdLync removes the guesswork. Shippers see their price before payment, with no bidding wars and no surprise charges. .',
			img: transparentPricingImg,
		},
		{
			title: 'Anti-Tamper Security',
			description:
				'Every shipment is secured with a unique delivery verification code that only the shipper and ColdLync admin can see it.',
			img: antiTamperSecurityImg,
		},
	];

	return (
		<section className='py-20 md:py-28'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
						Why Businesses Choose ColdLync
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						Operational reliability backed by verified cold trucks, enforceable
						processes, and transparent pricing.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-6'>
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
