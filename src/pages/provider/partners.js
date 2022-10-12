import React from "react";
import { Link } from "react-router-dom";

const Partners = () => {
  return (
    <section partners="" highlight="">
      <wrapper>
        <group direction="column">
          <h2 data-heading="" data-weight="800" data-size="xx-large">
            Partners
          </h2>
          {/*<text light="" wrap="" wrap-line="">*/}
          {/*    Duis semper non metus vitae posuere. Cras lorem diam,*/}
          {/*    <br />*/}
          {/*    tempor sed bibendum vulputate, mollis et ipsum.*/}
          {/*</text>*/}
        </group>
        <space></space>
        <group gap="large">
          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/1.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/2.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/3.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/4.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/5.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/6.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/7.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/8.png")} />
              </picture>
            </Link>
          </partner>

          <partner>
            <Link to="/">
              <picture>
                <img alt="" src={require("../../res/partner/9.png")} />
              </picture>
            </Link>
          </partner>
        </group>
      </wrapper>
      <space></space>
    </section>
  );
};

export default Partners;
