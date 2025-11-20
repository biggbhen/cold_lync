import Image from 'next/image';
import bookTransportImg from '@/app/assets/book_transport.png';
import assignOperatorImg from '@/app/assets/assign_operator.png';
import trackAndConfirmImg from '@/app/assets/track_and_confirm.png';

export default function HowItWorks() {
	const steps = [
		{
			title: 'Book Your Cold Transport',
			description:
				'Fill a short form with pickup, drop-off, cargo type, and temperature requirements. No login required, no waiting; get a confirmed booking fast.',
			img: bookTransportImg,
		},
		{
			title: 'Get Assigned a Verified Operator',
			description:
				'Our team assigns the right cold truck for your shipment. Only fully vetted operators with compliant trucks handle your goods.',
			img: assignOperatorImg,
		},
		{
			title: 'Track & Confirm Delivery',
			description:
				'Receive updates via WhatsApp/SMS. Proof of delivery is confirmed by photo and signature.',
			img: trackAndConfirmImg,
		},
	];

	return (
		<section className='py-20 md:py-28 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-6'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
						How ColdLync Works
					</h2>
					<p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
						From booking to delivery, we handle the heavy lifting so your cargo
						stays safe and on time.
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-10'>
					{steps.map((step, index) => (
						<div key={index} className='relative'>
							<div className='bg-white shadow-lg border p-8 rounded-lg h-full'>
								<div className='mb-4 text-center mx-auto rounded-full w-[100px] h-[100px] flex items-center justify-center relative'>
									<Image
										src={step.img}
										alt={step.title}
										fill
										className='object-cover'
									/>
								</div>
								<h3 className='text-xl font-bold text-center mb-3'>
									{step.title}
								</h3>
								<p className='leading-relaxed text-center'>
									{step.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
