import InfoPanel from '@/components/InfoPanel';

export default function Definitions() {
	return (
		<div className="min-h-screen flex justify-center bg-red-800">
			<div className="max-w-7xl mx-auto px-4 py-8 gap-4 flex flex-col">
				<h1 className="text-5xl font-bold text-center">Key Concepts</h1>
				<div className="grid md:grid-cols-2 gap-4">
					<InfoPanel title="Key Definitions">
						<h3 className="text-xl font-bold">Work-Life Balance</h3>
						<p className="mb-4">
							Work is defined as paid employment, and life is
							everything that is outside of paid employment (Amjad
							et. al., 2019). Work-life balance is the balance
							between work and life, and is a key concept in the
							study of work-life balance.
						</p>
						<p className="mb-4">
							Using SEM analysis, Haar et. al. (2014) found that
							across 7 countries, WLB was positively related to
							job and life satisfaction and negatively related to
							anxiety and depression.
						</p>
						<h3 className="text-xl font-bold">Workaholism</h3>
						<p className="mb-4">
							A workaholic is defined as an individual who creates
							a disturbance in personal health, happiness,
							relationships and social function by showing an
							excessive obsession or need for work (Cheung, 2018).
						</p>
						<h3 className="text-xl font-bold">Burnout</h3>
						<p className="mb-4">
							Defined as a psychological condition characterized
							by tiredness, cynicism, and ineffectiveness at work,
							affecting how employees perceive themselves and
							others at work (Rossi et al., 2023).
						</p>
						<h3 className="text-xl font-bold">Stress</h3>
						<p className="mb-4">
							Stress is the process by which we perceive
							threatening or challenging events called stressors
							(Myers, 2021, p442). In the presence of stressors,
							our hypothalamic-pituitary-adrenal (HPA) axis
							produces corticotrophin by the hypothalamus, which
							triggers the anterior pituitary gland to produce
							adrenocorticotropic hormone, which in term
							stimulates the adrenal glands to produce cortisol
							(Smyth et. al., 2020). This bodily response is what
							we call stress.
						</p>
					</InfoPanel>
					<InfoPanel title="The Primary Comparison">
						<h3 className="text-xl font-bold text-center">
							Individualism vs. Collectivism
						</h3>
						<h4 className="text-lg font-bold">Individualism</h4>
						<p className="mb-4">
							A culture that gives priority to personal goals over
							group goals, and is defined by one's personal
							attributions over group identifications (Myers,
							2021, p146).
						</p>
						<h4 className="text-lg font-bold">Collectivism</h4>
						<p className="mb-4">
							A culture that gives priority to one's group, and
							defines one's identity by group attributions over
							personal (Myers, 2021, p147).
						</p>
						<h3 className="text-xl font-bold text-center">
							Hofstede Framework
						</h3>
						<p className="mb-4">
							One of the 6 values that Hofstede identified is
							Collectivism vs Individualism, which is the degree
							that groups encourage tendencies for their members
							to look after themselves and their immediate family
							only, or for them to belong to a larger in-group
							community that collectively looks after its members
							in exchange for loyalty (Matsumoto, 2023, p23).
						</p>
					</InfoPanel>
				</div>
				<div className="grid md:grid-cols-3 gap-4">
					<InfoPanel title="Work-family conflict">
						<p className="mb-4">
							Work-Family Conflict (WFC) is a 'negative spillover'
							of emotional and behavioral demands between work and
							family that causes stress, anxiety, and burnout.
						</p>
						<p className="mb-4">
							Work-family conflict leads to increased work-related
							stress, less appetite, anxiety, tension, fatigue,
							depression, increased family distress and job
							burnout (Amjad et. al., 2019).
						</p>
					</InfoPanel>
					<InfoPanel title="Overwork & Burnout Cycle">
						<p className="mb-4">
							A period of overwork, followed by a burnout phase
							that can last weeks to months. Burnout is caused by
							prolonged stressors between interpersonal and work
							efforts, which start to take physical or mental
							responses such as exhaustion, detachment from work,
							or lack of accomplishment.
						</p>
					</InfoPanel>
					<InfoPanel title="Leisure & recovery time">
						<p className="mb-4">
							Time spent performing activities that are free from
							work, family or societal duties. The purpose of the
							activities should be diverse, such as relaxation or
							acquiring a new skill for fun (Takiguchi et. al.,
							2023).
						</p>
					</InfoPanel>
				</div>
			</div>
		</div>
	);
}
