import type { Metadata } from 'next';
// import { Geist, Geist_Mono } from 'next/font/google';
import '../../app/globals.css';
import Header from '../components/landing-page/header';
import Footer from '../components/landing-page/footer';
import Newsletter from '../components/landing-page/newsletter';

// const geistSans = Geist({
// 	variable: '--font-geist-sans',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
// 	variable: '--font-geist-mono',
// 	subsets: ['latin'],
// });

export const metadata: Metadata = {
	title: 'About - ColdLync | Cold Chain Logistics in Nigeria',
	description:
		"Learn more about ColdLync, Nigeria's first comprehensive cold-chain logistics and storage platform.",
	generator: 'v0.app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Header />
			<main className=''>{children}</main>
			<Newsletter />
			<Footer />
		</div>
	);
}
