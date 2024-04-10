import LifeAreaForm from '@/components/LifeAreaForm';

function EditKeyAreaPage({ params }) {
  const { keyAreaId } = params;
  console.info('Edit Key Area ID:', keyAreaId);
  return (
    <div id={keyAreaId}>
      <h3>Edit Key Life Area</h3>
      <LifeAreaForm
        initialKeyLifeArea={{
          name: 'Something',
          lifeArea: 'Relationships',
          satisfactionRating: 10,
          importanceRating: 10,
          hoursPerWeek: 10,
        }}
      />
    </div>
  );
}

export default EditKeyAreaPage;
