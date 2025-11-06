import InfoPanel from '../InfoPanel';

export default function CrossCulturalComparison() {
	return (
		<div className="flex justify-center py-8 bg-gradient-to-b from-green-700 to-cyan-700">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center mb-4">
					Cross-Cultural Comparison
				</h1>

				<InfoPanel title="Individualism vs. Collectivism">
					<p className="mb-4">
						Individualistic individuals tend to prioritize personal
						interests over common goals, whereas in collectivist
						cultures individuals tend to prioritize common and
						familial goals over personal needs (Haar et. al., 2014).
						Haar et. al. (2014) also found that A healthy work-life
						balance is more important to individuals in
						individualistic cultures than in collectivist cultures.
					</p>
					<p className="mb-4">
						At low levels of WLB, individualistic cultures reported
						higher job and life satisfaction than collectivist
						cultures. As WLB improved, individualistic cultures
						stayed relatively stable, while at high levels of
						work-life balance collectivistic cultures saw a drop in
						W/L satisfaction (Haar et. al., 2014). High levels of
						WLB were more positively associated with job and life
						satisfaction for individuals in individualistic cultures
						compared to collectivistic cultures (Haar et. al.,
						2014).
					</p>
				</InfoPanel>
				<InfoPanel title="Working Hours">
					<p className="mb-4">
						As seen by Haar et. al. (2014), A healthy work-life
						balance is more important to individuals in
						individualistic cultures than in collectivistic
						cultures. Individuals in Collectivistic cultures tend to
						work longer hours than in Individualistic, with as low
						as 1-2% of employees in Sweden and Denmark working very
						long hours, while workers in Hong Kong average over 50
						hours a week (Davies, 2017).
					</p>
				</InfoPanel>
			</div>
		</div>
	);
}
