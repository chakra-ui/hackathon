import { Goal } from '../src/components/Goal';
import { LogoGrid } from '../src/components/LogoGrid';
import { Rounds } from '../src/components/Rounds';

export default function Home() {
  return (
    <div>
      <LogoGrid />
      <Goal />
      <Rounds />
    </div>
  );
}
