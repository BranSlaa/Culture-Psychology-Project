import InfoPanel from '../InfoPanel';
import ImagePanel from '../ImagePanel';
import Image from 'next/image';

export default function WesternPerspectives() {
	return (
		<div className="flex justify-center py-8 bg-gradient-to-b from-red-700 to-blue-700">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center mb-4">
					Western Perspectives (Individualism)
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="flex flex-col gap-4">
						<InfoPanel title="Western Individualism">
							<p className="mb-4">
								Western individualism focuses on the unique
								qualities of the individual (Individualist vs.
								Collectivist Workplace Cultures: How They
								Differ, 2025). In Individualistic workplaces,
								the unique qualities and contributions of the
								individual are promoted, allowing these
								employees to earn recognition for their work.
							</p>
						</InfoPanel>

						<ImagePanel>
							<Image
								src="/images/western-individualism.webp"
								alt="Western Individualism"
								width={500}
								height={500}
								className="w-full h-full object-cover"
							/>
						</ImagePanel>
					</div>
					<InfoPanel title="">
						<h3 className="text-xl font-bold">
							Boundary management
						</h3>
						<p className="mb-4">
							Western cultures maintain the importance of
							separation between professional and personal life,
							which leads to policies like paid time off and
							shorter working hours.
						</p>
						<h3 className="text-xl font-bold">
							Personal achievement is prioritized.
						</h3>
						<p className="mb-4">
							In individualist cultures like the U.S., Canada, or
							Western Europe, people tend to define success by
							their personal goals and career performance. This
							often leads to long hours and difficulty “switching
							off” because work is seen as part of one&apos;s
							identity.
						</p>

						<h3 className="text-xl font-bold">
							Work and life are viewed as separate domains.
						</h3>
						<p className="mb-4">
							Western workers typically see “work” and “life” as
							distinct spheres that need to be balanced. This
							separation can cause stress when one spills into the
							other, since the goal is to keep clear boundaries.
						</p>

						<h3 className="text-xl font-bold">
							Autonomy and choice are highly valued.
						</h3>
						<p className="mb-4">
							Having personal control over one&apos;s schedule,
							job duties, and career direction is seen as
							essential. People in individualist cultures often
							associate balance with being free to make their own
							decisions about when and how to work.
						</p>

						<h3 className="text-xl font-bold">
							Burnout often comes from self-imposed pressure.
						</h3>
						<p className="mb-4">
							Because success is viewed as an individual
							responsibility, people tend to push themselves
							harder, even without external pressure from
							employers. This internal drive contributes to higher
							burnout rates in the West compared to collectivist
							regions.
						</p>

						<h3 className="text-xl font-bold">
							Formal workplace policies try to “fix” imbalance.
						</h3>
						<p className="mb-4">
							Many Western companies introduce benefits like
							flexible hours, paid leave, and remote work to
							promote balance. However, cultural norms of
							competitiveness and productivity often undermine
							these policies, causing people to still feel guilty
							for resting or taking time off.
						</p>
					</InfoPanel>
				</div>
			</div>
		</div>
	);
}
