import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProviderProfile = () => {
  const [stick, setClassName] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setClassName(window.scrollY >= 60 ? "stick" : "");
    });
  }, []);
  return (
    <>
      <header invert="" className={stick}>
        <wrapper>
          <group align="center" wrap="no">
            <logo>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="360"
                height="60"
                viewBox="0 0 228.218 38.03"
              >
                <path
                  fill="#000"
                  d="M564.007,2311.59c-2.756,0-4.523,1.05-4.523,2.68,0,2.01,2.14,2.09,4.361,2.3,2.513,0.24,5.2.62,5.2,3.36,0,1.99-2.173,3.41-5.5,3.41a10.274,10.274,0,0,1-4.814-1.11l0.291-.6a9.4,9.4,0,0,0,4.523,1.06c2.934,0,4.847-1.18,4.847-2.76,0-2.12-2.3-2.46-4.636-2.71-2.431-.24-4.928-0.39-4.928-2.95,0-2.02,2.059-3.33,5.171-3.33a10.972,10.972,0,0,1,4.345.9l-0.227.6A10.242,10.242,0,0,0,564.007,2311.59Zm-14.943,11.6h-3.713a0.438,0.438,0,0,1-.454-0.44v-11.19a0.444,0.444,0,0,1,.454-0.44h3.713A6.035,6.035,0,1,1,549.064,2323.19Zm0-11.42h-3.518v10.77h3.518A5.385,5.385,0,1,0,549.064,2311.77Zm-13.6,11.59a6.2,6.2,0,0,1-6.111-6.3,6.1,6.1,0,1,1,12.206,0A6.161,6.161,0,0,1,535.468,2323.36Zm0-11.88a5.486,5.486,0,0,0-5.479,5.58,5.477,5.477,0,1,0,10.942,0A5.483,5.483,0,0,0,535.468,2311.48Zm-14.227,11.89a6.212,6.212,0,0,1-6.111-6.31,6.06,6.06,0,0,1,10.8-3.87l-0.47.41a5.368,5.368,0,0,0-4.215-2.09,5.48,5.48,0,0,0-5.479,5.55,5.62,5.62,0,0,0,5.479,5.71,5.232,5.232,0,0,0,4.458-2.19v-2.73h-3.22v-0.72h3.841v0.7h0.027v2.74a0.541,0.541,0,0,1-.081.27A5.838,5.838,0,0,1,521.241,2323.37Zm-12.953-.18h-2.35v-3.85l-4.863-8.22h2.788l3.258,5.56,3.243-5.56h2.788l-4.864,8.22v3.85Zm-14.165,0H490.33a1.158,1.158,0,0,1-1.151-1.16v-9.77a1.12,1.12,0,0,1,1.119-1.14h3.825A6.035,6.035,0,0,1,494.123,2323.19Zm0-9.7H491.53v7.34h2.593A3.67,3.67,0,0,0,494.123,2313.49Zm-14.438,9.87a6.235,6.235,0,1,1,6.16-6.25A6.213,6.213,0,0,1,479.685,2323.36Zm0-10.12a3.885,3.885,0,1,0,3.826,3.87A3.85,3.85,0,0,0,479.685,2313.24Zm-12.46,9.95h-5.172a1.22,1.22,0,0,1-1.215-1.2v-9.66a1.222,1.222,0,0,1,1.215-1.21h4.8a3.6,3.6,0,0,1,3.582,3.61,2.836,2.836,0,0,1-1.037,2.28,2.879,2.879,0,0,1,1.41,2.56A3.608,3.608,0,0,1,467.225,2323.19Zm-0.373-9.7h-3.664v2.48h3.664A1.24,1.24,0,0,0,466.852,2313.49Zm0.373,4.84h-4.037v2.5h4.037A1.25,1.25,0,0,0,467.225,2318.33Zm-19.678,4.42v-11.19a0.444,0.444,0,0,1,.454-0.44h8.368v0.65H448.2v5.06h7.687v0.65H448.2v5.06h8.173v0.65H448A0.438,0.438,0,0,1,447.547,2322.75Zm-5.116-5.27h-8.5v5.71h-0.648v-12.07h0.648v5.71h8.5v-5.71h0.648v12.07h-0.648v-5.71Zm-17.343,5.71h-0.649v-11.42h-4.461v-0.65h9.571v0.65h-4.461v11.42Zm-46.18,11.83a9.4,9.4,0,0,1-6.258-2.21,9.238,9.238,0,0,1-5.445,1.63H356.693v-1.34H358.8v-31.16a3.863,3.863,0,0,0-1.585-2.77,6.6,6.6,0,0,0-2.7-.83h-1.376v34.76h1.82v1.34h-9.506v-1.34h1.823v-34.76h-1.009a6.8,6.8,0,0,0-2.745.83,3.83,3.83,0,0,0-1.6,2.73h-1.073V2297h3.045a0.04,0.04,0,0,0,.032.01,9.319,9.319,0,0,0,1.267.07l0.265-.01V2297h21.747a9.277,9.277,0,0,1,5.823,1.91,9.483,9.483,0,0,1,5.88-1.91,9.38,9.38,0,0,1,6.295,2.22,6.767,6.767,0,0,1,2.605,5.32v2.56h-5.933v-5.81a2.967,2.967,0,0,0-5.933,0l0.057,7.52q0,4.845-5.112,6.87,5.11,2.175,5.112,6.91l-0.057,8.14a2.967,2.967,0,0,0,5.933,0v-14.07h-2.967v-1.34h8.9v12.16a6.767,6.767,0,0,1-2.605,5.32A9.38,9.38,0,0,1,378.908,2335.02Zm-8.772-33.71a2.882,2.882,0,0,0-.858-2.1,2.8,2.8,0,0,0-2.073-.87h-2.538v16.69h2.538a2.8,2.8,0,0,0,2.073-.87,2.859,2.859,0,0,0,.858-2.09v-10.76Zm0,18.02a2.843,2.843,0,0,0-.858-2.09,2.8,2.8,0,0,0-2.073-.87h-2.538v16.73h2.538a2.8,2.8,0,0,0,2.073-.86,2.882,2.882,0,0,0,.858-2.1v-10.81Z"
                  transform="translate(-340.844 -2297)"
                />
              </svg>
            </logo>
            <action right="">
              <div className="button mini rounded">
                <icon>
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="css-i6dzq1"
                  >
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </icon>
              </div>
              <separator vertical=""></separator>
              <div className="button">
                <text>Anabella Begum</text>
              </div>
              <separator vertical=""></separator>
              <avatar>
                <picture>
                  <img alt="" src={require("../../res/profile.jpg")} />
                </picture>
              </avatar>
              <separator vertical=""></separator>
            </action>
            <div className="button mini rounded">
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
                  className="feather feather-menu"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </icon>
            </div>
          </group>
        </wrapper>
      </header>
      <section>
        <wrapper border="top">
          <cover photo="">
            <back>
              <picture>
                <img alt="" src={require("../../res/cover.jpg")} />
              </picture>
            </back>
            <block hide="">
              <action column="">
                <div className="button primary large">
                  <text>Upload New Photo</text>
                </div>
                <space small=""></space>
                <div className="button special large">
                  <text>Delete</text>
                </div>
              </action>
            </block>
          </cover>
          <group profile="">
            <profile>
              <picture>
                {" "}
                <img alt="" src={require("../../res/profile.jpg")} />
              </picture>
              <block hide="">
                <action column="">
                  <div className="button primary large">
                    <text>Upload New Photo</text>
                  </div>
                  <space small=""></space>
                  <div className="button special large">
                    <text>Delete</text>
                  </div>
                </action>
              </block>
            </profile>
            <info>
              <group direction="column">
                <space></space>
                <group gap="small">
                  <h2>
                    <text>Anabella Begum</text>
                  </h2>
                  <badge filled="" accent="">
                    Verified
                  </badge>
                  <badge filled="">Personal Trainer</badge>
                </group>
                <space mini=""></space>
                <text wrap="" wrap-line="" clamp="">
                  Duis semper non metus vitae posuere. Cras lorem diam,
                  <br />
                  tempor sed bibendum vulputate, mollis et ipsum.
                </text>
                <space small=""></space>
                <group align="center">
                  <div className="button mini rounded">
                    <icon>
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                      </svg>
                    </icon>
                  </div>
                  <separator vertical=""></separator>
                  <div className="button  mini rounded">
                    <icon>
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="#000"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </icon>
                  </div>
                  <separator vertical=""></separator>
                  <div className="button">
                    <icon>
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </icon>
                    <text>San Francisco</text>
                  </div>
                </group>
              </group>
            </info>
          </group>
        </wrapper>
      </section>
      <section>
        <wrapper border="top">
          <form>
            <group direction="column">
              <h2 data-heading="" data-weight="800" space="">
                <text>Create Account</text>
              </h2>
              <space></space>
              <text wrap="" wrap-line="" space="">
                Duis semper non metus vitae posuere. Cras lorem diam,
                <br />
                tempor sed bibendum vulputate, mollis et ipsum.
              </text>
              <space></space>
              <group wrap="no">
                <cont size="micro">
                  <input type="text" placeholder="Name" />
                  <decor>
                    <label>
                      <text>
                        <line></line>
                        <wrap>
                          <span>First Namae</span>
                        </wrap>
                      </text>
                      <line></line>
                    </label>
                    <border></border>
                  </decor>
                </cont>
                <cont size="micro">
                  <input type="text" placeholder="Username" />
                  <decor>
                    <label>
                      <text>
                        <line></line>
                        <wrap>
                          <span>Username</span>
                        </wrap>
                      </text>
                      <line></line>
                    </label>
                    <border></border>
                  </decor>
                </cont>
              </group>
              <space mini=""></space>
              <text light="" wrap="" wrap-line="" space="">
                We are big on real names around here, so
                <br />
                people know who is who.
              </text>
              <space mini=""></space>
              <group>
                <cont large="">
                  <input type="text" placeholder="Name" />
                  <decor>
                    <label>
                      <text>
                        <line></line>
                        <wrap>
                          <span>First Namae</span>
                        </wrap>
                      </text>
                      <line></line>
                    </label>
                    <border></border>
                  </decor>
                </cont>
              </group>
              <group wrap="no">
                <cont size="micro">
                  <input type="text" placeholder="Name" />
                  <decor>
                    <label>
                      <text>
                        <line></line>
                        <wrap>
                          <span>First Namae</span>
                        </wrap>
                      </text>
                      <line></line>
                    </label>
                    <border></border>
                  </decor>
                  <div effect="material" className="button">
                    <text>Verify</text>
                  </div>
                </cont>
                <cont size="micro">
                  <input type="text" placeholder="Username" />
                  <decor>
                    <label>
                      <text>
                        <line></line>
                        <wrap>
                          <span>Username</span>
                        </wrap>
                      </text>
                      <line></line>
                    </label>
                    <border></border>
                  </decor>
                </cont>
              </group>
              <cont>
                <separator horizontal=""></separator>
              </cont>
              <group>
                <cont large="">
                  <input type="text" placeholder="Name" />
                  <decor>
                    <label>
                      <text>
                        <line></line>
                        <wrap>
                          <span>First Namae</span>
                        </wrap>
                      </text>
                      <line></line>
                    </label>
                    <border></border>
                  </decor>
                </cont>
              </group>
              <space></space>
              <cont>
                <div
                  className="button primary wide large"
                  shrink="no"
                  command="set"
                >
                  <text>Create Account</text>
                </div>
              </cont>
              <space></space>
              <text wrap="" wrap-line="" space="">
                Creating an account means you are okay with our <br />
                <Link link="" to="#">
                  Terms of Service, Terms of Service, Privacy Policy,
                </Link>{" "}
                and our default <br />
                <Link link="" to="#">
                  Notification Settings.
                </Link>
              </text>
            </group>
          </form>
        </wrapper>
      </section>
      <section>
        <wrapper border="top">
          <group align="center" direction="column">
            <h1 data-heading="" data-weight="800" data-size="x-large">
              <text>Congratulations</text>
            </h1>
            <space medium=""></space>
            <text wrap="" wrap-line="">
              <b>Anabella Begum</b> <br />
              Your <b>TBG</b> account has been successfully created <br />
              and <b>pending for verification.</b> Please fill out your profile{" "}
              <br />
              so people know who you are.
            </text>
            <space></space>
            <div className="button primary  large" shrink="no" command="set">
              <text>Fill Out Profile</text>
            </div>
          </group>
        </wrapper>
      </section>
      <section>
        <wrapper border="top">
          <group>
            <menu>
              <div className="list_menu">
                <ul>
                  <li effect="material">
                    <text>General</text>
                  </li>
                  <li effect="material" className="selected">
                    <text>Profile</text>
                  </li>
                  <li effect="material">
                    <text>Address</text>
                  </li>
                  <li effect="material">
                    <text>Care Services</text>
                  </li>
                  <li effect="material">
                    <text>Locations</text>
                  </li>
                  <li effect="material">
                    <text>Operations</text>
                  </li>
                  <li effect="material">
                    <text>Insurance / Certifications</text>
                  </li>
                  <li effect="material">
                    <text>Picture / Videos</text>
                  </li>
                  <li effect="material">
                    <text>Insurance / Certifications</text>
                  </li>
                  <li effect="material">
                    <text> Client Payment Methods</text>
                  </li>
                  <li effect="material">
                    <text> Account</text>
                  </li>
                </ul>
              </div>
            </menu>
            <content>
              <form>
                <div className="field_group">
                  <div className="form_fields mini">
                    <div className="data_label">*First Name</div>
                    <input
                      type="text"
                      required=""
                      value=""
                      placeholder="Anabella"
                    />
                  </div>
                  <div className="form_fields">
                    <div className="data_label">*Last Name</div>
                    <input
                      type="text"
                      required=""
                      value=""
                      placeholder="Begam"
                    />
                  </div>
                </div>
                <div className="field_group">
                  <div className="form_fields">
                    <div className="data_label">Gender</div>
                    <input
                      type="text"
                      required=""
                      value=""
                      placeholder="Please Select"
                    />
                  </div>
                  <div className="form_fields">
                    <div className="data_label">Pronoun Preference</div>
                    <input
                      type="text"
                      required=""
                      value=""
                      placeholder="Please Select"
                    />
                  </div>
                </div>
                <div className="form_fields">
                  <separator horizontal="" gap="large"></separator>
                </div>
                <div className="field_group">
                  <div className="form_fields mini">
                    <div className="data_label">*Email</div>
                    <input type="text" required="" value="" placeholder="" />
                  </div>
                  <div className="form_fields mini">
                    <div className="data_label">*Phone</div>
                    <input type="text" required="" value="" placeholder="" />
                  </div>
                </div>
                <div className="form_fields">
                  <div className="data_label">*Bio</div>
                  <textarea></textarea>
                </div>
                <div className="form_fields">
                  <separator horizontal="" gap="large"></separator>
                </div>
                <div className="field_group">
                  <div className="form_fields">
                    <div className="data_label">*Years Stated</div>
                    <input type="text" required="" value="" placeholder="" />
                  </div>
                  <div className="form_fields">
                    <div className="data_label">*Years of Experience</div>
                    <input type="text" required="" value="" placeholder="" />
                  </div>
                </div>
                <div className="form_fields">
                  <separator horizontal="" gap="large"></separator>
                </div>
                <div className="form_fields">
                  <div className="data_label">Spoken Languages</div>
                  <input
                    type="text"
                    required=""
                    value=""
                    placeholder="Please Select"
                  />
                </div>
                <div className="form_fields">
                  <separator horizontal="" gap="large"></separator>
                </div>
                <toolbar border="no">
                  <div className="button primary large">
                    <icon>
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="css-i6dzq1"
                      >
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                      </svg>
                    </icon>
                    <text>Save Changes</text>
                  </div>
                  <separator vertical="" gap="large"></separator>
                  <div className="button highlight large">
                    <text>Cancel</text>
                  </div>
                </toolbar>
              </form>
            </content>
          </group>
        </wrapper>
      </section>
    </>
  );
};

export default ProviderProfile;
