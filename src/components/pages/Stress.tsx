import InfoPanel from '../InfoPanel';
import ImagePanel from '../ImagePanel';
import Image from 'next/image';

export default function Stress() {
	return (
		<div className="flex justify-center py-8 bg-gradient-to-b from-orange-700 to-yellow-500">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center">
					Cultural Responses to Stress
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<div className="flex flex-col gap-4">
						<InfoPanel title="Individualistic cultures">
							<p className="mb-4">
								People may focus on self-reliant activities to
								manage stress, such as meditation, journaling,
								or self-talk, because these cultures value
								personal emotional regulation and autonomy.
							</p>
						</InfoPanel>
						<InfoPanel title="Collectivistic cultures">
							<p className="mb-4">
								Individuals may lean on social support networks
								and prioritize strategies that maintain social
								harmony over confrontational approaches.
							</p>
						</InfoPanel>
						<InfoPanel title="Primary vs. Secondary Coping">
							<p className="mb-4">
								Primary coping is focused on directly changing
								the stressful situation itself by taking actions
								to solve the problem. Some examples of primary
								coping strategies are: taking a break, seeking
								help from a professional, or finding a new job.
								Secondary coping is focused on changing
								one&apos;s own thoughts, feelings, or behaviors
								to manage stress. Some examples of secondary
								coping strategies are: meditation, journaling,
								or self-talk.
							</p>
						</InfoPanel>
					</div>
					<ImagePanel>
						<Image
							src="/images/stress.webp"
							alt="Stress"
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
