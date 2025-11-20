import Benefits from './components/landing-page/benefits';
import Footer from './components/landing-page/footer';
import Header from './components/landing-page/header';
import Hero from './components/landing-page/hero';
import HowItWorks from './components/landing-page/how-it-works';
import Newsletter from './components/landing-page/newsletter';
import Operator from './components/landing-page/operator';
import Services from './components/landing-page/services';
import Testimonials from './components/landing-page/testimonials';

export default function LandingPage() {
	return (
		<div className='min-h-screen'>
			<Header />
			{/* Hero Section */}
			<main>
				<Hero />
				<HowItWorks />
				<Services />
				<Benefits />
				<Operator />
				<Testimonials />
				<Newsletter />
				<Footer />
			</main>
		</div>
	);
}
