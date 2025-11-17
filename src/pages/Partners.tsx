import { motion } from 'framer-motion';
import { ArrowLeft, Users, TrendingUp, Globe, Award, Target, Zap, Mail, Phone, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const benefits = [
	{
		icon: Users,
		title: 'Massive Audience Reach',
		description: 'Connect with 15,000+ general visitors, 5,000+ international delegates, 300+ Members of Parliament, and 500+ investors.',
	},
	{
		icon: TrendingUp,
		title: 'Brand Visibility',
		description: 'Get your brand in front of decision-makers, innovators, and media through prominent placement and recognition at the summit.',
	},
	{
		icon: Globe,
		title: 'Global Exposure',
		description: 'Access to international delegates from 50+ countries, opening doors to global partnerships and market expansion.',
	},
	{
		icon: Award,
		title: 'Thought Leadership',
		description: 'Position your organization as an innovation leader through speaking opportunities and exclusive partner sessions.',
	},
	{
		icon: Target,
		title: 'Lead Generation',
		description: 'Direct access to qualified leads, potential customers, and partnership opportunities in a focused environment.',
	},
	{
		icon: Zap,
		title: 'Innovation Ecosystem',
		description: 'Be part of shaping India\'s innovation landscape and contribute to the nation\'s journey towards 2047 vision.',
	},
];

const partnershipTiers = [
	{
		name: 'Title Partner',
		description: 'Maximum visibility and exclusive privileges',
		benefits: [
			'Exclusive title naming rights',
			'Logo placement on all marketing materials',
			'Keynote speaking opportunity',
			'Premium booth space',
			'50 complimentary passes',
			'Dedicated partner lounge',
			'Media coverage and PR support',
			'Exclusive networking dinner hosting',
		],
	},
	{
		name: 'Platinum Partner',
		description: 'Premium positioning and extensive benefits',
		benefits: [
			'Prominent logo placement',
			'Speaking opportunity',
			'Premium booth space',
			'30 complimentary passes',
			'VIP lounge access',
			'Media interview opportunities',
			'Co-branded event materials',
			'Social media promotion',
		],
	},
	{
		name: 'Gold Partner',
		description: 'Strong visibility and valuable perks',
		benefits: [
			'Logo placement on key materials',
			'Panel participation opportunity',
			'Standard booth space',
			'20 complimentary passes',
			'Exhibitor lounge access',
			'Digital marketing inclusion',
			'Event program listing',
			'Networking opportunities',
		],
	},
];

export function Partners() {
	const [formData, setFormData] = useState({
		companyName: '',
		contactPerson: '',
		email: '',
		phone: '',
		partnershipInterest: '',
		message: '',
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		
		// Simulate form submission
		setTimeout(() => {
			alert('Thank you for your interest! Our partnership team will contact you within 24 hours.');
			setFormData({
				companyName: '',
				contactPerson: '',
				email: '',
				phone: '',
				partnershipInterest: '',
				message: '',
			});
			setIsSubmitting(false);
		}, 1000);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
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

				{/* Hero Section */}
				<section className="relative py-24 px-6 text-center">
					<div className="mx-auto max-w-4xl">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h1 className="michroma-heading mb-6 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
								Partner With{' '}
								<span className="font-medium text-primary">India Innovates</span>
							</h1>
							<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
								Join us in shaping India's innovation future. Align your brand with excellence, reach a massive audience, and be part of a transformative movement.
							</p>
						</motion.div>
					</div>
				</section>

				{/* Why Partner */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="michroma-heading mb-4 text-3xl font-light tracking-tight md:text-4xl">
								Why Partner With{' '}
								<span className="font-medium text-primary">II26?</span>
							</h2>
							<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
								Partnering with India Innovates 2026 offers unparalleled opportunities
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{benefits.map((benefit, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
								>
									<benefit.icon className="h-12 w-12 text-primary mb-4" />
									<h3 className="mb-3 text-xl font-medium text-foreground">
										{benefit.title}
									</h3>
									<p className="text-base font-light text-muted-foreground">
										{benefit.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Partnership Tiers */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-7xl">
						<div className="mb-12 text-center">
							<h2 className="michroma-heading mb-4 text-3xl font-light tracking-tight md:text-4xl">
								Partnership{' '}
								<span className="font-medium text-primary">Tiers</span>
							</h2>
							<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
								Choose a partnership level that aligns with your goals
							</p>
						</div>
						<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
							{partnershipTiers.map((tier, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, amount: 0.3 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="relative overflow-hidden rounded-3xl border border-border bg-card/90 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
								>
									<h3 className="mb-2 text-2xl font-medium text-foreground">{tier.name}</h3>
									<p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
									<ul className="space-y-3 mb-8">
										{tier.benefits.map((benefit, i) => (
											<li key={i} className="flex items-start gap-3 text-sm font-light text-foreground">
												<span className="text-primary mt-1">✓</span>
												<span>{benefit}</span>
											</li>
										))}
									</ul>
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
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Partnership Enquiry Form */}
				<section className="relative py-16 px-6">
					<div className="mx-auto max-w-3xl">
						<div className="mb-12 text-center">
							<h2 className="michroma-heading mb-4 text-3xl font-light tracking-tight md:text-4xl">
								Partnership{' '}
								<span className="font-medium text-primary">Enquiry</span>
							</h2>
							<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
								Interested in partnering with us? Fill out the form below and our team will get back to you
							</p>
						</div>

						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.6 }}
							className="rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-12"
						>
							<form onSubmit={handleSubmit} className="space-y-6">
								<div className="grid gap-6 md:grid-cols-2">
									<div>
										<label htmlFor="companyName" className="block text-sm font-medium text-foreground mb-2">
											Company Name *
										</label>
										<div className="relative">
											<Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<input
												type="text"
												id="companyName"
												name="companyName"
												required
												value={formData.companyName}
												onChange={handleChange}
												className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
												placeholder="Your Company"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="contactPerson" className="block text-sm font-medium text-foreground mb-2">
											Contact Person *
										</label>
										<input
											type="text"
											id="contactPerson"
											name="contactPerson"
											required
											value={formData.contactPerson}
											onChange={handleChange}
											className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
											placeholder="Full Name"
										/>
									</div>
								</div>

								<div className="grid gap-6 md:grid-cols-2">
									<div>
										<label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
											Email Address *
										</label>
										<div className="relative">
											<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<input
												type="email"
												id="email"
												name="email"
												required
												value={formData.email}
												onChange={handleChange}
												className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
												placeholder="email@company.com"
											/>
										</div>
									</div>

									<div>
										<label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
											Phone Number *
										</label>
										<div className="relative">
											<Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
											<input
												type="tel"
												id="phone"
												name="phone"
												required
												value={formData.phone}
												onChange={handleChange}
												className="w-full pl-11 pr-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
												placeholder="+91 98765 43210"
											/>
										</div>
									</div>
								</div>

								<div>
									<label htmlFor="partnershipInterest" className="block text-sm font-medium text-foreground mb-2">
										Partnership Interest *
									</label>
									<select
										id="partnershipInterest"
										name="partnershipInterest"
										required
										value={formData.partnershipInterest}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
									>
										<option value="">Select a partnership tier</option>
										<option value="title">Title Partner</option>
										<option value="platinum">Platinum Partner</option>
										<option value="gold">Gold Partner</option>
										<option value="custom">Custom Partnership</option>
									</select>
								</div>

								<div>
									<label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={4}
										value={formData.message}
										onChange={handleChange}
										className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
										placeholder="Tell us about your partnership goals and any specific requirements..."
									/>
								</div>

								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full py-6 text-base font-medium"
								>
									{isSubmitting ? 'Submitting...' : 'Submit Partnership Enquiry'}
								</Button>

								<p className="text-xs text-center text-muted-foreground">
									By submitting this form, you agree to be contacted by our partnership team regarding your enquiry.
								</p>
							</form>
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

