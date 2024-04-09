import Link from 'next/link';

const LifeDisplayArea = ({ lifeArea }) => {
  return (
    <div>
      <h2>{lifeArea.name}</h2>
      <p>Life Area: {lifeArea.lifeArea}</p>
      <p>Satisfaction Rating: {lifeArea.satisfactionRating}</p>
      <p>Importance Rating: {lifeArea.importanceRating}</p>
      <p>Hours Per Week: {lifeArea.hoursPerWeek}</p>
      <Link href={`/${lifeArea.id}/edit`}>Edit</Link>
    </div>
  );
};

export default LifeDisplayArea;
