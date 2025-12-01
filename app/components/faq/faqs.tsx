'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
	{
		id: 'what-is-coldlync',
		question: 'What is ColdLync?',
		answer:
			'ColdLync is a digital cold-chain logistics network that connects businesses needing temperature-controlled transport with vetted cold-chain vehicle operators.',
	},
	{
		id: 'who-can-use-coldlync',
		question: 'Who can use ColdLync?  ',
		answer:
			'ColdLync is designed for businesses (MSMEs) and large organizations that need temperature-controlled transport for their goods. It is also designed for operators who own cold-chain vehicles that want to offer their services to businesses.',
	},
	{
		id: 'which-cities-or-regions-are-you-available',
		question: 'In which cities or regions are you available?  ',
		answer:
			'We are currently available in Lagos State. You can check if we deliver to your area by entering your location in the app/website.',
	},
	{
		id: 'do-i-need-an-account-to-use-the-platform',
		question: 'Do I need an account to use the platform?   ',
		answer:
			'Yes. Creating an account helps us personalize your tools and maintain secure, compliant operations. You can create an account by clicking on the "Sign Up" button on the top right corner of the page.',
	},
	{
		id: 'how-do-i-book-a-cold-chain-vehicle',
		question: 'How do I book a cold chain vehicle?  ',
		answer:
			'To book a cold chain vehicle, login, create a shipment, input route and product details, get pricing, pay, and get your assigned operator.',
	},
	{
		id: 'do-you-provide-instant-pickups',
		question: 'Do you provide instant Pickups?',
		answer:
			'Yes. If an operator is available within your zone, you can request immediate pickup. Otherwise, you will be prompted to schedule.',
	},
	{
		id: 'is-it-possible-to-book-a-cold-transport-for-a-later-time',
		question: 'Is it possible to book a cold transport for a later time?',
		answer:
			'Yes. You can book a cold transport for a later time. You will be prompted to select a date and time when you create a shipment.',
	},
	{
		id: 'when-do-i-pay',
		question: 'When do I pay? ',
		answer:
			'Shippers pay before dispatch. This protects operators, reduces cancellations, and streamlines operations.',
	},
	{
		id: 'how-do-i-confirm-successful-delivery',
		question: 'How do I confirm successful delivery?',
		answer:
			'Your assigned operator must provide the unique delivery code generated for your shipment. Delivery is only marked “Completed” after this code is verified.',
	},
	// {
	// 	id: 'how-is-pricing-calculated',
	// 	question: ' How is pricing calculated? ',
	// 	answer:
	// 		'Delivery times can differ based on your location, the restaurant\'s preparation time, and traffic conditions. The estimated delivery time appears at checkout.',
	// },
];

export default function Faqs() {
	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mb-8'>
			<Accordion type='single' collapsible defaultValue='what-is-parrotica'>
				{faqs.map((faq) => (
					<AccordionItem
						key={faq.id}
						value={faq.id}
						className='border-b border-border py-4'>
						<AccordionTrigger className='text-lg font-semibold hover:no-underline'>
							{faq.question}
						</AccordionTrigger>
						<AccordionContent className='text-base text-muted-foreground pt-2'>
							{faq.answer}
						</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
}
