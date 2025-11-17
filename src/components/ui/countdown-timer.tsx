import { useState, useEffect } from 'react';

interface TimeLeft {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

export function CountdownTimer({ targetDate }: { targetDate: Date }) {
	const calculateTimeLeft = (): TimeLeft => {
		const difference = +targetDate - +new Date();

		if (difference > 0) {
			return {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const timeUnits = [
		{ label: 'Days', value: timeLeft.days },
		{ label: 'Hours', value: timeLeft.hours },
		{ label: 'Minutes', value: timeLeft.minutes },
		{ label: 'Seconds', value: timeLeft.seconds },
	];

	return (
		<div className="flex items-center justify-center gap-4 md:gap-8">
			{timeUnits.map((unit, index) => (
				<div key={unit.label} className="flex items-center gap-4 md:gap-8">
					<div className="flex flex-col items-center">
						<div className="flex h-16 w-16 items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-sm md:h-20 md:w-20">
							<span className="text-2xl font-light tabular-nums text-primary md:text-3xl">
								{String(unit.value).padStart(2, '0')}
							</span>
						</div>
						<span className="mt-2 text-xs font-light text-muted-foreground md:text-sm">
							{unit.label}
						</span>
					</div>
					{index < timeUnits.length - 1 && (
						<span className="text-2xl font-light text-muted-foreground md:text-3xl">
							:
						</span>
					)}
				</div>
			))}
		</div>
	);
}




