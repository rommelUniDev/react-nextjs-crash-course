import Link from 'next/link';

import BubbleChart from '../components/BubbleChart';

export default function Home() {
  return (
    <div>
      <BubbleChart title="Key Areas of Life Mapping" data={[]} />
      <div>
        <h2>About</h2>
        <p>
          This is a simple app to help you map out the key areas of your life
          and track your progress in each area.
        </p>
        <Link href="/life-portfolio">Review your Key Life Areas</Link>
      </div>
    </div>
  );
}
