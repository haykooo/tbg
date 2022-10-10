import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <section main_slider="">
      <slider>
        <Carousel
          showArrows={true}
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          interval={3500}
          showThumbs={false}
          showStatus={false}
        >
          <slide>
            <back>
              <picture>
                <img alt="" src={require("../../res/slide1.jpg")} />
              </picture>
            </back>
            <wrapper>
              <space></space>
              <group invert="">
                <space large=""></space>
                <h1 data-heading="" data-weight="800" data-size="xx-large">
                  <text wrap-line="">
                    Your Trusted Platform for Health & Fitness Pros
                    <br />
                    When you need them. Where you need them.
                  </text>
                </h1>
              </group>
            </wrapper>
          </slide>

          <slide>
            <back>
              <picture>
                <img alt="" src={require("../../res/slide2.jpg")} />
              </picture>
            </back>
            <wrapper>
              <space></space>
              <group invert="">
                <space large=""></space>
                <h1 data-heading="" data-weight="800" data-size="xx-large">
                  <text wrap-line="">
                    Your Trusted Platform for Health & Fitness Pros
                    <br />
                    When you need them. Where you need them.
                  </text>
                </h1>
              </group>
            </wrapper>
          </slide>

          <slide>
            <back>
              <picture>
                <img alt="" src={require("../../res/slide3.jpg")} />
              </picture>
            </back>
            <wrapper>
              <space></space>
              <group invert="">
                <space large=""></space>
                <h1 data-heading="" data-weight="800" data-size="xx-large">
                  <text wrap-line="">
                    Your Trusted Platform for Health & Fitness Pros
                    <br />
                    When you need them. Where you need them.
                  </text>
                </h1>
              </group>
            </wrapper>
          </slide>
        </Carousel>
        <cover></cover>
      </slider>
    </section>
  );
};

export default Slider;
