import InfoPanel from '../InfoPanel';
import ImagePanel from '../ImagePanel';
import Image from 'next/image';

export default function EasternPerspectives() {
	return (
		<div className="flex justify-center py-8 bg-gradient-to-b from-blue-700 to-green-700">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center mb-4">
					Eastern Perspectives (Collectivism)
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="flex flex-col gap-4">
						<InfoPanel title="Eastern Collectivism">
							<p className="mb-4">
								Collectivism is defined as the degree to which
								individuals express pride, loyalty, cohesiveness
								in their organizations or families (Haar et.
								al., 2014).
							</p>
							<p className="mb-4">
								Eastern collectivism tends to focus on the
								achievements and efforts of the group, even if
								only a few members are responsible for the
								outcome. In these cultures the primary focus is
								the greater good of the organization or team
								(Individualist vs. Collectivist Workplace
								Cultures: How They Differ, 2025).
							</p>
						</InfoPanel>
						<InfoPanel title="">
							<h3 className="text-xl font-bold">
								Group harmony comes before personal goals.
							</h3>
							<p className="mb-4">
								In collectivist cultures like China, Japan,
								Korea, and many parts of Southeast Asia, people
								often prioritize the needs of the group. This
								means putting family, company, or community over
								their own preferences. This can make long
								working hours feel like a duty rather than an
								individual choice.
							</p>
							<h3 className="text-xl font-bold">
								Work is tied to social belonging and loyalty.
							</h3>
							<p className="mb-4">
								Staying late or showing constant dedication is
								seen as a sign of respect and commitment to
								one's organization. Employees often equate hard
								work with loyalty to their team or employer.
							</p>
							<h3 className="text-xl font-bold">
								Social support softens stress.
							</h3>
							<p className="mb-4">
								Because relationships and interdependence are
								central, workers usually have stronger family or
								coworker support networks. This social buffering
								can reduce emotional exhaustion even when
								workloads are high.
							</p>
							<h3 className="text-xl font-bold">
								Balance is viewed as integration, not
								separation.
							</h3>
							<p className="mb-4">
								Rather than keeping “work” and “life” separate,
								many Eastern perspectives see them as
								intertwined parts of one's societal role.
								Maintaining harmony across roles (employee,
								parent, child) is valued more than strict
								boundaries between them.
							</p>
							<h3 className="text-xl font-bold">
								Cultural norms discourage open expression of
								burnout.
							</h3>
							<p className="mb-4">
								In collectivist settings, people may hide
								fatigue or dissatisfaction to avoid burdening
								others or disrupting group harmony. As a result,
								overwork can persist longer before being
								addressed, even though social ties help cushion
								its effects.
							</p>
						</InfoPanel>
					</div>
					<ImagePanel>
						<Image
							src="/images/eastern-collectivism.webp"
							alt="Eastern Collectivism"
							width={500}
							height={500}
							className="w-full h-full object-cover"
						/>
					</ImagePanel>
				</div>
			</div>
		</div>
	);
}
