
/**
 * 
 * @param {Object} params
 * @param {string} params.keyAreaId The key life area to display
 * @returns 
 */
function KeyAreaPage({ params }) {
  const { keyAreaId } = params;
  return <div>The ID of the key area you are showing is {keyAreaId}</div>;
}

export default KeyAreaPage;
