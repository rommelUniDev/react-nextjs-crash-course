import Link from 'next/link';

const LifeAreasTable = ({ data }) => {
  if (!data.length)
    return (
      <p>No key areas added yet. Add one now to map it on the bubble chart.</p>
    );
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Life Area</th>
          <th>Satisfaction</th>
          <th>Importance</th>
          <th>Hours per Week Spent</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((keyLifeArea) => (
          <tr key={keyLifeArea.id}>
            <th scope="row">{keyLifeArea.name}</th>
            <td>{lifeAreaMap[keyLifeArea.lifeArea]}</td>
            <td>{keyLifeArea.satisfactionRating}</td>
            <td>{keyLifeArea.importanceRating}</td>
            <td>{keyLifeArea.hoursPerWeek}</td>
            <td style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              <Link href={`/life-portfolio/${keyLifeArea.id}`}>View</Link>
              <Link href={`/life-portfolio/${keyLifeArea.id}/edit`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LifeAreasTable;
