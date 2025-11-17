import { TextRotate } from '@/components/ui/text-rotate';
import { CountdownTimer } from '@/components/ui/countdown-timer';
import { Button } from '@/components/ui/button';
import { Spotlight } from '@/components/ui/spotlight';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
	const eventDate = new Date('2026-03-28T00:00:00');

	return (
		<section className="relative flex min-h-[85vh] items-center justify-center px-6 py-12 md:py-16 overflow-hidden">
			{/* Purple Spotlight */}
			<Spotlight
				className="-top-40 left-0 md:left-60 md:-top-20"
				fill="purple"
			/>
			<div className="relative z-10 max-w-6xl text-center">
				<h1 className="text-3xl font-light tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
					World's biggest youth
					<br />
					innovation{' '}
					<span className="inline-flex text-primary">
						<TextRotate
							texts={['Political', 'Tech', 'Business']}
							rotationInterval={2000}
							staggerDuration={0.03}
							mainClassName="font-medium"
						/>
					</span>
					<br />
					summit
				</h1>

				{/* Subtitle */}
				<p className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
					Join India's premier innovation and technology summit. Connect with
					industry leaders, showcase your innovations, and be part of shaping
					the future.
				</p>

				{/* Date and Location */}
				<div className="mt-8 flex flex-col items-center justify-center gap-4 text-base font-light text-muted-foreground md:flex-row md:gap-8 md:text-lg">
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

				{/* Countdown Timer */}
				<div className="mt-12">
					<CountdownTimer targetDate={eventDate} />
				</div>

				{/* CTA Buttons */}
				<div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button size="lg" className="min-w-[200px] font-normal">
						Get Delegate Pass
					</Button>
					<Button
						size="lg"
						variant="outline"
						className="min-w-[200px] font-normal"
					>
						Book Your Booth
					</Button>
				</div>
			</div>
		</section>
	);
}
