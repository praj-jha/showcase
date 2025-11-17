import { useEffect, useRef } from 'react';

const companies = [
	{ src: '/mcdlogo.png', alt: 'MCD' },
	{ src: '/lokmata.png', alt: 'Lokmata' },
	{ src: '/jnu.png', alt: 'JNU' },
	{ src: '/nsut.png', alt: 'NSUT' },
	{ src: '/ddu2.jpeg', alt: 'DDU' },
	{ src: '/sims.png', alt: 'SIMS' },
	{ src: '/GGSIPU.webp', alt: 'GGSIPU' },
	{ src: '/ay.jpeg', alt: 'Ayushman Bharat' },
];

export function CompaniesSlider() {
	const scrollRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const scrollContainer = scrollRef.current;
		if (!scrollContainer) return;

		let animationFrameId: number;
		let scrollPosition = 0;

		const scroll = () => {
			scrollPosition += 0.5;
			if (scrollPosition >= scrollContainer.scrollWidth / 2) {
				scrollPosition = 0;
			}
			scrollContainer.scrollLeft = scrollPosition;
			animationFrameId = requestAnimationFrame(scroll);
		};

		animationFrameId = requestAnimationFrame(scroll);

		return () => {
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<section className="relative overflow-hidden border-y border-border bg-card/20 py-12 backdrop-blur-sm">
			<div className="mx-auto max-w-7xl px-6">
				<h3 className="mb-8 text-center text-sm font-light uppercase tracking-wider text-muted-foreground">
					In Collaboration With
				</h3>
				<div
					ref={scrollRef}
					className="flex gap-8 overflow-hidden"
					style={{ scrollBehavior: 'auto' }}
				>
					{/* Duplicate the companies array for seamless loop */}
					{[...companies, ...companies].map((company, index) => (
						<div
							key={index}
							className="flex min-w-[140px] items-center justify-center rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-md"
						>
							<img
								src={company.src}
								alt={company.alt}
								className="h-16 w-full object-contain"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}


