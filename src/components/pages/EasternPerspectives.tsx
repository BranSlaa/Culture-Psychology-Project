import InfoPanel from '../InfoPanel';
import ImagePanel from '../ImagePanel';
import Image from 'next/image';

export default function EasternPerspectives() {
	return (
		<div className="min-h-screen flex justify-center py-8 bg-green-800">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center mb-4">
					Eastern Perspectives (Collectivism)
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<InfoPanel title="Eastern Collectivism">
						<p className="mb-4">
							Collectivism is defined as the degree to which
							individuals express pride, loyalty, cohesiveness in
							their organizations or families (Haar et. al.,
							2014).
						</p>
						<p className="mb-4">
							Eastern collectivism tends to focus on the
							achievements and efforts of the group, even if only
							a few members are responsible for the outcome. In
							these cultures the primary focus is the greater good
							of the organization or team (Individualist vs.
							Collectivist Workplace Cultures: How They Differ,
							2025).
						</p>
					</InfoPanel>
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
