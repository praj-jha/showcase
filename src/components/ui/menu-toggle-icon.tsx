import * as React from 'react';
import { cn } from '@/lib/utils';

interface MenuToggleIconProps extends React.SVGProps<SVGSVGElement> {
	open?: boolean;
	duration?: number;
}

export const MenuToggleIcon = React.forwardRef<
	SVGSVGElement,
	MenuToggleIconProps
>(({ open = false, duration = 200, className, ...props }, ref) => {
	return (
		<svg
			ref={ref}
			className={cn('transition-transform', className)}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<line
				x1="4"
				y1="6"
				x2="20"
				y2="6"
				style={{
					transition: `transform ${duration}ms ease, opacity ${duration}ms ease`,
					transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
					transformOrigin: 'center',
				}}
			/>
			<line
				x1="4"
				y1="12"
				x2="20"
				y2="12"
				style={{
					transition: `opacity ${duration}ms ease`,
					opacity: open ? 0 : 1,
				}}
			/>
			<line
				x1="4"
				y1="18"
				x2="20"
				y2="18"
				style={{
					transition: `transform ${duration}ms ease, opacity ${duration}ms ease`,
					transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
					transformOrigin: 'center',
				}}
			/>
		</svg>
	);
});

MenuToggleIcon.displayName = 'MenuToggleIcon';




