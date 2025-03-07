import React from "react";

export default function FilterComponent({ propsort }) {
  // Prevent page reload on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Handle sorting change
  const handleSortChange = (e) => {
    const value = e.target.value;
    propsort(value); // Pass selected sorting value to parent component
  };

  return (
    <form className="mt-4 mx-4 flex justify-between" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <select
          onChange={handleSortChange}
          id="filterLearningMaterials"
          name="filterLearningMaterials"
          className="text-sm focus:ring-custom-sky-blue focus:border-custom-sky-blue block w-full p-4 focus:outline-none text-gray-400 border-none rounded-xl bg-light-gray"
        >
          <option hidden value="">
            Sort By
          </option>
          <optgroup label="Sort By">
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </optgroup>
        </select>
      </div>
    </form>
  );
}
