import React from 'react';
import Hero from '../components/about-page/hero';
import Operator from '../components/about-page/operator';
import Values from '../components/about-page/values';
import WhoWeAre from '../components/about-page/who-we-are';

const Page = () => {
	return (
		<div>
			<Hero />
			<WhoWeAre />
			<Values />
			<Operator />
		</div>
	);
};

export default Page;
