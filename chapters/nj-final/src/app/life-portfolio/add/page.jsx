import LifeAreaForm from '@/components/LifeAreaForm';
import prisma from '@/lib/prisma';
import Link from 'next/link';
import { redirect } from 'next/navigation';

async function AddKeyLifeAreaPage() {
  async function handleFormSubmit(keyLifeArea) {
    'use server';
    const newKeyLifeArea = await prisma.strategicLifeArea.create({
      data: keyLifeArea,
    });
    console.info('Key Life Area created', newKeyLifeArea);
    redirect(`/life-portfolio/${newKeyLifeArea.id}`);
  }

  return (
    <div>
      <h3>Add your Key Life Area</h3>
      <LifeAreaForm
        initialKeyLifeArea={{
          name: '',
          lifeArea: '',
          satisfactionRating: 0,
          importanceRating: 0,
          hoursPerWeek: 0,
        }}
        onFormSubmit={handleFormSubmit}
      />
      <Link href="/life-portfolio">Go Back</Link>
    </div>
  );
}

export default AddKeyLifeAreaPage;
