import Link from 'next/link';

import LifeAreasTable from '../../components/LifeAreasTable';

function LifePortfolioPage() {
  return (
    <div>
      <h2>Key Life Areas</h2>
      <LifeAreasTable data={[]} />
      <Link href="/life-portfolio/add">Add a new Key Life Area</Link>
    </div>
  );
}

export default LifePortfolioPage;
