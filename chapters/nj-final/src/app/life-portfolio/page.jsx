import LifeAreasTable from '@/components/LifeAreasTable';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import './page.css';

async function getAllLifeAreas() {
  const allLifeAreas = await prisma.strategicLifeArea.findMany();
  return allLifeAreas;
}

async function LifePortfolioPage() {
  const lifeAreas = await getAllLifeAreas();
  return (
    <div>
      <LifeAreasTable data={lifeAreas} />
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Link href="/life-portfolio/add">Add a new Key Life Area</Link>
        <Link href="/">Back to Graph</Link>
      </div>
    </div>
  );
}

export default LifePortfolioPage;
