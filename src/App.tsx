import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { AllSpeakers } from '@/pages/AllSpeakers';
import { AllPasses } from '@/pages/AllPasses';
import { Highlights } from '@/pages/Highlights';
import { Expo } from '@/pages/Expo';
import { About } from '@/pages/About';
import { Partners } from '@/pages/Partners';
import { ScrollToTop } from '@/components/ScrollToTop';

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/allspeakers" element={<AllSpeakers />} />
				<Route path="/allpasses" element={<AllPasses />} />
				<Route path="/highlights" element={<Highlights />} />
				<Route path="/expo" element={<Expo />} />
				<Route path="/about-ii26" element={<About />} />
				<Route path="/partners" element={<Partners />} />
			</Routes>
		</Router>
	);
}

export default App;
