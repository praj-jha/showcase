import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const pricingPlans = [
	{
		name: 'Standard',
		price: '₹2,500',
		period: '',
		description: 'Perfect for students and individual attendees',
		buttonText: 'Get Standard Pass',
		buttonStyle: 'border border-border bg-card/50 text-foreground hover:bg-card',
		popular: false,
		features: [
			'Access to all keynote sessions',
			'Networking lounge access',
			'Event materials & handbook',
			'Certificate of participation',
			'Lunch & refreshments',
		],
	},
	{
		name: 'Premium',
		price: '₹15,000',
		period: '',
		description: 'Ultimate experience for leaders and executives',
		buttonText: 'Get Premium Pass',
		buttonStyle: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700',
		popular: true,
		features: [
			'All Business pass benefits',
			'Front row reserved seating',
			'Private networking dinner',
			'One-on-one speaker sessions',
			'Complimentary photography',
			'Dedicated concierge service',
			'Lifetime digital access',
		],
	},
	{
		name: 'Business',
		price: '₹7,500',
		period: '',
		description: 'Ideal for professionals and entrepreneurs',
		buttonText: 'Get Business Pass',
		buttonStyle: 'border border-border bg-card/50 text-foreground hover:bg-card',
		popular: false,
		features: [
			'All Standard pass benefits',
			'VIP seating arrangements',
			'Access to exclusive workshops',
			'Meet & greet with speakers',
			'Digital resource kit',
			'Priority booth visits',
		],
	},
	{
		name: 'Media Pass',
		price: 'Free',
		period: '',
		description: 'For media professionals and press members',
		buttonText: 'Apply for Media Pass',
		buttonStyle: 'border border-border bg-card/50 text-foreground hover:bg-card',
		popular: false,
		features: [
			'Full event coverage access',
			'Press conference attendance',
			'Media lounge access',
			'Interview scheduling support',
			'High-resolution event photos',
			'Press kit & materials',
		],
	},
	{
		name: 'General Visitors',
		price: 'Free',
		period: '',
		description: 'Open to all innovation enthusiasts',
		buttonText: 'Register for Free',
		buttonStyle: 'border border-border bg-card/50 text-foreground hover:bg-card',
		popular: false,
		features: [
			'Entry to exhibition area',
			'Access to select sessions',
			'Networking opportunities',
			'Event brochure',
			'Basic refreshments',
		],
	},
];

export function Pricing() {
	// Show only first 3 passes (Standard, Premium, Business)
	const featuredPasses = pricingPlans.slice(0, 3);

	return (
		<section className="relative py-24 px-6">
			{/* Background Effects */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
			
			{/* Animated stars background */}
			<div className="absolute inset-0 overflow-hidden">
				{Array.from({ length: 50 }).map((_, i) => (
					<motion.div
						key={i}
						className="absolute h-1 w-1 rounded-full bg-primary/20"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
						}}
						animate={{
							opacity: [0.2, 0.8, 0.2],
							scale: [1, 1.5, 1],
						}}
						transition={{
							duration: 2 + Math.random() * 3,
							repeat: Infinity,
							delay: Math.random() * 2,
						}}
					/>
				))}
			</div>

			<div className="relative mx-auto max-w-7xl">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="michroma-heading mb-4 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
							Delegate{' '}
							<span className="font-medium text-primary">Passes</span>
						</h2>
						<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
							Choose the perfect pass for your innovation journey
						</p>
					</motion.div>
				</div>

				{/* Pricing Cards */}
				<div className="grid gap-6 lg:grid-cols-3">
					{featuredPasses.map((plan, index) => (
						<motion.div
							key={plan.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div
								className={`relative h-full overflow-hidden rounded-3xl border backdrop-blur-sm transition-all duration-300 ${
									plan.popular
										? 'border-primary/50 bg-gradient-to-b from-card/95 to-card/80 shadow-2xl shadow-primary/20 scale-105'
										: 'border-border bg-card/90 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10'
								}`}
							>
								{/* Popular Badge */}
								{plan.popular && (
									<div className="absolute right-4 top-4 rounded-full border border-primary/30 bg-primary/20 px-4 py-1 backdrop-blur-sm">
										<span className="text-xs font-medium text-primary">
											Most Popular
										</span>
									</div>
								)}

								<div className="p-8">
									{/* Plan Name */}
									<h3 className="mb-6 text-2xl font-light text-foreground">
										{plan.name}
									</h3>

									{/* Price */}
									<div className="mb-6">
										<div className="flex items-baseline">
											<span className="text-5xl font-light tracking-tight text-foreground">
												{plan.price}
											</span>
											<span className="ml-1 text-lg font-light text-muted-foreground">
												{plan.period}
											</span>
										</div>
									</div>

									{/* Description */}
									<p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
										{plan.description}
									</p>

									{/* CTA Button */}
									<button
										className={`mb-8 w-full rounded-xl px-6 py-3.5 text-sm font-medium transition-all duration-300 ${plan.buttonStyle}`}
									>
										{plan.buttonText}
									</button>

									{/* Features Divider */}
									<div className="relative mb-6">
										<div className="absolute inset-0 flex items-center">
											<div className="w-full border-t border-border/50" />
										</div>
										<div className="relative flex justify-center">
											<span className="bg-card px-3 text-xs font-light uppercase tracking-wider text-muted-foreground">
												Features
											</span>
										</div>
									</div>

									{/* Features List */}
									<ul className="space-y-4">
										{plan.features.map((feature) => (
											<li
												key={feature}
												className="flex items-start gap-3"
											>
												<div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
													<Check className="h-3 w-3 text-primary" />
												</div>
												<span className="text-sm font-light text-foreground">
													{feature}
												</span>
											</li>
										))}
									</ul>
								</div>

								{/* Decorative Grid Pattern */}
								<div className="pointer-events-none absolute inset-0 opacity-[0.02]">
									<div
										className="h-full w-full"
										style={{
											backgroundImage: `
												linear-gradient(rgba(168, 85, 247, 0.4) 1px, transparent 1px),
												linear-gradient(90deg, rgba(168, 85, 247, 0.4) 1px, transparent 1px)
											`,
											backgroundSize: '24px 24px',
										}}
									/>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* View All Passes Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 text-center"
				>
					<Link 
						to="/allpasses"
						className="group inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-8 py-3.5 font-light text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
					>
						View All Delegate Passes
						<svg
							className="h-4 w-4 transition-transform group-hover:translate-x-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</Link>
				</motion.div>

				{/* Bottom CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5 }}
					className="mt-8 text-center"
				>
					<p className="text-sm font-light text-muted-foreground">
						All paid passes include access to core innovation sessions and networking events
					</p>
				</motion.div>
			</div>
		</section>
	);
}

