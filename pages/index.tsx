import { Criteria } from '../src/components/Criteria';
import { Footer } from '../src/components/Footer';
import { Goal } from '../src/components/Goal';
import { Header } from '../src/components/Header';
import { Navigation } from '../src/components/Navigation';
import { Prizes } from '../src/components/Prizes';
import { Register } from '../src/components/Register';
import { Rounds } from '../src/components/Rounds';
import { Rules } from '../src/components/Rules';
import { Timeline } from '../src/components/Timeline';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <Goal />
      <Rounds />
      <Rules />
      <Timeline />
      <Prizes />
      <Criteria />
      <Register />
      <Footer />
    </div>
  );
}
