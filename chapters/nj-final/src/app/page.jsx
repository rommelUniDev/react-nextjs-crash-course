import BubbleChart from '@/components/BubbleChart';
import prisma from '@/lib/prisma';
import { lifeAreaMap } from '@/lib/lifeAreaMap';
import Link from 'next/link';

async function getAllLifeAreas() {
  const allLifeAreas = await prisma.strategicLifeArea.findMany();
  const remappedLifeAreas = allLifeAreas.map((strategicLifeArea) => [
    strategicLifeArea.name,
    strategicLifeArea.satisfactionRating,
    strategicLifeArea.importanceRating,
    lifeAreaMap[strategicLifeArea.lifeArea],
    strategicLifeArea.hoursPerWeek,
  ]);
  return [
    [
      'ID',
      'Satisfaction Rating',
      'Importance Rating',
      'Life Area',
      'Hours Per Week',
    ],
    ...remappedLifeAreas,
  ];
}

export default async function Home() {
  const allLifeAreas = await getAllLifeAreas();
  return (
    <div>
      <BubbleChart title="Key Areas of Life Mapping" data={allLifeAreas} />
      <div>
        <h2>About</h2>
        <p>
          This is a simple app to help you map out the key areas of your life
          and track your progress in each area.
        </p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          <Link href="https://www.youtube.com/watch?v=dbiNhAZlXZk" rel="noopener noreferrer" target="_blank">
            Video Reference
          </Link>
          <Link href="/life-portfolio">Review your Key Life Areas</Link>
        </div>
      </div>
    </div>
  );
}
