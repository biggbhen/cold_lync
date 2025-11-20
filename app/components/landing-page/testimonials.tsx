export default function Testimonials() {
	const testimonials = [
		{
			name: 'G.O Akinmolayan',
			title: 'Lecturer & Cold Chain Advocate',
			text: 'ColdLync has transformed the way perishable goods are transported in Lagos. Their dedication to compliance, temperature control, and timely delivery makes them a trusted partner for anyone serious about cold chain logistics.',
			avatar: 'GA',
		},
		{
			name: 'E.S Sawyerr',
			title: 'Founder, Figorate - Protein Supply',
			text: "Partnering with ColdLync has given our business reliability we've never had before. From chilled meats to frozen products, their trucks and storage solutions ensure our supply chain stays consistent and our customers stay satisfied.",
			avatar: 'ES',
		},
	];

	return (
		<section className='py-20 md:py-28'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-4'>
						Trusted by Professionals in the Cold Chain Industry
					</h2>
					<p className='text-lg text-muted-foreground'>
						Hear from those who rely on ColdLync to keep their goods safe,
						fresh, and on time.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className='bg-white rounded-lg p-8 border border-border'>
							<div className='flex items-center gap-4 mb-6'>
								<div className='w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold'>
									{testimonial.avatar}
								</div>
								<div>
									<h4 className='font-bold text-foreground'>
										{testimonial.name}
									</h4>
									<p className='text-sm text-muted-foreground'>
										{testimonial.title}
									</p>
								</div>
							</div>
							<p className='text-muted-foreground leading-relaxed italic'>
								&quot;{testimonial.text}&quot;
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
