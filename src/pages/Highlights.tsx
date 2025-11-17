import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { DottedSurface } from '@/components/ui/dotted-surface';

// Sample photo data - replace with actual images
const highlightCategories = [
	{
		title: 'Pre-Launch Events',
		photos: [
			{ id: 1, url: '', caption: 'Innovation Workshop 2024' },
			{ id: 2, url: '', caption: 'Youth Conclave' },
			{ id: 3, url: '', caption: 'Tech Meetup' },
			{ id: 4, url: '', caption: 'Startup Pitch Day' },
			{ id: 5, url: '', caption: 'Panel Discussion' },
			{ id: 6, url: '', caption: 'Networking Session' },
		],
	},
	{
		title: 'Competitions & Challenges',
		photos: [
			{ id: 7, url: '', caption: 'Hackathon 2024' },
			{ id: 8, url: '', caption: 'Innovation Challenge' },
			{ id: 9, url: '', caption: 'Pitch Competition' },
			{ id: 10, url: '', caption: 'Tech Quiz Finals' },
			{ id: 11, url: '', caption: 'Design Sprint' },
			{ id: 12, url: '', caption: 'Awards Ceremony' },
		],
	},
];

export function Highlights() {
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
									Event{' '}
									<span className="font-medium text-primary">Highlights</span>
								</h1>
								<p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
									Relive the moments from our pre-launch events and competitions
								</p>
							</motion.div>
						</div>

						{/* Highlight Categories */}
						{highlightCategories.map((category, categoryIndex) => (
							<div key={category.title} className="mb-20">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
								>
									<h2 className="mb-8 text-3xl font-light tracking-tight md:text-4xl">
										{category.title}
									</h2>
								</motion.div>

								{/* Photo Grid */}
								<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
									{category.photos.map((photo, photoIndex) => (
										<motion.div
											key={photo.id}
											initial={{ opacity: 0, y: 30 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ 
												duration: 0.5, 
												delay: categoryIndex * 0.1 + photoIndex * 0.05 
											}}
										>
											<div className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
												{/* Photo Container */}
												<div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/20 to-background">
													{photo.url ? (
														<img 
															src={photo.url}
															alt={photo.caption}
															className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
														/>
													) : (
														<div className="flex h-full w-full items-center justify-center">
															<span className="text-6xl text-primary/30">📷</span>
														</div>
													)}
												</div>
												
												{/* Caption Overlay */}
												<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-4 backdrop-blur-sm">
													<p className="text-sm font-light text-foreground">
														{photo.caption}
													</p>
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						))}

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

