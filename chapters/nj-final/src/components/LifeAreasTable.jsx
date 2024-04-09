const LifeAreasTable = ({ data }) => {
  if (!data.length)
    return (
      <p>No key areas added yet. Add one now to map it on the bubble chart.</p>
    );

  return (
    <table>
      <thead>
        <tr>
          <th>Area</th>
          <th>Satisfaction</th>
          <th>Importance</th>
          <th>Hours per Week Spent</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            id,
            area,
            satisfactionRating,
            importanceRating,
            hoursPerWeek,
          }) => (
            <tr key={id}>
              <td>{area}</td>
              <td>{satisfactionRating}</td>
              <td>{importanceRating}</td>
              <td>{hoursPerWeek}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};

export default LifeAreasTable;
