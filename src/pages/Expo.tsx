import { motion } from 'framer-motion';
import { ArrowLeft, Users, Building2, Globe, TrendingUp, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { NumberTicker } from '@/components/ui/number-ticker';

const stats = [
	{
		icon: Users,
		value: 300,
		suffix: '+',
		label: 'Members of Parliament',
		color: 'from-purple-500/20 to-blue-500/20',
	},
	{
		icon: Globe,
		value: 15000,
		suffix: '+',
		label: 'General Visitors',
		color: 'from-blue-500/20 to-cyan-500/20',
	},
	{
		icon: Building2,
		value: 5000,
		suffix: '+',
		label: 'International Delegates',
		color: 'from-cyan-500/20 to-green-500/20',
	},
	{
		icon: TrendingUp,
		value: 500,
		suffix: '+',
		label: 'Investors',
		color: 'from-green-500/20 to-yellow-500/20',
	},
];

const exhibitorBenefits = [
	'Premium booth space at Bharat Mandapam',
	'Direct access to policymakers and MPs',
	'Networking with 5000+ international delegates',
	'Brand visibility across all event materials',
	'Speaking opportunities at panel discussions',
	'Media coverage and press releases',
	'Lead generation and business opportunities',
	'Access to exclusive investor meetups',
];

const boothPackages = [
	{
		name: 'Startup Booth',
		price: '₹50,000',
		size: '3m × 3m',
		features: ['Basic booth setup', 'Company signage', '2 exhibitor passes', 'WiFi access'],
	},
	{
		name: 'Standard Booth',
		price: '₹1,50,000',
		size: '6m × 3m',
		features: ['Premium booth setup', 'LED backdrop', '5 exhibitor passes', 'Promotional materials', 'WiFi access'],
	},
	{
		name: 'Premium Booth',
		price: '₹3,00,000',
		size: '9m × 3m',
		features: ['Luxury booth setup', 'Interactive displays', '10 exhibitor passes', 'Dedicated lounge area', 'Speaking slot', 'VIP networking access'],
	},
];

export function Expo() {
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
				<section className="relative py-16 px-6 md:py-24">
					<div className="mx-auto max-w-7xl">
						{/* Page Header */}
						<div className="mb-16 text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h1 className="michroma-heading mb-4 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
									Exhibitor{' '}
									<span className="font-medium text-primary">Expo</span>
								</h1>
								<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
									Showcase your innovations to India's most influential leaders, international delegates, and investors
								</p>
								
								{/* Event Details */}
								<div className="mt-8 flex flex-col items-center justify-center gap-4 text-base font-light text-muted-foreground md:flex-row md:gap-8">
									<div className="flex items-center gap-2">
										<Calendar className="h-5 w-5 text-primary" />
										<span>28-29 March 2026</span>
									</div>
									<div className="hidden h-1 w-1 rounded-full bg-muted-foreground md:block" />
									<div className="flex items-center gap-2">
										<MapPin className="h-5 w-5 text-primary" />
										<span>Bharat Mandapam, New Delhi</span>
									</div>
								</div>
							</motion.div>
						</div>

						{/* Stats Section with Number Tickers */}
						<div className="mb-20">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
								className="mb-12 text-center text-3xl font-light tracking-tight md:text-4xl"
							>
								Reach & <span className="font-medium text-primary">Impact</span>
							</motion.h2>

							<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
								{stats.map((stat, index) => (
									<motion.div
										key={stat.label}
										initial={{ opacity: 0, y: 30 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: 0.1 * index }}
									>
										<div className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
											{/* Gradient Background */}
											<div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
											
											<div className="relative">
												<div className="mb-4 flex justify-center">
													<div className="rounded-full bg-primary/10 p-3">
														<stat.icon className="h-8 w-8 text-primary" />
													</div>
												</div>
												
												<div className="text-center">
													<div className="mb-2 text-4xl font-light text-foreground md:text-5xl">
														<NumberTicker value={stat.value} />
														<span>{stat.suffix}</span>
													</div>
													<p className="text-sm font-light text-muted-foreground">
														{stat.label}
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						{/* Exhibitor Benefits */}
						<div className="mb-20">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="mb-12 text-center text-3xl font-light tracking-tight md:text-4xl"
							>
								Why <span className="font-medium text-primary">Exhibit?</span>
							</motion.h2>

							<div className="grid gap-4 md:grid-cols-2">
								{exhibitorBenefits.map((benefit, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.05 }}
										className="flex items-start gap-3 rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/50"
									>
										<CheckCircle className="h-5 w-5 flex-shrink-0 text-primary mt-0.5" />
										<span className="text-sm font-light text-foreground">
											{benefit}
										</span>
									</motion.div>
								))}
							</div>
						</div>

						{/* Booth Packages */}
						<div className="mb-20">
							<motion.h2
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6 }}
								className="mb-12 text-center text-3xl font-light tracking-tight md:text-4xl"
							>
								Booth <span className="font-medium text-primary">Packages</span>
							</motion.h2>

							<div className="grid gap-6 md:grid-cols-3">
								{boothPackages.map((pkg, index) => (
									<motion.div
										key={pkg.name}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all hover:border-primary/30 hover:shadow-xl">
											<h3 className="mb-4 text-2xl font-light text-foreground">
												{pkg.name}
											</h3>
											
											<div className="mb-2 text-3xl font-light text-primary">
												{pkg.price}
											</div>
											
											<p className="mb-6 text-sm font-light text-muted-foreground">
												Booth Size: {pkg.size}
											</p>
											
											<ul className="space-y-3">
												{pkg.features.map((feature, i) => (
													<li key={i} className="flex items-start gap-2">
														<CheckCircle className="h-4 w-4 flex-shrink-0 text-primary mt-0.5" />
														<span className="text-sm font-light text-foreground">
															{feature}
														</span>
													</li>
												))}
											</ul>
											
											<button className="mt-6 w-full rounded-lg border border-primary bg-primary/10 px-6 py-3 font-light text-primary transition-all hover:bg-primary hover:text-primary-foreground">
												Book Booth
											</button>
										</div>
									</motion.div>
								))}
							</div>
						</div>

						{/* CTA Section */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-8 text-center md:p-12"
						>
							<Award className="mx-auto mb-4 h-12 w-12 text-primary" />
							<h3 className="mb-4 text-2xl font-light tracking-tight md:text-3xl">
								Ready to Showcase Your <span className="font-medium text-primary">Innovation?</span>
							</h3>
							<p className="mx-auto mb-8 max-w-2xl text-base font-light text-muted-foreground">
								Limited exhibition spaces available. Reserve your booth today and be part of India's premier innovation summit.
							</p>
							<div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
								<button className="rounded-lg bg-primary px-8 py-3.5 font-light text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105">
									Contact Sales Team
								</button>
								<Link 
									to="/"
									className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background/50 px-8 py-3.5 font-light text-foreground transition-all hover:bg-background hover:scale-105"
								>
									<ArrowLeft className="h-4 w-4" />
									Back to Home
								</Link>
							</div>
						</motion.div>
					</div>
				</section>
			</div>
		</main>
	);
}

