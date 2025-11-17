import { motion } from 'framer-motion';

const committeeMembers = [
	{
		name: 'Dr. Rajesh Kumar',
		designation: 'Chief Organizing Officer',
		image: '/mdg.png',
	},
	{
		name: 'Priya Sharma',
		designation: 'Event Director',
		image: '/mdg.png',
	},
	{
		name: 'Amit Patel',
		designation: 'Technical Head',
		image: '/mdg.png',
	},
	{
		name: 'Neha Singh',
		designation: 'Marketing & Communications Lead',
		image: '/mdg.png',
	},
	{
		name: 'Vikram Reddy',
		designation: 'Partnerships Coordinator',
		image: '/mdg.png',
	},
	{
		name: 'Ananya Gupta',
		designation: 'Speakers & Content Manager',
		image: '/mdg.png',
	},
	{
		name: 'Rahul Mehta',
		designation: 'Logistics & Operations Head',
		image: '/mdg.png',
	},
	{
		name: 'Kavya Iyer',
		designation: 'Delegate Relations Manager',
		image: '/mdg.png',
	},
	{
		name: 'Arjun Verma',
		designation: 'Sponsorship Lead',
		image: '/mdg.png',
	},
	{
		name: 'Sanya Kapoor',
		designation: 'Media & PR Coordinator',
		image: '/mdg.png',
	},
];

export function OrganizingCommittee() {
	return (
		<section className="relative py-16 px-6 md:py-24">
			<div className="mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="michroma-heading mb-4 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
							Organising{' '}
							<span className="font-medium text-primary">Committee</span>
						</h2>
						<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
							Meet the dedicated team bringing India Innovates 2026 to life
						</p>
					</motion.div>
				</div>

				{/* Committee Members Grid */}
				<div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
					{committeeMembers.map((member, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.5, delay: index * 0.05 }}
							className="group relative"
						>
							{/* Photo Container */}
							<div className="relative mb-3 overflow-hidden rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-1 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20">
								<div className="flex aspect-square items-center justify-center overflow-hidden rounded-lg bg-background/50 backdrop-blur-sm">
									<img
										src={member.image}
										alt={member.name}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>

							{/* Member Info */}
							<div className="text-center">
								<h3 className="mb-1 text-sm md:text-base font-medium text-foreground transition-colors group-hover:text-primary">
									{member.name}
								</h3>
								<p className="text-xs md:text-sm font-light text-muted-foreground line-clamp-2">
									{member.designation}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

