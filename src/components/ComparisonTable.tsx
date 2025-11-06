interface TableRow {
	factor: string;
	usMean: number;
	usSD: number;
	chinaMean: number;
	chinaSD: number;
	tValue: number;
	isSignificant: boolean;
}

interface ComparisonTableProps {
	data: TableRow[];
	cite: string;
}

export default function ComparisonTable({ data, cite }: ComparisonTableProps) {
	return (
		<div className="overflow-x-auto">
			<table className="w-full border-collapse">
				<thead>
					<tr className="border-b-2 border-black">
						<th className="text-left p-2 font-bold"></th>
						<th
							colSpan={2}
							className="text-center p-2 font-bold border-x-2 border-black"
						>
							United States
						</th>
						<th
							colSpan={2}
							className="text-center p-2 font-bold border-r-2 border-black"
						>
							China
						</th>
						<th className="text-center p-2 font-bold">t</th>
					</tr>
					<tr className="border-b-2 border-black">
						<th className="text-left p-2 font-medium"></th>
						<th className="text-center p-2 font-medium border-x-2 border-black">
							M
						</th>
						<th className="text-center p-2 font-medium border-r-2 border-black">
							SD
						</th>
						<th className="text-center p-2 font-medium border-x-2 border-black">
							M
						</th>
						<th className="text-center p-2 font-medium border-r-2 border-black">
							SD
						</th>
						<th className="text-center p-2 font-medium"></th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr
							key={row.factor}
							className={
								index < data.length - 1
									? 'border-b border-gray-300'
									: ''
							}
						>
							<td className="p-2 font-medium">{row.factor}</td>
							<td className="text-center p-2 border-x-2 border-black">
								{row.usMean.toFixed(2)}
							</td>
							<td className="text-center p-2 border-r-2 border-black">
								{row.usSD.toFixed(2)}
							</td>
							<td className="text-center p-2 border-x-2 border-black">
								{row.chinaMean.toFixed(2)}
							</td>
							<td className="text-center p-2 border-r-2 border-black">
								{row.chinaSD.toFixed(2)}
							</td>
							<td className="text-center p-2">
								{row.tValue.toFixed(2)}
								{row.isSignificant && '**'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<p className="text-sm mt-4 text-gray-600">**p &lt; 0.01</p>
			<p className="text-sm mt-4 text-gray-600 italic">({cite})</p>
		</div>
	);
}
