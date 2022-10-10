import React from "react";

const PopularCities = () => {
  return (
    <section city="" highlight="">
      <space small=""></space>
      <wrapper>
        <group direction="column">
          <h2 data-heading="" data-weight="800" data-size="xx-large">
            Popular Cities
          </h2>
          <text light="" wrap="" wrap-line="">
            Duis semper non metus vitae posuere.
            <br />
            Cras lorem diam, tempor sed bibendum vulputate, mollis et ipsum.
          </text>
        </group>

        <space></space>

        <group gap="small">
          <div className="button large primary">
            <text> San Francisco </text>
          </div>
          <div className="button large highlight">
            <text> New York </text>
          </div>
          <div className="button large highlight">
            <text> Chicago </text>
          </div>
          <div className="button large highlight">
            <text> Miami </text>
          </div>
          <div className="button large highlight">
            <text> Los Angeles </text>
          </div>
          <div className="button large highlight">
            <text> San Diego </text>
          </div>
          <div className="button large highlight">
            <text> Atlanta </text>
          </div>
        </group>
      </wrapper>

      <space></space>
    </section>
  );
};

export default PopularCities;
