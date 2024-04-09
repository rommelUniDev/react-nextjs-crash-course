
/**
 * 
 * @param {Object} params
 * @param {string} params.keyAreaId The key life area to display
 * @returns 
 */
function KeyAreaPage({ params }) {
  const { keyAreaId } = params;
  console.info('Key Area ID:', keyAreaId)
  return (
    <div id={keyAreaId}>
      <h1>Key Life Area: Something</h1>
      <p>Life Area: Relationships</p>
      <p>Satisfaction Rating: 10</p>
      <p>Importance Rating: 10</p>
      <p>Hours Per Week: 10</p>
    </div>
  );
}

export default KeyAreaPage;
