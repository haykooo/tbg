import React from "react";

const Filter = () => {
  return (
    <section>
      <wrapper>
        <wrap layout="block">
          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                10k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Personal Trainers
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/1.jpg")} />
              </picture>
            </back>
          </service>
          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                7k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Chiropractors
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/2.jpg")} />
              </picture>
            </back>
          </service>
          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                10k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Acupuncturist
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/3.jpg")} />
              </picture>
            </back>
          </service>
          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                3k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Fitness Center / Gym
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/6.jpg")} />
              </picture>
            </back>
          </service>

          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                3k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Nutritionist / Dietitian
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/4.jpg")} />
              </picture>
            </back>
          </service>
          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                10k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Physical Therapist
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/7.jpg")} />
              </picture>
            </back>
          </service>

          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                10k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Massage Therapist
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/5.jpg")} />
              </picture>
            </back>
          </service>
          <service>
            <group direction="column">
              <h4 data-heading="" data-weight="800" data-size="xx-large">
                3k+
              </h4>
              <h3 data-heading="" data-weight="800" data-size="large">
                Wellness / Med Spa
              </h3>
            </group>
            <back>
              <picture>
                <img alt="" src={require("../../res/8.jpg")} />
              </picture>
            </back>
          </service>
        </wrap>
      </wrapper>
    </section>
  );
};

export default Filter;
