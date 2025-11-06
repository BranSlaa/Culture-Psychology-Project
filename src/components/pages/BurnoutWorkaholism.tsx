import Image from 'next/image';
import ImagePanel from '../ImagePanel';
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

export default function BurnoutWorkaholism() {
	return (
		<div className="flex justify-center py-8 bg-gradient-to-b from-cyan-700 to-orange-700">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center">
					Burnout and Workaholism
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<ImagePanel>
						<Image
							src="/images/burnout.webp"
							alt="Burnout"
							width={500}
							height={500}
							className="w-full h-full object-cover"
						/>
					</ImagePanel>
					<div className="flex flex-col gap-4">
						<InfoPanel title="Burnout">
							<p className="mb-4">
								Burnout is a state of physical, emotional, and
								mental exhaustion caused by chronic stress.
								Burnout is often measured on 3 scales that
								measure emotional exhaustion, depersonalization
								and personal accomplishment. Cheung et. al.
								(2018) measured participants using the 16 item
								Maslach Burnout Inventory-General Survey. They
								found that compared to American participants,
								Chinese workers reported higher job demand, job
								autonomy workaholism, and professional
								inefficacy, however Chinese participants were
								associated with lower emotional exhaustion than
								American workers.
							</p>
						</InfoPanel>
						<InfoPanel title="Comparison between China and the United States">
							<ComparisonTable
								data={tableData}
								cite="Cheung et. al., 2018"
							/>
						</InfoPanel>
						<InfoPanel title="Workaholism">
							<p className="mb-4">
								Workaholism is brought about by many things.
								Some individuals just like working long hours,
								whereas others are required to do so by means
								outside their control, such as from looming
								deadlines or being understaffed.
							</p>
						</InfoPanel>
					</div>
				</div>
			</div>
		</div>
	);
}
