import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { speakers, SpeakerCard } from '@/components/speakers-new';
import { DottedSurface } from '@/components/ui/dotted-surface';

export function AllSpeakers() {
	// Scroll to top when component mounts
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

				{/* Page Content */}
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
									All{' '}
									<span className="font-medium text-primary">Speakers</span>
								</h1>
								<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
									Meet all our distinguished speakers and thought leaders shaping the future of innovation
								</p>
							</motion.div>
						</div>

						{/* All Speakers Grid */}
						<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
							{speakers.map((speaker, index) => (
								<motion.div
									key={speaker.name}
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: index * 0.05 }}
								>
									<SpeakerCard speaker={speaker} />
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
					</div>
				</section>
			</div>
		</main>
	);
}

