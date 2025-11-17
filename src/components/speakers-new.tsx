import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const speakers = [
	{
		name: 'Rekha Gupta',
		title: 'Chief Minister of Delhi',
		company: 'Government of Delhi',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/rekha_sjg3hd.avif',
		expertise: 'Political Leader',
	},
	{
		name: 'Piyush Goyal',
		title: 'Union Minister for Commerce & Industry',
		company: 'Government of India',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/piyush_brqefi.avif',
		expertise: 'Political Leader',
	},
	{
		name: 'Om Birla',
		title: 'Speaker of Lok Sabha',
		company: 'Parliament of India',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198414/ba207a2a-4063-4af7-9f37-f70f0ec65200.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Parvesh Verma',
		title: 'Cabinet Minister',
		company: 'Government of Delhi',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198546/dd8e09dc-0ead-469c-a59d-d20daea668e2.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Kapil Mishra',
		title: 'Minister for Art, Culture & Language',
		company: 'Government of Delhi',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198512/6aa0b965-db65-4331-b20f-3360de15daa8.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Manoj Tiwari',
		title: 'Member of Parliament & Actor',
		company: 'Lok Sabha',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198487/42fbe97c-5e90-43b5-a801-fe8c0ab7f3ac.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Shehzad Poonawala',
		title: 'BJP National Spokesperson',
		company: 'Bharatiya Janata Party',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198919/532243aa-4d83-4e27-8884-c6fc97a1c33c.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Manjinder Singh Sirsa',
		title: 'Minister for Environment, Forest & Wildlife',
		company: 'Government of Delhi',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198586/d00f313b-0ddb-4dd0-a829-9ae711f0fe48.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Tajinder Pal Singh Bagga',
		title: 'BJP Spokesperson & Youth Leader',
		company: 'Bharatiya Janata Party',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/v1763198688/3184314b-9f62-42d3-8f75-12389bcbed98.png',
		expertise: 'Political Leader',
	},
	{
		name: 'Aman Gupta',
		title: 'Co-founder & CMO',
		company: 'boAt',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005444/aman_h972eu.avif',
		expertise: 'Entrepreneur',
	},
	{
		name: 'Annamalai K',
		title: 'BJP Tamil Nadu President & Former IPS',
		company: 'Bharatiya Janata Party',
		image: 'https://res.cloudinary.com/dgo3wykbm/image/upload/f_auto,q_auto/v1761005445/anna_vwandt.avif',
		expertise: 'Political Leader',
	},
];

export function SpeakerCard({ speaker }: { speaker: typeof speakers[0] }) {
	return (
		<div className="group relative h-full">
			<div className="relative flex flex-col items-center">
				{/* Photo Frame - Similar to PM Photo */}
				<div className="relative mb-6">
					<div className="absolute inset-0 bg-primary/20 blur-3xl" />
					<div className="relative h-[320px] w-[260px] md:h-[360px] md:w-[290px] overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-1">
						<div className="flex h-full w-full items-center justify-center rounded-xl bg-background/50 backdrop-blur-sm">
							{speaker.image ? (
								<img 
									src={speaker.image} 
									alt={speaker.name}
									className="h-full w-full object-cover rounded-xl"
								/>
							) : (
								<div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary/20 to-background rounded-xl">
									<span className="text-6xl font-light text-primary">
										{speaker.name.charAt(0)}
									</span>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Speaker Info */}
				<div className="text-center">
					<h3 className="mb-2 text-xl font-medium text-foreground md:text-2xl">
						{speaker.name}
					</h3>
					<p className="mb-1 text-sm font-light text-primary md:text-base">
						{speaker.title}
					</p>
					<p className="mb-3 text-sm font-light text-muted-foreground md:text-base">
						{speaker.company}
					</p>
					
					{/* Expertise Tag */}
					<div className="mb-4 inline-flex rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
						<span className="text-xs font-light text-primary">
							{speaker.expertise}
						</span>
					</div>

					{/* Social Links */}
					<div className="flex items-center justify-center gap-3">
						<button className="rounded-full border border-border bg-background/50 p-2 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:scale-110">
							<Linkedin className="h-4 w-4 text-foreground" />
						</button>
						<button className="rounded-full border border-border bg-background/50 p-2 backdrop-blur-sm transition-all hover:border-primary hover:bg-primary/10 hover:scale-110">
							<Twitter className="h-4 w-4 text-foreground" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export function SpeakersNew() {
	const [currentSlide, setCurrentSlide] = useState(0);
	
	// Get 3 speakers per slide
	const speakersPerSlide = 3;
	const totalSlides = Math.ceil(speakers.length / speakersPerSlide);
	
	const getCurrentSpeakers = () => {
		const start = currentSlide * speakersPerSlide;
		return speakers.slice(start, start + speakersPerSlide);
	};

	// Auto-slide effect
	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrentSlide((prev) => (prev + 1) % totalSlides);
		}, 4000); // Auto-slide every 4 seconds
		
		return () => clearTimeout(timer);
	}, [currentSlide, totalSlides]);

	return (
		<section className="relative py-24 px-6">
			{/* Background gradient */}
			<div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
			
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
							Featured{' '}
							<span className="font-medium text-primary">Speakers</span>
						</h2>
						<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
							Learn from India's brightest minds and pioneering innovators
							shaping the future of technology
						</p>
					</motion.div>
				</div>

				{/* Auto-sliding Speakers */}
				<div className="relative overflow-hidden">
					<AnimatePresence mode="wait">
						<motion.div
							key={currentSlide}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
						>
							{getCurrentSpeakers().map((speaker) => (
								<SpeakerCard key={speaker.name} speaker={speaker} />
							))}
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Slide Indicators */}
				<div className="mt-12 flex justify-center gap-2">
					{Array.from({ length: totalSlides }).map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentSlide(index)}
							className={`h-2 rounded-full transition-all ${
								index === currentSlide
									? 'w-8 bg-primary'
									: 'w-2 bg-border hover:bg-primary/50'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>

				{/* View All Speakers Button - Rectangular */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
					className="mt-12 text-center"
				>
					<Link 
						to="/allspeakers"
						className="group inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/10 px-8 py-3.5 font-light text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground hover:scale-105"
					>
						View All Speakers
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
			</div>
		</section>
	);
}

