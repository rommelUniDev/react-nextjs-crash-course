'use client';

import { lifeAreaMap } from '@/lib/lifeAreaMap';
import { useState } from 'react';

const LifeAreaForm = ({ initialKeyLifeArea, onFormSubmit }) => {
  const [keyLifeArea, setKeyLifeArea] = useState(initialKeyLifeArea);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKeyLifeArea({ ...keyLifeArea, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Convert the string values to numbers
    const hoursPerWeek = Number(keyLifeArea.hoursPerWeek);
    const satisfactionRating = Number(keyLifeArea.satisfactionRating);
    const importanceRating = Number(keyLifeArea.importanceRating);
    onFormSubmit({
      ...keyLifeArea,
      hoursPerWeek,
      satisfactionRating,
      importanceRating,
    });
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
          {Object.keys(lifeAreaMap).map((key) => (
            <option key={key} value={key}>
              {lifeAreaMap[key]}
            </option>
          ))}
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
