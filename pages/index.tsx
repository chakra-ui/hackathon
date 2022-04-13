import { Goal } from '../src/components/Goal';
import { LogoGrid } from '../src/components/LogoGrid';
import { Rounds } from '../src/components/Rounds';
import { Timeline } from '../src/components/Timeline';

export default function Home() {
  return (
    <div>
      <LogoGrid />
      <Goal />
      <Rounds />
      <Timeline />
    </div>
  );
}
