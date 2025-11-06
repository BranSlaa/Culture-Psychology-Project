import InfoPanel from '../InfoPanel';
import ImagePanel from '../ImagePanel';
import Image from 'next/image';

export default function WesternPerspectives() {
	return (
		<div className="min-h-screen flex justify-center py-8 bg-blue-800">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-4xl font-bold text-center mb-4">
					Western Perspectives (Individualism)
				</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<InfoPanel title="Western Individualism">
						<p className="mb-4">
							Western individualism focuses on the unique
							qualities of the individual (Individualist vs.
							Collectivist Workplace Cultures: How They Differ,
							2025). In Individualistic workplaces, the unique
							qualities and contributions of the individual are
							promoted, allowing these employees to earn
							recognition for their work.
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
			</div>
		</div>
	);
}
