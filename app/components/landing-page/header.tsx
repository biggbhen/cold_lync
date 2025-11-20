'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='sticky top-0 z-50 bg-white border-b border-border'>
			<nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
				<div className='flex items-center gap-2'>
					<div className='w-8 h-8 bg-[#3493F2] rounded-lg flex items-center justify-center text-white font-bold'>
						C
					</div>
					<span className='font-bold text-lg text-foreground'>ColdLync</span>
				</div>

				{/* Desktop Navigation */}
				<div className='hidden md:flex items-center gap-8'>
					<Link
						href='#'
						className='text-foreground hover:text-primary transition'>
						Home
					</Link>
					<Link
						href='#'
						className='text-foreground hover:text-primary transition'>
						Book Cold Transport
					</Link>
					<Link
						href='#'
						className='text-foreground hover:text-primary transition'>
						About Us
					</Link>
					<Link
						href='#'
						className='text-foreground hover:text-primary transition'>
						Track Delivery
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<button className='md:hidden p-2' onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>

				<Button className='hidden md:flex gap-2 bg-[#3493F2] text-white hover:bg-[#3493F2]/90'>
					Join as Operator
				</Button>

				{/* Mobile Menu */}
				{isOpen && (
					<div className='absolute top-full left-0 right-0 bg-white border-b border-border md:hidden'>
						<div className='flex flex-col gap-4 p-4'>
							<Link
								href='#'
								className='text-foreground hover:text-primary transition'>
								Home
							</Link>
							<Link
								href='#'
								className='text-foreground hover:text-primary transition'>
								Book Cold Transport
							</Link>
							<Link
								href='#'
								className='text-foreground hover:text-primary transition'>
								About Us
							</Link>
							<Link
								href='#'
								className='text-foreground hover:text-primary transition'>
								Track Delivery
							</Link>
							<Button className='w-full bg-[#3493F2] text-white hover:bg-[#3493F2]/90'>
								Join as Operator
							</Button>
						</div>
					</div>
				)}
			</nav>
		</header>
	);
}
