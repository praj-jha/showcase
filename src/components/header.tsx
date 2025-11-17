import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';

export function Header() {
	const [open, setOpen] = React.useState(false);
	const [moreDropdownOpen, setMoreDropdownOpen] = React.useState(false);
	const [ii26DropdownOpen, setIi26DropdownOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const navigate = useNavigate();
	const location = useLocation();
	
	const ii26TimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
	const moreTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

	const links = [
		{
			label: 'Future Summit',
			href: '/futuresummit',
		},
		{
			label: 'India 2047',
			href: '/india2047',
		},
		{
			label: 'Speakers',
			href: '/allspeakers',
		},
		{
			label: 'Expo',
			href: '/expo',
		},
	];

	// Close all dropdowns
	const closeAllDropdowns = React.useCallback(() => {
		setIi26DropdownOpen(false);
		setMoreDropdownOpen(false);
	}, []);

	// Handle mobile menu scroll lock
	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	// Click outside handler
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (moreDropdownOpen && !target.closest('.more-dropdown-container')) {
				setMoreDropdownOpen(false);
			}
			if (ii26DropdownOpen && !target.closest('.ii26-dropdown-container')) {
				setIi26DropdownOpen(false);
			}
		};

		if (moreDropdownOpen || ii26DropdownOpen) {
			document.addEventListener('mousedown', handleClickOutside);
			return () => document.removeEventListener('mousedown', handleClickOutside);
		}
	}, [moreDropdownOpen, ii26DropdownOpen]);

	// Close dropdowns on scroll
	React.useEffect(() => {
		const handleScroll = () => {
			if (moreDropdownOpen || ii26DropdownOpen) {
				closeAllDropdowns();
			}
		};

		if (moreDropdownOpen || ii26DropdownOpen) {
			window.addEventListener('scroll', handleScroll, { passive: true });
			return () => window.removeEventListener('scroll', handleScroll);
		}
	}, [moreDropdownOpen, ii26DropdownOpen, closeAllDropdowns]);

	// Keyboard navigation
	React.useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && (moreDropdownOpen || ii26DropdownOpen)) {
				closeAllDropdowns();
			}
		};

		if (moreDropdownOpen || ii26DropdownOpen) {
			document.addEventListener('keydown', handleKeyDown);
			return () => document.removeEventListener('keydown', handleKeyDown);
		}
	}, [moreDropdownOpen, ii26DropdownOpen, closeAllDropdowns]);

	// Clear timeouts on unmount
	React.useEffect(() => {
		return () => {
			if (ii26TimeoutRef.current) clearTimeout(ii26TimeoutRef.current);
			if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
		};
	}, []);

	// Dropdown handlers with delay for better UX
	const handleII26MouseEnter = () => {
		if (ii26TimeoutRef.current) clearTimeout(ii26TimeoutRef.current);
		setMoreDropdownOpen(false); // Close other dropdown
		setIi26DropdownOpen(true);
	};

	const handleII26MouseLeave = () => {
		ii26TimeoutRef.current = setTimeout(() => {
			setIi26DropdownOpen(false);
		}, 150); // Small delay before closing
	};

	const handleII26Click = () => {
		setIi26DropdownOpen((prev) => !prev);
		setMoreDropdownOpen(false);
	};

	const handleMoreMouseEnter = () => {
		if (moreTimeoutRef.current) clearTimeout(moreTimeoutRef.current);
		setIi26DropdownOpen(false); // Close other dropdown
		setMoreDropdownOpen(true);
	};

	const handleMoreMouseLeave = () => {
		moreTimeoutRef.current = setTimeout(() => {
			setMoreDropdownOpen(false);
		}, 150); // Small delay before closing
	};

	const handleMoreClick = () => {
		setMoreDropdownOpen((prev) => !prev);
		setIi26DropdownOpen(false);
	};

	const handleDropdownMouseEnter = (timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>) => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);
	};

	// Handle FAQ navigation - scroll if on home, navigate if not
	const handleFAQClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIi26DropdownOpen(false);
		setOpen(false);
		
		if (location.pathname === '/') {
			// If on home page, scroll to FAQ section
			const faqSection = document.getElementById('faqs');
			if (faqSection) {
				faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		} else {
			// If not on home page, navigate to home with hash
			navigate('/#faqs');
			setTimeout(() => {
				const faqSection = document.getElementById('faqs');
				if (faqSection) {
					faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}, 100);
		}
	};

	return (
		<header
			className={cn(
				'sticky top-0 z-50 mx-auto w-full max-w-7xl border-b border-transparent md:rounded-md md:border md:transition-all md:ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-border backdrop-blur-lg md:top-4 md:max-w-6xl md:shadow':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className={cn(
					'flex h-16 w-full items-center justify-between px-6 md:h-24 md:transition-all md:ease-out',
					{
						'md:px-4': scrolled,
					},
				)}
			>
				<div className="flex items-center gap-3 md:gap-4">
					<img 
						src="https://res.cloudinary.com/dgo3wykbm/image/upload/v1763362888/iilw_bi8sj8.svg"
						alt="India Innovates"
						className="h-28 w-auto md:h-40"
					/>
					<img 
						src="/hnb.png"
						alt="HNB"
						className="h-7 w-auto md:h-10"
					/>
				</div>
				<div className="hidden items-center gap-3 md:flex">
					{/* India Innovates 2026 Dropdown */}
					<div 
						className="relative ii26-dropdown-container"
						onMouseEnter={handleII26MouseEnter}
						onMouseLeave={handleII26MouseLeave}
					>
						<button
							onClick={handleII26Click}
							aria-expanded={ii26DropdownOpen}
							aria-haspopup="true"
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'font-normal',
								}),
								ii26DropdownOpen && 'bg-accent'
							)}
						>
							India Innovates 2026
							<svg
								className={`ml-1 h-4 w-4 transition-transform duration-200 ${ii26DropdownOpen ? 'rotate-180' : ''}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						
						{ii26DropdownOpen && (
							<div 
								role="menu"
								aria-orientation="vertical"
								className="absolute left-0 mt-1 w-64 rounded-md border border-border bg-background/95 backdrop-blur-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
								onMouseEnter={() => handleDropdownMouseEnter(ii26TimeoutRef)}
								onMouseLeave={handleII26MouseLeave}
							>
								<a
									href="/about-ii26"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary first:rounded-t-md focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setIi26DropdownOpen(false)}
								>
									<div>II26, New Delhi</div>
									<div className="text-xs text-muted-foreground">About India Innovates 2026</div>
								</a>
								<a
									href="/partners"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setIi26DropdownOpen(false)}
								>
									<div>Partners</div>
									<div className="text-xs text-muted-foreground">Why partner with II26</div>
								</a>
								<a
									href="/allspeakers"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setIi26DropdownOpen(false)}
								>
									Speakers
								</a>
								<a
									href="/allpasses"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setIi26DropdownOpen(false)}
								>
									Buy Delegate Passes
								</a>
								<a
									href="/#faqs"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={handleFAQClick}
								>
									FAQs
								</a>
								<a
									href="/contact"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary last:rounded-b-md focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setIi26DropdownOpen(false)}
								>
									Contact Us
								</a>
							</div>
						)}
					</div>

					{links.map((link, i) => (
						<a
							key={i}
							className={buttonVariants({
								variant: 'ghost',
								className: 'font-normal',
							})}
							href={link.href}
						>
							{link.label}
						</a>
					))}
					
					{/* More Dropdown */}
					<div 
						className="relative more-dropdown-container"
						onMouseEnter={handleMoreMouseEnter}
						onMouseLeave={handleMoreMouseLeave}
					>
						<button
							onClick={handleMoreClick}
							aria-expanded={moreDropdownOpen}
							aria-haspopup="true"
							className={cn(
								buttonVariants({
									variant: 'ghost',
									className: 'font-normal',
								}),
								moreDropdownOpen && 'bg-accent'
							)}
						>
							More
							<svg
								className={`ml-1 h-4 w-4 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						
						{moreDropdownOpen && (
							<div 
								role="menu"
								aria-orientation="vertical"
								className="absolute right-0 mt-1 w-48 rounded-md border border-border bg-background/95 backdrop-blur-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200"
								onMouseEnter={() => handleDropdownMouseEnter(moreTimeoutRef)}
								onMouseLeave={handleMoreMouseLeave}
							>
								<a
									href="/highlights"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary first:rounded-t-md focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setMoreDropdownOpen(false)}
								>
									Highlights
								</a>
								<a
									href="/jointeam"
									role="menuitem"
									className="block px-4 py-2.5 text-sm font-normal text-foreground transition-colors hover:bg-primary/10 hover:text-primary last:rounded-b-md focus:bg-primary/10 focus:text-primary focus:outline-none"
									onClick={() => setMoreDropdownOpen(false)}
								>
									Join Our Team
								</a>
							</div>
						)}
					</div>
					
					<Link to="/allpasses">
						<Button className="font-normal">Delegate Pass</Button>
					</Link>
				</div>
				<Button
					size="icon"
					variant="outline"
					onClick={() => setOpen(!open)}
					className="md:hidden"
				>
					<MenuToggleIcon open={open} className="size-5" duration={300} />
				</Button>
			</nav>
			<div
				className={cn(
					'bg-background/90 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-2">
						<div className="px-4 py-2 text-xs font-medium text-primary uppercase tracking-wider">
							India Innovates 2026
						</div>
						<a
							href="/about-ii26"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							II26, New Delhi
						</a>
						<a
							href="/partners"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							Partners
						</a>
						<a
							href="/allspeakers"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							Speakers
						</a>
						<a
							href="/allpasses"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							Buy Delegate Passes
						</a>
						<a
							href="/#faqs"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={handleFAQClick}
						>
							FAQs
						</a>
						<a
							href="/contact"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							Contact Us
						</a>
						
						<div className="my-2 border-t border-border"></div>
						
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start font-normal',
								})}
								href={link.href}
								onClick={() => setOpen(false)}
							>
								{link.label}
							</a>
						))}
						
						<div className="my-2 border-t border-border"></div>
						
						<a
							href="/highlights"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							Highlights
						</a>
						<a
							href="/jointeam"
							className={buttonVariants({
								variant: 'ghost',
								className: 'justify-start font-normal',
							})}
							onClick={() => setOpen(false)}
						>
							Join Our Team
						</a>
					</div>
					<div className="flex flex-col gap-2">
						<Link to="/allpasses" onClick={() => setOpen(false)}>
							<Button className="w-full font-normal">Delegate Pass</Button>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}

export const IndiaInnovatesLogo = (props: React.ComponentProps<'svg'>) => (
	<svg viewBox="0 0 200 40" fill="currentColor" {...props}>
		<text
			x="5"
			y="28"
			fontFamily="system-ui, -apple-system, sans-serif"
			fontSize="20"
			fontWeight="500"
			letterSpacing="-0.5"
		>
			INDIA INNOVATES
		</text>
		<text
			x="5"
			y="38"
			fontFamily="system-ui, -apple-system, sans-serif"
			fontSize="8"
			fontWeight="400"
			letterSpacing="1"
		>
			2026
		</text>
	</svg>
);


