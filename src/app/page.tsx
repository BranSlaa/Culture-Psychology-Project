'use client';

import Title from '@/components/pages/Title';
import Definitions from '@/components/pages/Definitions';
import WesternPerspectives from '@/components/pages/WesternPerspectives';
import EasternPerspectives from '@/components/pages/EasternPerspectives';
import CrossCulturalComparison from '@/components/pages/CrossCulturalComparison';
import BurnoutWorkaholism from '@/components/pages/BurnoutWorkaholism';
import Stress from '@/components/pages/Stress';
import WLBDeterminants from '@/components/pages/WLBDeterminants';
import Reflection from '@/components/pages/Reflection';
import References from '@/components/pages/References';
import { useState, useEffect } from 'react';

const sections = [
	{ id: 'section1', name: 'Title' },
	{ id: 'section2', name: 'Definitions' },
	{ id: 'section3', name: 'Western Perspectives (Individualism)' },
	{ id: 'section4', name: 'Eastern Perspectives (Collectivism)' },
	{ id: 'section5', name: 'Cross-Cultural Comparison' },
	{ id: 'section6', name: 'Burnout and Workaholism' },
	{ id: 'section7', name: 'Cultural Responses to Stress' },
	{ id: 'section8', name: 'Determinants of Work-life Balance' },
	{ id: 'section9', name: 'Actionable takeaways / Reflection' },
	{ id: 'section10', name: 'References and Credits' },
];

export default function Home() {
	const [activeSection, setActiveSection] = useState(0);

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container');
		if (!scrollContainer) return;

		const handleScroll = () => {
			const scrollPosition =
				scrollContainer.scrollTop + window.innerHeight / 2;
			const currentSection = sections.findIndex((_, index) => {
				const element = document.getElementById(sections[index].id);
				if (element) {
					const { offsetTop, offsetHeight } = element;
					return (
						scrollPosition >= offsetTop &&
						scrollPosition < offsetTop + offsetHeight
					);
				}
				return false;
			});
			if (currentSection !== -1) {
				setActiveSection(currentSection);
			}
		};

		scrollContainer.addEventListener('scroll', handleScroll);
		return () =>
			scrollContainer.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (index: number) => {
		const element = document.getElementById(sections[index].id);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<div
				id="scroll-container"
				className="h-screen overflow-y-scroll snap-y snap-mandatory"
			>
				<Title />
				<Definitions />
				<WesternPerspectives />
				<EasternPerspectives />
				<CrossCulturalComparison />
				<BurnoutWorkaholism />
				<Stress />
				<WLBDeterminants />
				<Reflection />
				<References />
				{/* {sections.map((section, index) => (
					<section
						key={section.id}
						id={section.id}
						className={`h-screen snap-start flex items-center justify-center ${section.color}`}
					>
						<div className="text-center">
							<h1 className="text-6xl font-bold text-white mb-4">
								{section.name}
							</h1>
							<p className="text-xl text-white/80">
								Section {index + 1}
							</p>
						</div>
					</section>
				))} */}
			</div>

			{/* Navigation Sidebar */}
			<nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
				{sections.map((section, index) => (
					<div key={section.id} className="relative group">
						<button
							onClick={() => scrollToSection(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								activeSection === index
									? 'bg-white scale-125'
									: 'bg-white/40 hover:bg-white/70'
							}`}
							aria-label={`Go to ${section.name}`}
						/>
						<span className="absolute right-6 top-1/2 -translate-y-1/2 bg-white text-slate-900 px-3 py-1 rounded text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
							{section.name}
						</span>
					</div>
				))}
			</nav>
		</>
	);
}
