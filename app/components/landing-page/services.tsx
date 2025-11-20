import { Button } from '@/components/ui/button';
import chilledGoodsTransportImg from '@/app/assets/chilled_goods_img.png';
import frozenGoodsTransportImg from '@/app/assets/frozen_goods_img.png';
import sensitiveCargoImg from '@/app/assets/sensitive_goods.png';
import Image from 'next/image';

export default function Services() {
	const services = [
		{
			title: 'Chilled Goods Transport',
			description:
				'Keep perishable items fresh with our chilled trucks, perfect for dairy, produce, and prepared foods.',
			img: chilledGoodsTransportImg,
		},
		{
			title: 'Frozen Goods Transport',
			description:
				'Maintain sub-zero temperatures for frozen foods, meats, and pharma products throughout the journey.',
			img: frozenGoodsTransportImg,
		},
		{
			title: 'Sensitive Cargo',
			description:
				'Specialized temperature control for pharmaceuticals, vaccines, and sensitive chemicals.',
			img: sensitiveCargoImg,
		},
	];

	return (
		<section>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
						Our Cold Chain Services
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						End-to-end temperature-controlled solutions, transport and storage
						designed for every shipment.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div key={index} className={`flex flex-col shadow-lg`}>
							<div className='h-[200px] relative'>
								<Image
									src={service.img}
									alt={service.title}
									fill
									className='object-cover'
								/>
							</div>
							<div className='p-8 bg-[#0F173D] rounded-b-lg'>
								<h3 className='text-xl font-bold text-white text-center mb-3'>
									{service.title}
								</h3>
								<p className='text-center text-white/90 mb-6 leading-relaxed'>
									{service.description}
								</p>
								<Button
									variant='outline'
									className='border-primary bg-[#3493F2] text-white hover:bg-[#3493F2]/90 w-full hover:text-white/90 cursor-pointer'>
									Book Now
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
