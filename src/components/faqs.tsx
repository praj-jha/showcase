import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
	{
		question: 'What is India Innovates 2026?',
		answer: 'India Innovates 2026 is a premier innovation summit bringing together innovators, entrepreneurs, policymakers, investors, and thought leaders to showcase cutting-edge technologies, foster collaboration, and drive India\'s journey towards becoming a global innovation hub by 2047.',
	},
	{
		question: 'When and where is the event taking place?',
		answer: 'The event will be held in March 2026 in New Delhi, India. Specific dates and venue details will be announced soon. Follow our updates to stay informed.',
	},
	{
		question: 'Who can attend India Innovates 2026?',
		answer: 'The event is open to everyone including students, entrepreneurs, professionals, investors, researchers, policymakers, and innovation enthusiasts. We offer various delegate passes to suit different needs and interests.',
	},
	{
		question: 'What types of delegate passes are available?',
		answer: 'We offer multiple pass types: Standard Pass (₹2,500) for students and individuals, Business Pass (₹7,500) for professionals and entrepreneurs, Premium Pass (₹15,000) for leaders and executives, and free passes for Media and General Visitors. Each pass offers different benefits and access levels.',
	},
	{
		question: 'How do I register for the event?',
		answer: 'You can register by selecting your preferred delegate pass from our pricing section and completing the registration process. Early bird discounts may be available, so register soon to secure the best rates.',
	},
	{
		question: 'Can I exhibit at India Innovates 2026?',
		answer: 'Yes! We offer various exhibition booth packages for startups, companies, and organizations. Visit our Expo page to learn about available packages and book your booth to showcase your innovations to thousands of attendees.',
	},
	{
		question: 'Will there be networking opportunities?',
		answer: 'Absolutely! The event features dedicated networking lounges, meet-and-greet sessions with speakers, private networking dinners (for Premium pass holders), and various informal networking opportunities throughout the summit.',
	},
	{
		question: 'Are there opportunities for startups to pitch?',
		answer: 'Yes! We\'ll have dedicated startup pitch sessions and competitions. Details about application processes, eligibility criteria, and prizes will be announced closer to the event date.',
	},
	{
		question: 'Will sessions be recorded?',
		answer: 'Select sessions will be recorded and made available to attendees. Premium pass holders get lifetime digital access to all recorded content. Specific session recordings will be announced during the event.',
	},
	{
		question: 'How can I become a speaker or partner?',
		answer: 'We welcome speaker applications from industry experts and partnership inquiries from organizations. Visit our Partners page or Contact Us page with your profile and proposal. Our team will review and get back to you.',
	},
];

function FAQItem({ 
	faq, 
	index, 
	isOpen, 
	onToggle 
}: { 
	faq: typeof faqs[0]; 
	index: number;
	isOpen: boolean;
	onToggle: () => void;
}) {

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.5, delay: index * 0.05 }}
			className="rounded-xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/50"
		>
			<button
				onClick={onToggle}
				className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-primary/5"
			>
				<span className="text-lg font-medium text-foreground pr-4">
					{faq.question}
				</span>
				<div className="flex-shrink-0">
					{isOpen ? (
						<Minus className="h-5 w-5 text-primary transition-transform duration-300" />
					) : (
						<Plus className="h-5 w-5 text-primary transition-transform duration-300" />
					)}
				</div>
			</button>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
						className="overflow-hidden"
					>
						<div className="px-6 pb-6 pt-0 text-base font-light text-muted-foreground">
							{faq.answer}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.div>
	);
}

export function FAQs() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};
	return (
		<section id="faqs" className="relative py-16 px-6 md:py-24">
			<div className="mx-auto max-w-4xl">
				{/* Section Header */}
				<div className="mb-16 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.6 }}
					>
						<h2 className="michroma-heading mb-4 text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
							Frequently Asked{' '}
							<span className="font-medium text-primary">Questions</span>
						</h2>
						<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
							Find answers to common questions about India Innovates 2026
						</p>
					</motion.div>
				</div>

				{/* FAQ List */}
				<div className="space-y-4">
					{faqs.map((faq, index) => (
						<FAQItem 
							key={index} 
							faq={faq} 
							index={index}
							isOpen={openIndex === index}
							onToggle={() => handleToggle(index)}
						/>
					))}
				</div>

				{/* Still Have Questions */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="mt-12 text-center"
				>
					<p className="mb-4 text-lg font-light text-muted-foreground">
						Still have questions?
					</p>
					<a
						href="/contact"
						className="inline-flex items-center gap-2 rounded-full border border-primary bg-primary/10 px-8 py-3.5 font-light text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
					>
						Contact Us
					</a>
				</motion.div>
			</div>
		</section>
	);
}

