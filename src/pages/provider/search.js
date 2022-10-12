import React from "react";

const Search = () => {
  return (
    <section filter="">
      <wrapper>
        <group invert="">
          <h2 data-heading="" data-weight="800" data-size="large">
            What Service Are You Looking For?{" "}
          </h2>
        </group>
        <space></space>
        <group gap="small">
          <input type="text" placeholder="Search Postal Code" />

          <select className="select" placeholder="Select Service">
            <option value="" disabled>
              Select Service
            </option>
            <optgroup label="Personal Trainer">
              <option>Strength Training</option>
              <option>Body Building</option>
            </optgroup>
            <optgroup label="Chiropractic">
              <option>Diversified</option>
              <option>Activator</option>
            </optgroup>
          </select>

          <input type="text" placeholder="Select Date & Time" />
          <input type="text" placeholder="Select Distance" />
          <div className="button primary large">
            <icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-search"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </icon>
            <text>Search</text>
          </div>
        </group>
      </wrapper>
    </section>
  );
};

export default Search;
