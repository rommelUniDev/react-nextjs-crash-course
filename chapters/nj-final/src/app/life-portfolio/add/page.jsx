import LifeAreaForm from '../../../components/LifeAreaForm';

function AddKeyLifeAreaPage() {
  return (
    <div>
      <h3>Add your Key Life Area</h3>
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
