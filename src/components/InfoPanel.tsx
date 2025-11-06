'use client';
import { motion } from 'framer-motion';

export default function InfoPanel({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div
			className={``}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -100 }}
			transition={{ duration: 0.5 }}
		>
			<div className="relative border-black before:content-[''] before:absolute before:top-2 before:left-2 before:-bottom-2 before:-right-2 before:border-2 before:border-black before:bg-black before:z-10">
				<div
					className={`relative flex flex-col flex-start gap-4 h-full bg-white p-4 text-black z-10 border-2 `}
				>
					<div className="relative z-20 bg-white">
						<h2 className="text-4xl font-bold text-center mb-4">
							{title}
						</h2>
						{children}
					</div>
				</div>
			</div>
		</motion.div>
	);
}
