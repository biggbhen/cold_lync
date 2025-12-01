'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Users, Truck, Shield, Headphones } from 'lucide-react';
import Image from 'next/image';
import accountSecurityImg from '@/app/assets/Account_security.png';
import operatorImg from '@/app/assets/operators.png';
import shippers from '@/app/assets/shippers.png';
import support from '@/app/assets/support.png';
import { useState } from 'react';

export function FAQHeader() {
	const [searchQuery, setSearchQuery] = useState('');

	const categories = [
		{
			id: 'shippers',
			label: 'Shippers',
			icon: shippers,
		},
		{
			id: 'operators',
			label: 'Operators',
			icon: operatorImg,
		},
		{
			id: 'security',
			label: 'Account & Security',
			icon: accountSecurityImg,
		},
		{
			id: 'support',
			label: 'Support & Issues',
			icon: support,
		},
	];

	const handleSearch = () => {
		if (searchQuery.trim()) {
			console.log('Searching for:', searchQuery);
		}
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative'>
			{/* Header */}
			<div className='text-center mb-12'>
				<h1 className='text-4xl font-bold text-foreground mb-3'>
					Frequently Asked Questions
				</h1>
				<p className='text-lg text-muted-foreground'>
					Have questions, feedback, or need help? Our team is here to assist
					you.
				</p>
			</div>

			{/* Category Cards */}
			<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
				{categories.map((category) => {
					const IconComponent = category.icon;
					return (
						<div
							key={category.id}
							className='flex flex-col items-center justify-center p-8 rounded-lg border border-border bg-card hover:bg-accent transition-colors cursor-pointer'>
							<Image
								src={IconComponent}
								alt={category.label}
								width={50}
								height={50}
								className=' text-blue-600 mb-3'
							/>
							<p className='text-center font-medium text-foreground text-sm md:text-base'>
								{category.label}
							</p>
						</div>
					);
				})}
			</div>

			{/* Search Bar */}
			<div className='flex gap-2 max-w-4xl mx-auto'>
				<div className='relative flex-1'>
					<Search className='absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground' />
					<Input
						type='text'
						placeholder='Search questions, keywords, topics'
						value={searchQuery}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							setSearchQuery(e.target.value)
						}
						onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
							e.key === 'Enter' && handleSearch()
						}
						className='pl-12 py-6 text-base'
					/>
				</div>
				<Button
					onClick={handleSearch}
					className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 font-semibold'>
					Search
				</Button>
			</div>
		</div>
	);
}
