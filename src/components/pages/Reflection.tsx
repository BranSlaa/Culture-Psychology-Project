import InfoPanel from '../InfoPanel';

export default function Reflection() {
	return (
		<div className="flex justify-center py-8 bg-gradient-to-b from-indigo-700 to-fuchsia-700">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center">
					Actionable takeaways / Reflection
				</h1>
				<InfoPanel title="Actionable takeaways and reflection">
					<h3 className="text-xl font-bold">
						One size does not fit all.
					</h3>
					<p className="mb-4">
						Balance may look different across cultures. In Western
						cultures, emphasies is on boundaries and personal time,
						while in Eastern cultures, work is integrated into the
						lifestyle through a sense of duty and social harmony.
						True balance requires an understanding of which approach
						aligns with your personal values and life context.
					</p>
					<h3 className="text-xl font-bold">
						Time off is great, but social support is key.
					</h3>
					<p className="mb-4">
						In a collectivist cultures, family and friends act as a
						buffer against stress and burnout (Amjad et. al., 2019).
						Western workplaces often lack this support network, and
						could benefit by encouraging mentoring relationships,
						peer connection, and open discussions about stress.
					</p>
					<h3 className="text-xl font-bold">
						Autonomy and flexibility reduce burnout everywhere.
					</h3>
					<p className="mb-4">
						Both Cheung et. al. (2018) and Haar et. al. (2014)
						showed that having control over one&apos;s work lowers
						exhaustion and improves satisfaction. Regardless of
						culture, giving employees more say in how and when they
						work will help support a healthier work-life balance.
					</p>
					<h3 className="text-xl font-bold">
						Overwork can be normalized by cultural norms.
					</h3>
					<p className="mb-4">
						In collectivist cultures, overwork may be seen as a sign
						of dedication and loyalty. However in individualistic
						cultures, ambition shows the same virtues. Understanding
						these cultural differences helps people set boundaries
						to prevent burnout before it becomes too late.
					</p>
					<h3 className="text-xl font-bold">
						Employee well-being should be measured by more than just
						productivity.
					</h3>
					<p className="mb-4">
						In order to maximize long term performance at work,
						leisure, rest and non-work activities are essential.
						Both the organization and employees should track
						employee recovery from work, not just their
						productivity. This will ensure that they are not
						overworked and are taking the time to rest and recover.
					</p>
				</InfoPanel>
			</div>
		</div>
	);
}
