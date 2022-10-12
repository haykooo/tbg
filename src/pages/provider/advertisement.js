import React from "react";

const Advertisement = () => {
  return (
    <section>
      <space></space>

      <wrapper data-height="auto">
        <group direction="column">
          <h2 data-heading="" data-weight="800" data-size="xx-large">
            Promotions / Products
          </h2>
          {/*<text light="" wrap="" wrap-line="">*/}
          {/*    Duis semper non metus vitae posuere.*/}
          {/*    <br />*/}
          {/*    Cras lorem diam, tempor sed bibendum vulputate, mollis et ipsum.*/}
          {/*</text>*/}
        </group>
      </wrapper>
      <space></space>

      <slider mini="">
        <slide>
          <back>
            <picture>
              <img alt="" src={require("../../res/slide2.jpg")} />
            </picture>
          </back>
          <wrapper>
            <group direction="column">
              <group invert="">
                <space></space>
                <h1 data-heading="" data-weight="800" data-size="x-large">
                  <text wrap-line="">
                    Find top-rated certified pros in your area
                  </text>
                </h1>
                <space></space>
              </group>
              <action hide="">
                <div className="button primary large">
                  <text>Learn More</text>
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
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </icon>
                </div>
              </action>
            </group>
          </wrapper>
        </slide>

        <slide mini="true">
          <back>
            <picture>
              <img alt="" src={require("../../res/slide1.jpg")} />
            </picture>
          </back>
          <wrapper>
            <group direction="column">
              <group invert="">
                <space></space>
                <h1 data-heading="" data-weight="800" data-size="x-large">
                  <text wrap-line="">
                    Find top-rated certified pros in your area
                  </text>
                </h1>
                <space></space>
              </group>
              <action hide="">
                <div className="button primary large">
                  <text>Learn More</text>
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
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </icon>
                </div>
              </action>
            </group>
          </wrapper>
        </slide>

        <slide mini="true">
          <back>
            <picture>
              <img alt="" src={require("../../res/slide2.jpg")} />
            </picture>
          </back>
          <wrapper>
            <group direction="column">
              <group invert="">
                <space></space>
                <h1 data-heading="" data-weight="800" data-size="x-large">
                  <text wrap-line="">
                    Find top-rated certified pros in your area
                  </text>
                </h1>
                <space></space>
              </group>
              <action hide="">
                <div className="button primary large">
                  <text>Learn More</text>
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
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </icon>
                </div>
              </action>
            </group>
          </wrapper>
        </slide>
      </slider>

      <space></space>
    </section>
  );
};

export default Advertisement;
