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
import { useState, useEffect, useRef } from 'react';

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
	const activeSectionRef = useRef(0);

	useEffect(() => {
		const scrollContainer = document.getElementById('scroll-container');
		if (!scrollContainer) return;

		const handleScroll = () => {
			const scrollTop = scrollContainer.scrollTop;
			const viewportHeight = window.innerHeight;
			const scrollPosition = scrollTop + viewportHeight / 3;

			let currentSection = -1;
			sections.forEach((section, index) => {
				const element = document.getElementById(section.id);
				if (element) {
					const { offsetTop } = element;
					const nextElement =
						index < sections.length - 1
							? document.getElementById(sections[index + 1].id)
							: null;
					const sectionEnd = nextElement
						? nextElement.offsetTop
						: scrollContainer.scrollHeight;

					if (
						scrollPosition >= offsetTop &&
						scrollPosition < sectionEnd
					) {
						currentSection = index;
					}
				}
			});

			if (
				currentSection !== -1 &&
				currentSection !== activeSectionRef.current
			) {
				activeSectionRef.current = currentSection;
				setActiveSection(currentSection);
			}
		};

		scrollContainer.addEventListener('scroll', handleScroll);
		handleScroll();
		return () =>
			scrollContainer.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (index: number) => {
		const element = document.getElementById(sections[index].id);
		element?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<>
			<div id="scroll-container" className="h-screen overflow-y-scroll">
				<div id="section1">
					<Title />
				</div>
				<div id="section2">
					<Definitions />
				</div>
				<div id="section3">
					<WesternPerspectives />
				</div>
				<div id="section4">
					<EasternPerspectives />
				</div>
				<div id="section5">
					<CrossCulturalComparison />
				</div>
				<div id="section6">
					<BurnoutWorkaholism />
				</div>
				<div id="section7">
					<Stress />
				</div>
				<div id="section8">
					<WLBDeterminants />
				</div>
				<div id="section9">
					<Reflection />
				</div>
				<div id="section10">
					<References />
				</div>
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
