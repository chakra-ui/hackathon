import { Criteria } from '../src/components/Criteria';
import { Footer } from '../src/components/Footer';
import { Goal } from '../src/components/Goal';
import { Header } from '../src/components/Header';
import { LogoGrid } from '../src/components/LogoGrid';
import { Navigation } from '../src/components/Navigation';
import { Winners } from '../src/components/Prizes';
import { Rounds } from '../src/components/Rounds';
import { Rules } from '../src/components/Rules';
import { Timeline } from '../src/components/Timeline';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <LogoGrid />
      <Goal />
      <Rounds />
      <Rules />
      <Timeline />
      <Winners />
      <Criteria />
      <Footer />
    </div>
  );
}
