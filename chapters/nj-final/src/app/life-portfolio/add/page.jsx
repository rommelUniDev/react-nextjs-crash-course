import LifeAreaForm from '../../../components/LifeAreaForm';

function AddKeyLifeAreaPage() {
  return (
    <div>
      <h2>Add your Key Life Area</h2>
      <LifeAreaForm initialKeyLifeArea={{
        name: '',
        lifeArea: '',
        satisfactionRating: 0,
        importanceRating: 0,
        hoursPerWeek: 0
      }} />
    </div>
  );
}

export default AddKeyLifeAreaPage;
