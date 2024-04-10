import prisma from '@/lib/prisma';
import LifeAreaForm from '@/components/LifeAreaForm';
import Link from 'next/link';
import { redirect } from 'next/navigation';

const getKeyLifeArea = async (keyAreaId) => {
  const strategicLifeArea = await prisma.strategicLifeArea.findUnique({
    where: { id: keyAreaId },
  });
  return strategicLifeArea;
};

async function EditKeyAreaPage({ params }) {
  const { keyAreaId } = params;
  const keyLifeArea = await getKeyLifeArea(keyAreaId);

  if (!keyLifeArea) {
    return (
      <div>
        <h3>Key Life Area to Edit Not Found</h3>
      </div>
    );
  }

  async function handleFormSubmit(keyLifeArea) {
    'use server';

    const hoursPerWeek = Number(keyLifeArea.hoursPerWeek);
    const updatedKeyLifeArea = await prisma.strategicLifeArea.update({
      where: { id: keyAreaId },
      data: {
        ...keyLifeArea,
        hoursPerWeek,
      },
    });
    console.info('Key Life Area updated', updatedKeyLifeArea);    
    redirect(`/life-portfolio/${keyAreaId}`);
  }

  const keyAreaLink = `/life-portfolio/${keyAreaId}`;
  return (
    <div id={keyAreaId}>
      <h3>Edit Key Life Area</h3>
      <LifeAreaForm
        initialKeyLifeArea={keyLifeArea}
        onFormSubmit={handleFormSubmit}
      />
      <Link href={keyAreaLink}>Cancel</Link>
    </div>
  );
}

export default EditKeyAreaPage;
