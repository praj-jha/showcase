import { motion } from 'framer-motion';
import { ArrowLeft, Target, Users, Lightbulb, Globe, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { useEffect } from 'react';

const features = [
	{
		icon: Target,
		title: 'Our Mission',
		description: 'To create a platform that celebrates innovation, fosters collaboration, and propels India towards becoming a global innovation hub by 2047.',
	},
	{
		icon: Users,
		title: 'Community Driven',
		description: 'Bringing together innovators, entrepreneurs, policymakers, and thought leaders from across the nation and beyond.',
	},
	{
		icon: Lightbulb,
		title: 'Innovation First',
		description: 'Showcasing cutting-edge technologies, breakthrough ideas, and transformative solutions that shape the future.',
	},
	{
		icon: Globe,
		title: 'Global Impact',
		description: 'Creating opportunities for Indian innovations to reach global markets and attract international collaboration.',
	},
	{
		icon: TrendingUp,
		title: 'Growth Catalyst',
		description: 'Providing startups and enterprises with exposure, funding opportunities, and strategic partnerships.',
	},
	{
		icon: Award,
		title: 'Excellence Recognition',
		description: 'Honoring outstanding achievements in innovation, research, and entrepreneurship across all sectors.',
	},
];

const stats = [
	{ value: '5000+', label: 'Expected Attendees' },
	{ value: '200+', label: 'Speakers & Experts' },
	{ value: '100+', label: 'Exhibitors' },
	{ value: '50+', label: 'Countries Represented' },
];

export function About() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="relative min-h-screen">
			<DottedSurface />

			<div className="relative">
				{/* Header with Back Button */}
				<div className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur-lg">
					<div className="mx-auto max-w-7xl px-6 py-4">
						<Link
							to="/"
							className="inline-flex items-center gap-2 text-sm font-light text-muted-foreground transition-colors hover:text-primary"
						>
							<ArrowLeft className="h-4 w-4" />
							Back to Home
						</Link>
					</div>
				</div>

				{/* Hero Section */}
				<section className="relative py-24 px-6 text-center">
					<div className="mx-auto max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="michroma-heading mb-6 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
								India Innovates{' '}
								<span className="font-medium text-primary">2026</span>
							</h1>
							<p className="mx-auto mb-4 max-w-3xl text-xl font-light text-muted-foreground md:text-2xl">
								New Delhi | March 2026
							</p>
							<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
								India's premier innovation summit bringing together the brightest minds, groundbreaking technologies, and transformative ideas to shape the future of our nation.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-7xl">
						<div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
							{stats.map((stat, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 text-center"
								>
									<div className="text-4xl md:text-5xl font-bold text-primary mb-2">
										{stat.value}
									</div>
									<p className="text-sm md:text-base font-light text-muted-foreground">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* About Content */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6 }}
							className="space-y-6 text-lg font-light text-foreground"
						>
							<p>
								India Innovates 2026 is more than just a summit—it's a movement towards realizing India's potential as a global innovation powerhouse. Set in the heart of New Delhi, our event serves as a convergence point for visionaries, creators, and leaders who are shaping tomorrow's world.
							</p>
							<p>
								With the ambitious goal of transforming India by 2047, we're creating a platform that accelerates innovation, facilitates meaningful partnerships, and showcases the incredible talent and ingenuity that defines our nation.
							</p>
							<p>
								Our summit brings together Members of Parliament, international delegates, investors, entrepreneurs, students, and innovators from every corner of India and beyond. Through keynote sessions, exhibitions, workshops, and networking opportunities, we're building bridges between ideas and implementation, between vision and reality.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Features Grid */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="michroma-heading mb-4 text-3xl font-light tracking-tight md:text-4xl">
								What We <span className="font-medium text-primary">Stand For</span>
							</h2>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
								>
									<feature.icon className="h-12 w-12 text-primary mb-4" />
									<h3 className="mb-3 text-xl font-medium text-foreground">
										{feature.title}
									</h3>
									<p className="text-base font-light text-muted-foreground">
										{feature.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Vision 2047 */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6 }}
							className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-12 text-center backdrop-blur-sm"
						>
							<h2 className="michroma-heading mb-6 text-3xl font-light tracking-tight md:text-4xl">
								Vision <span className="font-medium text-primary">2047</span>
							</h2>
							<p className="text-lg font-light text-foreground mb-6">
								Aligned with India's centenary of independence, we're committed to building an ecosystem that nurtures innovation, supports entrepreneurs, and positions India as a leader in technology, sustainability, and social impact.
							</p>
							<p className="text-lg font-light text-muted-foreground">
								Join us in this transformative journey as we work together to make India a beacon of innovation for the world.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="py-16 text-center"
				>
					<Link
						to="/"
						className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-8 py-3.5 font-light text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/90 hover:scale-105"
					>
						<ArrowLeft className="h-4 w-4" />
						Back to Home
					</Link>
				</motion.div>
			</div>
		</main>
	);
}

