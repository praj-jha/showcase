import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { pricingPlans } from '@/components/pricing';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { RegistrationForm } from '@/components/registration-form';

export function AllPasses() {
	const [isFormOpen, setIsFormOpen] = useState(false);
	const [selectedPass, setSelectedPass] = useState<{ name: string; price: string } | null>(null);

	// Scroll to top when component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handlePassClick = (plan: { name: string; price: string }) => {
		setSelectedPass(plan);
		setIsFormOpen(true);
	};

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

				{/* Page Content */}
				<section className="relative py-16 px-6 md:py-24">
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
						{/* Page Header */}
						<div className="mb-16 text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h1 className="michroma-heading mb-4 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
									All Delegate{' '}
									<span className="font-medium text-primary">Passes</span>
								</h1>
								<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
									Choose the perfect pass that fits your needs and experience India Innovates 2026
								</p>
							</motion.div>
						</div>

						{/* All Passes Grid */}
						<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
							{pricingPlans.map((plan, index) => (
								<motion.div
									key={plan.name}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
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
													{plan.period && (
														<span className="ml-1 text-lg font-light text-muted-foreground">
															{plan.period}
														</span>
													)}
												</div>
											</div>

											{/* Description */}
											<p className="mb-8 text-sm font-light leading-relaxed text-muted-foreground">
												{plan.description}
											</p>

											{/* CTA Button */}
											<button
												onClick={() => handlePassClick(plan)}
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

						{/* Bottom CTA */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="mt-16 text-center"
						>
							<Link 
								to="/"
								className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary px-8 py-3.5 font-light text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary/90 hover:scale-105"
							>
								<ArrowLeft className="h-4 w-4" />
								Back to Home
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 }}
							className="mt-8 text-center"
						>
							<p className="text-sm font-light text-muted-foreground">
								All paid passes include access to core innovation sessions and networking events
							</p>
						</motion.div>
					</div>
				</section>
			</div>

			{/* Registration Form Modal */}
			{selectedPass && (
				<RegistrationForm
					isOpen={isFormOpen}
					onClose={() => setIsFormOpen(false)}
					selectedPass={selectedPass}
					allPasses={pricingPlans}
				/>
			)}
		</main>
	);
}

