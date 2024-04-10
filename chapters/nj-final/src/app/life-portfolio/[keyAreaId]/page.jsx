import { lifeAreaMap } from '@/lib/lifeAreaMap';
import prisma from '@/lib/prisma';
import Link from 'next/link';

const getKeyLifeArea = async (keyAreaId) => {
  const strategicLifeArea = await prisma.strategicLifeArea.findUnique({
    where: { id: keyAreaId },
  });
  return strategicLifeArea;
};

async function KeyAreaPage({ params }) {
  const { keyAreaId } = params;
  const keyLifeArea = await getKeyLifeArea(keyAreaId);

  if (!keyLifeArea) {
    return (
      <div>
        <h3>Key Life Area Not Found</h3>
      </div>
    );
  }
  const editLinkHref = `/life-portfolio/${keyAreaId}/edit`;
  return (
    <div id={keyAreaId}>
      <h4>Key Life Area: {keyLifeArea.name}</h4>
      <p>Life Area: {lifeAreaMap[keyLifeArea.lifeArea]}</p>
      <p>Satisfaction Rating: {keyLifeArea.satisfactionRating}</p>
      <p>Importance Rating: {keyLifeArea.importanceRating}</p>
      <p>Hours Per Week: {keyLifeArea.hoursPerWeek}</p>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
        <Link href={editLinkHref}>Edit</Link>
        <Link href="/life-portfolio">Back to Life Portfolio</Link>
      </div>
    </div>
  );
}

export default KeyAreaPage;
