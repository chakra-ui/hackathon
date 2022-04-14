import { Criteria } from '../src/components/Criteria';
import { Footer } from '../src/components/Footer';
import { Goal } from '../src/components/Goal';
import { Header } from '../src/components/Header';
import { LogoGrid } from '../src/components/LogoGrid';
import { Prizes } from '../src/components/Prizes';
import { Register } from '../src/components/Register';
import { Rounds } from '../src/components/Rounds';
import { Timeline } from '../src/components/Timeline';

export default function Home() {
  return (
    <div>
      <Header />
      <LogoGrid />
      <Goal />
      <Rounds />
      <Timeline />
      <Prizes />
      <Criteria />
      <Register />
      <Footer />
    </div>
  );
}
