import InfoPanel from '../InfoPanel';
import ComparisonTable from '../ComparisonTable';

const tableData = [
	{
		factor: 'Job demands',
		usMean: 2.47,
		usSD: 0.58,
		chinaMean: 2.9,
		chinaSD: 0.61,
		tValue: 16.9,
		isSignificant: true,
	},
	{
		factor: 'Job autonomy',
		usMean: 2.79,
		usSD: 0.75,
		chinaMean: 3.07,
		chinaSD: 0.79,
		tValue: 8.42,
		isSignificant: false,
	},
	{
		factor: 'Workaholism',
		usMean: 2.34,
		usSD: 0.79,
		chinaMean: 3.28,
		chinaSD: 0.84,
		tValue: -27.13,
		isSignificant: true,
	},
	{
		factor: 'Emotional exhaustion',
		usMean: 2.77,
		usSD: 1.69,
		chinaMean: 2.42,
		chinaSD: 1.67,
		tValue: 4.85,
		isSignificant: true,
	},
	{
		factor: 'Depersonalization',
		usMean: 2.66,
		usSD: 1.69,
		chinaMean: 2.72,
		chinaSD: 1.44,
		tValue: -0.81,
		isSignificant: false,
	},
	{
		factor: 'Personal accomplishment',
		usMean: 1.41,
		usSD: 1.06,
		chinaMean: 1.72,
		chinaSD: 1.27,
		tValue: -6.29,
		isSignificant: true,
	},
];

export default function CrossCulturalComparison() {
	return (
		<div className="min-h-screen flex justify-center py-8 bg-cyan-700">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center mb-4">
					Cross-Cultural Comparison
				</h1>
				<InfoPanel title="Comparison between China and the United States">
					<ComparisonTable
						data={tableData}
						cite="Cheung et. al., 2018"
					/>
				</InfoPanel>
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
