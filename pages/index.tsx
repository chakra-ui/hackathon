import { Criteria } from '../src/components/Criteria';
import { Goal } from '../src/components/Goal';
import { LogoGrid } from '../src/components/LogoGrid';
import { Prizes } from '../src/components/Prizes';
import { Register } from '../src/components/Register';
import { Rounds } from '../src/components/Rounds';
import { Timeline } from '../src/components/Timeline';

export default function Home() {
  return (
    <div>
      <LogoGrid />
      <Goal />
      <Rounds />
      <Timeline />
      <Prizes />
      <Criteria />
      <Register />
    </div>
  );
}
