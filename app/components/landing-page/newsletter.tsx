'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export default function Newsletter() {
	const [email, setEmail] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle newsletter subscription
		console.log('Subscribed:', email);
		setEmail('');
	};

	return (
		<section className='py-6 bg-white border-t-40 border-[#0F173D]'>
			<div className='flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-8'>
				<div>
					<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-2'>
						Stay in the Loop with ColdLync!
					</h2>
					<p className='text-lg text-muted-foreground'>
						Subscribe to our newsletter and be the first to discover exclusive
						deals, and new arrivals.
					</p>
				</div>
				<div>
					<form
						onSubmit={handleSubmit}
						className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
						<input
							type='email'
							placeholder='Your email address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className='flex-1 px-4 py-3 rounded-lg border border-border bg-white text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary'
						/>
						<Button
							type='submit'
							className='bg-primary text-primary-foreground hover:bg-primary/90 px-6'>
							Subscribe
						</Button>
					</form>
				</div>
			</div>
		</section>
	);
}
