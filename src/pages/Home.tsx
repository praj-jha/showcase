import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { CompaniesSlider } from '@/components/companies-slider';
import { PMQuote } from '@/components/pm-quote';
import { SpeakersNew } from '@/components/speakers-new';
import { Pricing } from '@/components/pricing';
import { OrganizingCommittee } from '@/components/organizing-committee';
import { FAQs } from '@/components/faqs';

export function Home() {
	return (
		<main className="relative min-h-screen">
			<DottedSurface />
			<Header />
			<Hero />
			<CompaniesSlider />
			<PMQuote />
			<SpeakersNew />
			<Pricing />
			<OrganizingCommittee />
			<FAQs />
		</main>
	);
}

