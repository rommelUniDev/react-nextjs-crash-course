'use client';

import { useState } from 'react';

const LifeAreaForm = ({ initialKeyLifeArea }) => {
  const [keyLifeArea, setKeyLifeArea] = useState(initialKeyLifeArea);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKeyLifeArea({ ...keyLifeArea, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the API here to submit the form data
    console.info('Form submitted', keyLifeArea);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={keyLifeArea.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Life Area:
        <select
          name="lifeArea"
          value={keyLifeArea.lifeArea}
          onChange={handleChange}
        >
          <option value="relationships">Relationships</option>
          <option value="body-mind-spirit">Body, Mind, Spirituality</option>
          <option value="community-society">Community and Society</option>
          <option value="job-learning-finances">
            Job, Education, and Finances
          </option>
          <option value="interests-entertainment">
            Interests and Entertainment
          </option>
          <option value="personal-care">Personal Care</option>
        </select>
      </label>
      <br />
      <label>
        Satisfaction Rating:
        <input
          type="number"
          name="satisfactionRating"
          value={keyLifeArea.satisfactionRating}
          min={0}
          max={10}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Importance Rating:
        <input
          type="number"
          name="importanceRating"
          value={keyLifeArea.importanceRating}
          min={0}
          max={10}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Hours Per Week:
        <input
          type="number"
          name="hoursPerWeek"
          value={keyLifeArea.hoursPerWeek}
          onChange={handleChange}
          min={0}
          max={168}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LifeAreaForm;
