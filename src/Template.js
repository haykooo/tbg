import React, { useState } from "react";

import moment from "moment";
import { DatePicker, InputNumber, Select, TimePicker } from "antd";

export function TemplateDetails(props) {
  const { Option } = Select;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  return (
    <div id="windowContent" className="window_cont">
      <form>
        <toolbar>
          <button type="submit" className="button primary">
            <text>Test Form Submit</text>
          </button>{" "}
          <separator vertical=""></separator>{" "}
          <div className="button accent">
            <text>Secondary Action</text>
          </div>
          <separator vertical=""></separator>{" "}
          <div id="disableControls" effect="material" className="button">
            <text>Disable Controls</text>
          </div>{" "}
        </toolbar>
        <div className="form_container">
          <div className="section_group">
            <div className="sections ">
              <div className="form_fields">
                <div className="data_label">Sample Input</div>
                <input
                  type="text"
                  placeholder="Nice Placeholder"
                  defaultValue=""
                />
              </div>

              <div className="form_fields">
                <div className="data_label">Sample Disabled Input</div>
                <input
                  type="text"
                  placeholder="Nice Placeholder"
                  defaultValue=""
                />
              </div>

              <div className="form_fields">
                <div className="data_label">Sample Password Icon</div>
                <div className="input_cont">
                  <input
                    id="txtPassword1"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    defaultValue=""
                  />
                  <i></i>
                </div>
              </div>

              <div className="form_fields">
                <div className="data_label">Sample Password Text</div>
                <div className="input_cont">
                  <input
                    id="txtPassword2"
                    type="password"
                    placeholder="Password"
                    autoComplete="new-password"
                    defaultValue=""
                  />
                  <i></i>
                </div>
              </div>

              <div className="form_fields">
                <div className="data_label">Fixed Label</div>
                <label className="input_cont">
                  <text>Fixed Label</text>
                  <input
                    type="text"
                    placeholder="Placeholder"
                    autoComplete="new-password"
                    defaultValue=""
                  />
                  <i></i>
                </label>
              </div>

              <div className="form_fields">
                <div className="section_title">
                  <text>Sample Nice Title Goes Here</text>
                </div>
                <div className="form_separator"></div>
              </div>

              <div className="form_fields">
                <div className="data_label">Radio Switcher</div>
                <div
                  id="RadioSwitcher"
                  role-type="checklist"
                  className="option_bar"
                >
                  <label>
                    <input type="radio" defaultValue="value1" name="RS" />
                    <wrap effect="material">
                      <text>Star Lord</text>{" "}
                    </wrap>
                  </label>
                  <label>
                    <input type="radio" defaultValue="value2" name="RS" />
                    <wrap effect="material">
                      <text>Yondu Udonta</text>
                    </wrap>
                  </label>
                  <label>
                    <input type="radio" defaultValue="value3" name="RS" />
                    <wrap effect="material">
                      <icon>photo</icon> <text>Rocket Raccoon</text>{" "}
                    </wrap>
                  </label>
                </div>
              </div>

              <div className="form_fields">
                <div className="data_label">Checkbox Switcher</div>
                <div
                  id="CheckboxSwitcher"
                  role-type="checklist"
                  className="option_bar"
                >
                  <label>
                    <input type="checkbox" defaultValue="value1" />
                    <wrap effect="material">
                      <text>Star Lord</text>{" "}
                    </wrap>
                  </label>
                  <label>
                    <input type="checkbox" defaultValue="value2" />
                    <wrap effect="material">
                      <text>Yondu Udonta</text>
                    </wrap>
                  </label>
                  <label>
                    <input type="checkbox" defaultValue="value3" />
                    <wrap effect="material">
                      <text>Rocket Raccoon</text>{" "}
                    </wrap>
                  </label>
                </div>
              </div>
            </div>

            <div className="sections ">
              <div className="form_fields">
                <div className="data_label">Input Container With Action</div>
                <div className="input_cont">
                  <icon>unlock</icon>
                  <input
                    required="required"
                    type="text"
                    placeholder="Placeholder"
                  />
                  <div effect="material" className="button">
                    <text>Action</text>
                  </div>
                  <i></i>
                </div>
              </div>
              <div className="form_fields">
                <div className="data_label">Sample Password Icon</div>
                <div className="input_cont">
                  <input
                    id="123"
                    type="password"
                    required="required"
                    placeholder="Password"
                    autoComplete="new-password"
                    password="password"
                  />
                  <div className="button micro">
                    <icon>eye</icon>
                  </div>
                  <i></i>
                </div>
              </div>
              <div className="form_fields">
                <div className="data_label">Readonly Container</div>
                <div className="data_read">
                  <text>Sample Readonly Container</text>
                </div>
              </div>
              <div className="form_fields">
                <div className="data_label">
                  Text Area<span>Optional</span>
                </div>
                <textarea placeholder="Fixed Height"></textarea>
              </div>
              <div className="form_fields">
                <div className="data_label">
                  Cell Phone<span>Optional</span>
                </div>
                <input placeholder="Phone" type="text" defaultValue="" />
                <input placeholder="Other phone" type="text" defaultValue="" />
              </div>
              <div className="field_group">
                <div className="form_fields large">
                  <div className="data_label">
                    City<tip>Small Help Tip</tip>
                  </div>
                  <input type="text" defaultValue="" />
                </div>
                <div className="form_fields">
                  <div className="data_label">Postal Code</div>
                  <input name="ZipPostal" type="text" defaultValue="" />
                </div>
              </div>
              <div className="form_fields">
                <div className="form_separator"></div>
              </div>

              <div className="form_fields">
                <div className="data_label">Notifications</div>
                <div className="data_help">
                  Configure settings when and how You'll get notified for
                  content changes
                </div>
                <div className="option_group">
                  <div className="option_bar">
                    <div title="">
                      <text>New Content</text>
                    </div>
                    <label data-tip="Get Notified via Email" effect="material">
                      <input type="checkbox" defaultValue="value1" />
                      <wrap>
                        <icon>mail</icon>
                      </wrap>
                    </label>
                    <label
                      data-tip="Get Notified via Notification Center"
                      effect="material"
                    >
                      <input type="checkbox" defaultValue="value2" />
                      <wrap>
                        <icon>bell</icon>
                      </wrap>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="sections">
              <div className="form_fields">
                <div className="section_title">
                  <text>Sample Nice Title Goes Here</text>
                </div>
                <div className="form_separator"></div>
              </div>
              <div className="form_fields">
                <div className="data_label">Drop Down List</div>
                <Select
                  placeholder="Select Character"
                  id="ddlAntd2"
                  size="default"
                  defaultValue="a1"
                >
                  {children}
                </Select>
              </div>

              <div className="form_fields">
                <div className="data_label">Combo Box</div>
                <Select
                  showSearch
                  placeholder="Select Character"
                  id="ddlgAntd1"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {children}
                </Select>
              </div>

              <div className="form_fields">
                <div className="data_label">Multi Select</div>
                <Select
                  mode="multiple"
                  size="default"
                  placeholder="Please select"
                  defaultValue={["a10", "c12"]}
                >
                  {children}
                </Select>
              </div>

              <div className="form_fields">
                <div className="data_label">Date Picker</div>
                <DatePicker
                  name="dtpAntd"
                  defaultValue={moment("2015/01/01", "YYYY/MM/DD")}
                  format="MM/DD/YY"
                />
              </div>

              <div className="form_fields">
                <div className="data_label">Time Picker</div>
                <TimePicker
                  name="tpAntd"
                  defaultValue={moment("12:08:23", "HH:mm:ss")}
                />
              </div>

              <div className="form_fields">
                <div className="data_label">Numeric</div>
                <InputNumber min={1} max={100000} defaultValue={3} />
              </div>

              <div className="form_fields">
                <div className="data_label">
                  Date/Time Picker<span>Optional</span>
                </div>
                <DatePicker
                  name="dtpAntd"
                  defaultValue={moment("2015/01/01", "YYYY/MM/DD")}
                  format="MM/DD/YY"
                />
                <TimePicker
                  name="tpAntd"
                  defaultValue={moment("12:08:23", "HH:mm:ss")}
                />
              </div>
            </div>

            <div className="sections">
              <div className="form_fields input-validation-error">
                <div className="data_label">Uploader</div>
                <span className="ant-upload-picture-card-wrapper">
                  <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                    <span tabIndex="0" className="ant-upload">
                      <div>
                        <span
                          role="img"
                          aria-label="plus"
                          className="anticon anticon-plus"
                        >
                          <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="plus"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <defs></defs>
                            <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"></path>
                            <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"></path>
                          </svg>
                        </span>
                        <div className="ant-upload-text">Upload</div>
                      </div>
                    </span>
                  </div>
                </span>
                <div className="input_cont">
                  <icon yellow="yellow">warning</icon>
                  <div className="data_help">
                    Configure settings when and how You'll get notified for
                    content changes
                  </div>
                </div>
              </div>
              <div className="form_fields">
                <div className="data_label">
                  Text Area<span>Optional</span>
                </div>
                <textarea
                  placeholder="Fixed Height"
                  className="input-validation-error"
                ></textarea>
              </div>

              <div className="form_fields">
                <div className="data_label">Sample Input Icon</div>
                <div className="input_cont">
                  <input
                    id="321"
                    className="input-validation-error"
                    type="text"
                    required=""
                    placeholder="Input"
                  />
                  <div className="button micro">
                    <icon>eye</icon>
                  </div>
                  <i></i>
                </div>
              </div>

              <div className="form_fields">
                <div className="data_label">Drop Down List</div>
                <Select
                  className="input-validation-error"
                  placeholder="Select Character"
                  id="ddlAntd1"
                  size="default"
                  defaultValue="a1"
                >
                  {children}
                </Select>
              </div>

              <div className="form_fields">
                <div className="data_label">Combo Box</div>
                <Select
                  className="input-validation-error"
                  showSearch
                  placeholder="Select Character"
                  id="ddlgAntd2"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {children}
                </Select>
              </div>

              <div className="form_fields">
                <div className="data_label">Multi Select</div>
                <Select
                  className="input-validation-error"
                  mode="multiple"
                  size="default"
                  placeholder="Please select"
                  defaultValue={["a10", "c12"]}
                >
                  {children}
                </Select>
              </div>

              <div className="form_fields">
                <div className="data_label">Date Picker</div>
                <DatePicker
                  className="input-validation-error"
                  name="dtpAntd"
                  defaultValue={moment("2015/01/01", "YYYY/MM/DD")}
                  format="MM/DD/YY"
                />
              </div>

              <div className="form_fields">
                <div className="data_label">Time Picker</div>
                <TimePicker
                  className="input-validation-error"
                  name="tpAntd"
                  defaultValue={moment("12:08:23", "HH:mm:ss")}
                />
              </div>

              <div className="form_fields">
                <div className="data_label">Numeric</div>
                <InputNumber
                  className="input-validation-error"
                  min={1}
                  max={100000}
                  defaultValue={3}
                />
              </div>

              <div className="form_fields">
                <div className="data_label">
                  Date/Time Picker<span>Optional</span>
                </div>
                <DatePicker
                  className="input-validation-error"
                  name="dtpAntd"
                  defaultValue={moment("2015/01/01", "YYYY/MM/DD")}
                  format="MM/DD/YY"
                />
                <TimePicker
                  className="input-validation-error"
                  name="tpAntd"
                  defaultValue={moment("12:08:23", "HH:mm:ss")}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

const TabListItem = (props) => {
  return (
    <li
      effect="material"
      className={props.selected ? "selected" : ""}
      onClick={props.onClick}
    >
      <text>{props.text}</text>
    </li>
  );
};

export const Template = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const children = [];
  const { Option } = Select;
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  const tabs = [
    "Icons &amp; Badges",
    "Buttons & Switchers",
    "Windows & Popups",
    "Inputs & Forms",
    "Overlay Toolbar",
    "List View",
    "Epandable Table",
    "Table view",
    "Dashboard",
    "Login",
    "Select User Type",
    "Sign Up form",
  ];

  return (
    <>
      <div className="tab_strip">
        <div className="tab_strip_nav">
          <toolbar data-type="snap">
            <div className="nav_strip snapScroll">
              <ul>
                {tabs.map((item, ind) => {
                  return (
                    <TabListItem
                      key={ind}
                      onClick={() => {
                        setSelectedItemIndex(ind);
                      }}
                      text={item}
                      selected={ind === selectedItemIndex}
                    />
                  );
                })}
              </ul>
            </div>
          </toolbar>
        </div>

        {/*<wrap>*/}
        {/*    <ul>*/}
        {/*        <li effect="material"><text>Icons & Badges</text></li>*/}
        {/*        <li effect="material"><text>Buttons & Switchers</text></li>*/}
        {/*        <li effect="material"><text>Windows & Popups</text></li>*/}
        {/*        <li effect="material"><text>Inputs & Forms</text></li>*/}
        {/*        <li effect="material"><text>Overlay Toolbar</text></li>*/}
        {/*        <li effect="material"><text>List View</text></li>*/}
        {/*        <li effect="material"><text>Epandable Table</text></li>*/}
        {/*        <li effect="material"><text>Table view</text></li>*/}
        {/*        <li effect="material"><text>Dashboard</text></li>*/}
        {/*    </ul>*/}
        {/*</wrap>*/}
        <div className="tab_strip_content">
          <div
            className={`${
              selectedItemIndex === 0 ? "selected" : ""
            } tab_strip_tab`}
          >
            <container>
              <view>
                <scroller>
                  <grid counter="">
                    <toolbar>
                      {/*<count data-count="1024">0</count><separator vertical=""></separator><div className="button">Section Title</div>*/}
                    </toolbar>
                    <wrap>
                      <item className="selected">
                        <icon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-settings"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                        </icon>
                        <text>Settings</text>
                      </item>
                      <item>
                        {" "}
                        <tag></tag>{" "}
                        <icon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-tool"
                          >
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                          </svg>
                        </icon>
                        <text>Tools</text>
                      </item>
                      <item effect="material">
                        {" "}
                        <icon>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-home"
                          >
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                          </svg>
                        </icon>
                        <text>home</text>
                      </item>
                    </wrap>
                  </grid>
                </scroller>
              </view>
            </container>
          </div>
          <div
            className={`${
              selectedItemIndex === 1 ? "selected" : ""
            } tab_strip_tab`}
          >
            <view vertical="">
              <view>
                <toolbar scroll="">
                  <wrap>
                    <div className="button">Button & Toggles</div>
                  </wrap>
                </toolbar>
                <list demo="">
                  <demo_wrap>
                    <div effect="material" className="button primary">
                      <text>Primary Button</text>
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M13.875 22h-3.75q-.375 0-.65-.25t-.325-.625l-.3-2.325q-.325-.125-.612-.3-.288-.175-.563-.375l-2.175.9q-.35.125-.7.025t-.55-.425L2.4 15.4q-.2-.325-.125-.7.075-.375.375-.6l1.875-1.425Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337L2.65 9.9q-.3-.225-.375-.6-.075-.375.125-.7l1.85-3.225q.175-.35.537-.438.363-.087.713.038l2.175.9q.275-.2.575-.375.3-.175.6-.3l.3-2.325q.05-.375.325-.625t.65-.25h3.75q.375 0 .65.25t.325.625l.3 2.325q.325.125.613.3.287.175.562.375l2.175-.9q.35-.125.7-.025t.55.425L21.6 8.6q.2.325.125.7-.075.375-.375.6l-1.875 1.425q.025.175.025.337v.675q0 .163-.05.338l1.875 1.425q.3.225.375.6.075.375-.125.7l-1.85 3.2q-.2.325-.562.438-.363.112-.713-.013l-2.125-.9q-.275.2-.575.375-.3.175-.6.3l-.3 2.325q-.05.375-.325.625t-.65.25Zm-1.825-6.5q1.45 0 2.475-1.025Q15.55 13.45 15.55 12q0-1.45-1.025-2.475Q13.5 8.5 12.05 8.5q-1.475 0-2.488 1.025Q8.55 10.55 8.55 12q0 1.45 1.012 2.475Q10.575 15.5 12.05 15.5Zm0-2q-.625 0-1.062-.438-.438-.437-.438-1.062t.438-1.062q.437-.438 1.062-.438t1.063.438q.437.437.437 1.062t-.437 1.062q-.438.438-1.063.438ZM12 12Zm-1 8h1.975l.35-2.65q.775-.2 1.438-.588.662-.387 1.212-.937l2.475 1.025.975-1.7-2.15-1.625q.125-.35.175-.738.05-.387.05-.787t-.05-.788q-.05-.387-.175-.737l2.15-1.625-.975-1.7-2.475 1.05q-.55-.575-1.212-.963-.663-.387-1.438-.587L13 4h-1.975l-.35 2.65q-.775.2-1.437.587-.663.388-1.213.938L5.55 7.15l-.975 1.7 2.15 1.6q-.125.375-.175.75-.05.375-.05.8 0 .4.05.775t.175.75l-2.15 1.625.975 1.7 2.475-1.05q.55.575 1.213.962.662.388 1.437.588Z" />
                        </svg>
                      </icon>
                    </div>
                    <div effect="material" className="button accent">
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z" />
                        </svg>
                      </icon>
                      <text>Accent Button</text>
                    </div>
                    <div effect="material" className="button">
                      <text>Simple Button</text>
                    </div>
                    <a
                      effect="material"
                      href="https://www.google.com/"
                      className="button"
                    >
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="m18.9 20.3-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
                        </svg>
                      </icon>
                      <text>Anchor Button</text>
                    </a>
                    <div
                      effect="material"
                      data-tip="This Is Responsive Button, Resize Browser Window"
                      className="button adaptive white user_name"
                    >
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h4q.425 0 .713.288Q9 17.575 9 18t-.287.712Q8.425 19 8 19ZM4 7q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h8q.425 0 .713.287Q13 5.575 13 6t-.287.713Q12.425 7 12 7Zm8 14q-.425 0-.712-.288Q11 20.425 11 20v-4q0-.425.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16v1h7q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19h-7v1q0 .425-.287.712Q12.425 21 12 21Zm-4-6q-.425 0-.713-.288Q7 14.425 7 14v-1H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h3v-1q0-.425.287-.713Q7.575 9 8 9t.713.287Q9 9.575 9 10v4q0 .425-.287.712Q8.425 15 8 15Zm4-2q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm4-4q-.425 0-.712-.288Q15 8.425 15 8V4q0-.425.288-.713Q15.575 3 16 3t.712.287Q17 3.575 17 4v1h3q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-3v1q0 .425-.288.712Q16.425 9 16 9Z" />
                        </svg>
                      </icon>
                      <text>Responsive button</text>
                    </div>
                  </demo_wrap>
                  <demo_wrap>
                    <div effect="material" className="button error">
                      <tip>Reconfiguring ...</tip>
                      <separator vertical=""></separator>
                      <text>Cancel</text>
                    </div>
                  </demo_wrap>
                  <demo_wrap>
                    <div
                      effect="material"
                      data-tip="This Is Mini Button"
                      className="button primary mini"
                    >
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M4 20q-.825 0-1.412-.587Q2 18.825 2 18V6q0-.825.588-1.412Q3.175 4 4 4h5.175q.4 0 .763.15.362.15.637.425L12 6h8q.825 0 1.413.588Q22 7.175 22 8v10q0 .825-.587 1.413Q20.825 20 20 20ZM4 6v12h16V8h-8.825l-2-2H4Zm0 0v12Z" />
                        </svg>
                      </icon>
                    </div>
                    <div
                      effect="material"
                      data-tip="This Is Mini Button"
                      className="button accent mini"
                    >
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h4q.425 0 .713.288Q9 17.575 9 18t-.287.712Q8.425 19 8 19ZM4 7q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h8q.425 0 .713.287Q13 5.575 13 6t-.287.713Q12.425 7 12 7Zm8 14q-.425 0-.712-.288Q11 20.425 11 20v-4q0-.425.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16v1h7q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19h-7v1q0 .425-.287.712Q12.425 21 12 21Zm-4-6q-.425 0-.713-.288Q7 14.425 7 14v-1H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h3v-1q0-.425.287-.713Q7.575 9 8 9t.713.287Q9 9.575 9 10v4q0 .425-.287.712Q8.425 15 8 15Zm4-2q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm4-4q-.425 0-.712-.288Q15 8.425 15 8V4q0-.425.288-.713Q15.575 3 16 3t.712.287Q17 3.575 17 4v1h3q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-3v1q0 .425-.288.712Q16.425 9 16 9Z" />
                        </svg>
                      </icon>
                    </div>
                    <div
                      effect="material"
                      data-tip="This Is Mini Button"
                      className="button mini"
                    >
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M9.525 18.025q-.5.325-1.013.037Q8 17.775 8 17.175V6.825q0-.6.512-.888.513-.287 1.013.038l8.15 5.175q.45.3.45.85t-.45.85ZM10 12Zm0 3.35L15.25 12 10 8.65Z" />
                        </svg>
                      </icon>
                    </div>
                  </demo_wrap>
                  <demo_wrap>
                    <div effect="material" className="button primary large">
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M12 12q-1.65 0-2.825-1.175Q8 9.65 8 8q0-1.65 1.175-2.825Q10.35 4 12 4q1.65 0 2.825 1.175Q16 6.35 16 8q0 1.65-1.175 2.825Q13.65 12 12 12Zm6 8H6q-.825 0-1.412-.587Q4 18.825 4 18v-.8q0-.85.438-1.563.437-.712 1.162-1.087 1.55-.775 3.15-1.163Q10.35 13 12 13t3.25.387q1.6.388 3.15 1.163.725.375 1.162 1.087Q20 16.35 20 17.2v.8q0 .825-.587 1.413Q18.825 20 18 20ZM6 18h12v-.8q0-.275-.137-.5-.138-.225-.363-.35-1.35-.675-2.725-1.013Q13.4 15 12 15t-2.775.337Q7.85 15.675 6.5 16.35q-.225.125-.362.35-.138.225-.138.5Zm6-8q.825 0 1.413-.588Q14 8.825 14 8t-.587-1.412Q12.825 6 12 6q-.825 0-1.412.588Q10 7.175 10 8t.588 1.412Q11.175 10 12 10Zm0-2Zm0 10Z" />
                        </svg>
                      </icon>
                      <text>Large Button</text>
                    </div>
                    <div effect="material" className="button accent large">
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="m18.9 20.3-5.6-5.6q-.75.6-1.725.95Q10.6 16 9.5 16q-2.725 0-4.612-1.887Q3 12.225 3 9.5q0-2.725 1.888-4.613Q6.775 3 9.5 3t4.613 1.887Q16 6.775 16 9.5q0 1.1-.35 2.075-.35.975-.95 1.725l5.625 5.625q.275.275.275.675t-.3.7q-.275.275-.7.275-.425 0-.7-.275ZM9.5 14q1.875 0 3.188-1.312Q14 11.375 14 9.5q0-1.875-1.312-3.188Q11.375 5 9.5 5 7.625 5 6.312 6.312 5 7.625 5 9.5q0 1.875 1.312 3.188Q7.625 14 9.5 14Z" />
                        </svg>
                      </icon>
                      <text>Large Button</text>
                    </div>
                    <div effect="material" className="button large">
                      <icon>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24"
                          width="24"
                        >
                          <path d="M4 19q-.425 0-.712-.288Q3 18.425 3 18t.288-.712Q3.575 17 4 17h4q.425 0 .713.288Q9 17.575 9 18t-.287.712Q8.425 19 8 19ZM4 7q-.425 0-.712-.287Q3 6.425 3 6t.288-.713Q3.575 5 4 5h8q.425 0 .713.287Q13 5.575 13 6t-.287.713Q12.425 7 12 7Zm8 14q-.425 0-.712-.288Q11 20.425 11 20v-4q0-.425.288-.713Q11.575 15 12 15t.713.287Q13 15.575 13 16v1h7q.425 0 .712.288.288.287.288.712t-.288.712Q20.425 19 20 19h-7v1q0 .425-.287.712Q12.425 21 12 21Zm-4-6q-.425 0-.713-.288Q7 14.425 7 14v-1H4q-.425 0-.712-.288Q3 12.425 3 12t.288-.713Q3.575 11 4 11h3v-1q0-.425.287-.713Q7.575 9 8 9t.713.287Q9 9.575 9 10v4q0 .425-.287.712Q8.425 15 8 15Zm4-2q-.425 0-.712-.288Q11 12.425 11 12t.288-.713Q11.575 11 12 11h8q.425 0 .712.287.288.288.288.713t-.288.712Q20.425 13 20 13Zm4-4q-.425 0-.712-.288Q15 8.425 15 8V4q0-.425.288-.713Q15.575 3 16 3t.712.287Q17 3.575 17 4v1h3q.425 0 .712.287Q21 5.575 21 6t-.288.713Q20.425 7 20 7h-3v1q0 .425-.288.712Q16.425 9 16 9Z" />
                        </svg>
                      </icon>
                      <text>Large Button</text>
                    </div>
                  </demo_wrap>
                  <demo_wrap>
                    <label classic="">
                      <input type="checkbox" />
                      <box>
                        <check></check>
                      </box>
                      <text>Simple Checkbox</text>
                    </label>
                    <label classic="">
                      <input type="checkbox" />
                      <box>
                        <check></check>
                      </box>
                      <text>Simple Checkbox</text>
                    </label>
                    <separator vertical=""></separator>
                    <label classic="">
                      <input
                        defaultChecked={true}
                        type="checkbox"
                        disabled="disabled"
                      />
                      <box>
                        <check></check>
                      </box>
                      <text>Simple Checkbox</text>
                    </label>
                    <label classic="">
                      <input type="checkbox" />
                      <box>
                        <check></check>
                      </box>
                      <text>
                        <separator vertical=""></separator>
                      </text>
                      Simple Checkbox
                    </label>
                    <separator vertical=""></separator>
                    <label classic="">
                      <input type="checkbox" />
                      <text>Simple Checkbox</text>
                      <separator vertical=""></separator>
                      <box>
                        <check></check>
                      </box>
                    </label>
                  </demo_wrap>
                  <demo_wrap>
                    <label checkbox="">
                      <input type="checkbox" />
                      <box>
                        <check></check>
                      </box>
                      <text>Checkbox</text>
                    </label>
                    <label checkbox="">
                      <input
                        disabled="disabled"
                        defaultChecked={true}
                        type="checkbox"
                      />
                      <box>
                        <check></check>
                      </box>
                      <text>Disabled Checkbox</text>
                    </label>
                    <label checkbox="" simple="">
                      <input type="checkbox" />
                      <box>
                        <check></check>
                      </box>
                      <text></text>
                    </label>
                    <separator vertical=""></separator>
                    <label checkbox="">
                      <input defaultChecked={true} type="checkbox" />
                      <box>
                        <check></check>
                      </box>
                      <text>Checkbox</text>
                    </label>
                  </demo_wrap>
                  <demo_wrap>
                    <label
                      data-tip="This can be used only to activate section, examples on <b>Input Forms</b> Section"
                      simple=""
                      checkbox=""
                    >
                      <name>
                        <b>Section Title</b>
                      </name>
                      <separator vertical=""></separator>
                      <input type="checkbox" />
                      <tip></tip>
                    </label>
                  </demo_wrap>
                  <demo_wrap>
                    <label radio="">
                      <input name="sample" defaultChecked={true} type="radio" />
                      <box>
                        <check></check>
                      </box>
                      <text>Radio Button Title</text>
                    </label>
                    <label radio="">
                      <input name="sample" type="radio" />
                      <box>
                        <check></check>
                      </box>
                      <text>Radio Button Title</text>
                    </label>
                    <separator vertical=""></separator>
                    <label radio="">
                      <input
                        disabled="disabled"
                        defaultChecked={true}
                        name="sample"
                        type="radio"
                      />
                      <box>
                        <check></check>
                      </box>
                      <text>Disabled Radio Button</text>
                    </label>
                  </demo_wrap>
                </list>
              </view>
              <view>
                <toolbar>
                  <div className="caption">
                    <text>
                      <b>Badges</b>
                    </text>
                  </div>
                </toolbar>
                <list demo="">
                  <demo_wrap>
                    <group>
                      <badge>Simple Outline Badge</badge>
                      <separator vertical=""></separator>
                      <badge accent="" filled="">
                        Accent Color Badge
                      </badge>
                    </group>
                  </demo_wrap>

                  <demo_wrap>
                    <group>
                      <badge error="" filled="">
                        Error
                      </badge>
                      <badge new="" filled="">
                        New Item
                      </badge>
                      <badge private="" filled="">
                        Private Item
                      </badge>
                      <badge process="" filled="">
                        Yellow Item
                      </badge>
                    </group>
                  </demo_wrap>

                  <demo_wrap>
                    <group>
                      <badge error="">Error</badge>
                      <badge new="">New Item</badge>
                      <badge private="">Private Item</badge>
                    </group>
                  </demo_wrap>
                </list>
              </view>
            </view>
          </div>

          <div
            className={`${
              selectedItemIndex === 2 ? "selected" : ""
            } tab_strip_tab`}
          >
            <container>
              <view>
                <toolbar>
                  <div
                    id="btnActionControl"
                    data-tip="This Will Open Context menu"
                    effect="material"
                    className="button mini"
                  >
                    <icon>options</icon>
                  </div>
                  <separator vertical=""></separator>
                  <div
                    style={{ marginLeft: "auto" }}
                    id="btnSort"
                    effect="material"
                    className="button mini"
                  >
                    <icon>sort</icon>
                  </div>
                </toolbar>

                <dashboard demo="">
                  <wrap>
                    <item accent="">
                      <div
                        id="btnOpenWindow"
                        effect="material"
                        className="button accent"
                      >
                        <text>Open Window</text>
                      </div>
                      <text>This Will Open Regular Window</text>
                    </item>
                    <item>
                      <div
                        id="btnOpenFullscreenWindow"
                        effect="material"
                        className="button accent"
                      >
                        <text>Open Fullscreen Window</text>
                      </div>{" "}
                      <text> Some Description</text>
                    </item>
                  </wrap>
                </dashboard>
              </view>
            </container>
          </div>
          <div
            className={`${
              selectedItemIndex === 3 ? "selected" : ""
            } tab_strip_tab`}
          >
            <TemplateDetails />
          </div>

          <div
            className={`${
              selectedItemIndex === 4 ? "selected" : ""
            } tab_strip_tab`}
          >
            <view>
              <div className="alert_contianer">
                <alert warning="warning">
                  <icon>info</icon>
                  <text marquee="marquee">
                    <span>
                      Your email address is not verified. Verify it to receive
                      emails from us.
                    </span>
                  </text>
                  <action>
                    <div className="button accent">
                      <text>Verify</text>
                    </div>
                    <separator vertical="vertical"></separator>
                    <div className="button mini close">
                      <icon>close</icon>
                    </div>
                  </action>
                </alert>
              </div>

              <view vertical="vertical">
                <switchable
                  micro="micro"
                  overlay="overlay"
                  filter="filter"
                  className=""
                >
                  <switch>
                    <icon>grid_view</icon>
                    <wrap>
                      <text>
                        <tip>
                          <span>Collapse</span>
                          <b>·</b>
                        </tip>
                        Orders Filters
                      </text>
                    </wrap>
                  </switch>
                  <view className="filter_container static">
                    <div className="filter_content">
                      <div className="filter_block">
                        <span className="title">
                          <span>Created</span>
                          <button type="button" className="button">
                            <text>Clear</text>
                          </button>
                        </span>
                        <div className="data_cell">
                          <wrap block="block">
                            <div className="form_fields line">
                              <TimePicker name="tpAntd" placeholder="From" />
                            </div>
                          </wrap>
                          <wrap block="block">
                            <div className="form_fields line">
                              <DatePicker
                                name="dtpAntd"
                                format="MM/DD/YY"
                                placeholder="To"
                              />
                            </div>
                          </wrap>
                        </div>
                      </div>
                      <div className="filter_block">
                        <div className="data_cell">
                          <wrap block="block">
                            <div className="form_fields line">
                              <Select
                                showSearch
                                placeholder="Created by"
                                id="ddlgAntd3"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.props.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }
                              >
                                {children}
                              </Select>
                            </div>
                          </wrap>
                        </div>
                      </div>

                      <div className="filter_block">
                        <span className="title">
                          <span>Region</span>
                          <button type="button" className="button">
                            <text>Clear</text>
                          </button>
                        </span>
                        <div className="data_cell">
                          <wrap block="">
                            <label className="input_cont">
                              <input
                                type="text"
                                className=""
                                placeholder="Menu Name"
                                name="menu_name"
                                defaultValue=""
                              />
                              <i></i>
                            </label>
                          </wrap>
                        </div>
                      </div>
                      <div className="filter_block">
                        <div className="data_cell">
                          <wrap block="">
                            <label className="input_cont">
                              <input
                                type="text"
                                placeholder="Code"
                                name="code"
                                defaultValue=""
                              />
                              <separator vertical=""></separator>
                              <label simple="" checkbox="">
                                <name>Empty</name>
                                <input type="checkbox" name="code-empty" />
                                <text></text>
                              </label>
                              <i></i>
                            </label>
                          </wrap>
                        </div>
                      </div>

                      <div className="filter_block filtered">
                        <span className="title">
                          <span>Checkbox</span>
                          <button type="button" className="button">
                            <text>Clear</text>
                          </button>
                        </span>
                        <div className="data_cell">
                          <wrap block="">
                            <div className="options" name="DraftFlag">
                              <label>
                                <input
                                  type="checkbox"
                                  readOnly
                                  defaultValue="false"
                                />
                                <wrap effect="material">
                                  <text>Active</text>{" "}
                                </wrap>
                              </label>
                              <label>
                                <input type="checkbox" defaultValue="false" />
                                <wrap effect="material">
                                  <text>Shipped</text>{" "}
                                </wrap>
                              </label>
                              <label>
                                <input
                                  type="checkbox"
                                  defaultValue="false"
                                  defaultChecked="defaultChecked"
                                />
                                <wrap effect="material">
                                  <text>Delivered</text>{" "}
                                </wrap>
                              </label>
                              <label>
                                <input type="checkbox" defaultValue="false" />
                                <wrap effect="material">
                                  <text>Pending</text>{" "}
                                </wrap>
                              </label>
                            </div>
                          </wrap>
                        </div>
                      </div>

                      <div className="filter_block">
                        <span className="title">
                          <span>
                            Radio button<tip>sec</tip>
                          </span>
                          <button type="button" className="button">
                            <text>Clear</text>
                          </button>
                        </span>
                        <div className="data_cell">
                          <wrap block="">
                            <div large="" className="options" name="DraftFlag">
                              <label>
                                <input
                                  type="radio"
                                  name="active"
                                  defaultValue="1"
                                />
                                <wrap effect="material">
                                  <text>Yes</text>{" "}
                                </wrap>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="active"
                                  defaultValue="0"
                                />
                                <wrap effect="material">
                                  <text>No</text>{" "}
                                </wrap>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  name="active"
                                  defaultValue="0"
                                />
                                <wrap effect="material">
                                  <text>
                                    <b>All</b>
                                  </text>
                                </wrap>
                              </label>
                            </div>
                          </wrap>
                        </div>
                      </div>

                      <div className="filter_block">
                        <span className="title">
                          <span>Switcher</span>
                          <button type="button" className="button">
                            <text>Clear</text>
                          </button>
                        </span>
                        <div className="data_cell">
                          <wrap block="">
                            <div className="option_group">
                              <div className="option_bar" name="DraftFlag">
                                <label>
                                  <input
                                    type="radio"
                                    name="active"
                                    defaultValue="1"
                                  />
                                  <wrap effect="material">
                                    <text>Yes</text>{" "}
                                  </wrap>
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="active"
                                    defaultValue="0"
                                  />
                                  <wrap effect="material">
                                    <text>No</text>{" "}
                                  </wrap>
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name="active"
                                    defaultValue="0"
                                  />
                                  <wrap effect="material">
                                    <text>
                                      <b>All</b>
                                    </text>
                                  </wrap>
                                </label>
                              </div>
                            </div>
                          </wrap>
                        </div>
                      </div>
                    </div>
                  </view>
                </switchable>
                <view>
                  <toolbar scroll="scroll">
                    <wrap>
                      <div
                        effect="material"
                        className="button primary adaptive"
                      >
                        <icon>save</icon>
                        <text>Save Changes</text>
                      </div>

                      <separator vertical=""></separator>

                      <div effect="material" className="button ">
                        <text>Delete Overlay</text>
                      </div>

                      <separator vertical=""></separator>

                      <div
                        className="button mini  "
                        data-tip="Create New Object"
                      >
                        <icon>plus</icon>
                      </div>
                      <separator vertical=""></separator>
                      <div className="button mini " data-tip="Copy">
                        <icon>copy</icon>
                      </div>
                      <button
                        disabled
                        className="button mini"
                        data-tip="paste "
                      >
                        <icon>Paste</icon>
                      </button>
                      <separator vertical=""></separator>
                      <div
                        className="button mini "
                        data-tip="Remove Selected Item"
                      >
                        <icon>delete</icon>
                      </div>
                    </wrap>
                  </toolbar>
                  <toolbar scroll="scroll" details="details">
                    <wrap>
                      <action>
                        <wrap>
                          <div className="form_fields line">
                            <div className="data_label">Feed URL</div>
                            <input name="FeedURL" type="text" setvalue="" />
                          </div>
                          <separator vertical=""></separator>
                          <div className="form_fields line small">
                            <div className="data_label">
                              Durations<tip>sec</tip>
                            </div>
                            <input name="Duration" type="text" />
                          </div>
                        </wrap>
                      </action>
                    </wrap>
                  </toolbar>
                  <toolbar scroll="scroll" details="details">
                    <wrap>
                      <action>
                        <div className="form_fields line">
                          <div className="data_label">Drop Down List</div>
                          <Select
                            placeholder="Select Character"
                            id="ddlAntd3"
                            size="default"
                            defaultValue="a1"
                          >
                            {children}
                          </Select>
                        </div>

                        <div className="form_fields line">
                          <div className="data_label">Combo Box</div>
                          <Select
                            showSearch
                            placeholder="Select Character"
                            id="ddlgAntd4"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                              option.props.children
                                .toLowerCase()
                                .indexOf(input.toLowerCase()) >= 0
                            }
                          >
                            {children}
                          </Select>
                        </div>

                        <div className="form_fields line">
                          <div className="data_label">Numeric</div>
                          <InputNumber min={1} max={100000} defaultValue={3} />
                        </div>

                        <div className="form_fields line">
                          <div className="data_label">Multi Select</div>
                          <Select
                            mode="multiple"
                            size="default"
                            placeholder="Please select"
                            defaultValue={["a10", "c12"]}
                          >
                            {children}
                          </Select>
                        </div>
                        <div className="form_fields line">
                          <div className="data_label">Time Picker</div>
                          <TimePicker
                            name="tpAntd"
                            defaultValue={moment("12:08:23", "HH:mm:ss")}
                          />
                        </div>

                        <div className="form_fields line">
                          <div className="data_label">Date Picker</div>
                          <DatePicker
                            name="dtpAntd"
                            defaultValue={moment("2015/01/01", "YYYY/MM/DD")}
                            format="MM/DD/YY"
                          />
                        </div>
                      </action>
                    </wrap>
                  </toolbar>
                  <view highlight="highlight">
                    <div className="form_container">
                      <div className="section_group">
                        <div className="sections">
                          <div className="form_fields input-validation-error">
                            <div className="input_cont">
                              <icon yellow="yellow">warning</icon>
                              <div className="data_help">
                                Configure settings when and how You'll get
                                notified for content changes
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fab_container bottom right">
                      <div effect="material" className="button fab primary">
                        <icon>plus</icon>
                      </div>
                    </div>
                  </view>
                </view>
              </view>
            </view>
          </div>

          <div
            className={`${
              selectedItemIndex === 5 ? "selected" : ""
            } tab_strip_tab`}
          >
            <view vertical="">
              <view>
                <div className="list_view_wrapper " view="block">
                  <list template="line">
                    <wrap>
                      <block horizontal="">
                        <item>
                          <section horizontal="" effect="material">
                            <thumb select="">
                              <icon>pin</icon>
                            </thumb>
                            <wrap>
                              <detail>
                                <text marquee="">
                                  <b>John Smith</b>
                                </text>
                                <text marquee="">
                                  <span>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                  </span>
                                </text>
                              </detail>
                              <action right="">
                                <group>
                                  <badge>Manager</badge>
                                </group>
                                <separator vertical=""></separator>
                                <div className="button mini">
                                  <icon>options</icon>
                                </div>
                              </action>
                            </wrap>
                          </section>
                        </item>
                      </block>
                      <block horizontal="">
                        <item>
                          <section horizontal="">
                            <thumb select="">
                              <icon>pin</icon>
                            </thumb>
                            <wrap>
                              <detail grow="">
                                <text marquee="">
                                  <span>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                  </span>
                                </text>
                              </detail>
                              <action right="">
                                <group>
                                  <badge filled="" accent="">
                                    Private
                                  </badge>
                                </group>
                                <separator vertical=""></separator>
                                <div className="button mini">
                                  <icon>edit</icon>
                                </div>
                                <div className="button mini">
                                  <icon>delete</icon>
                                </div>
                              </action>
                            </wrap>
                          </section>
                        </item>
                      </block>
                      <block horizontal="">
                        <item>
                          <section horizontal="" effect="material">
                            <thumb select="">
                              <icon>link</icon>
                            </thumb>
                            <wrap>
                              <action>
                                <div className="button mini">
                                  <icon>star</icon>
                                </div>
                                <div className="button mini">
                                  <icon>play</icon>
                                </div>
                              </action>
                              <detail grow="">
                                <b>16:40</b>
                                <text marquee="">
                                  <span>
                                    Lorem Ipsum is simply dummy text of the
                                    printing and typesetting industry. Lorem
                                    Ipsum is simply dummy text of the printing
                                    and typesetting industry.
                                  </span>
                                </text>
                              </detail>
                              <action right="">
                                <group>
                                  <badge filled="" private="">
                                    Private
                                  </badge>
                                </group>
                                <separator vertical=""></separator>
                                <div className="button mini">
                                  <icon>options</icon>
                                </div>
                              </action>
                            </wrap>
                          </section>
                        </item>
                      </block>
                    </wrap>
                  </list>
                </div>
              </view>
              <view>
                <div className="list_view_wrapper" view="grid">
                  <list template="common">
                    <wrap>
                      <block highlight="" space="">
                        <item>
                          <section group="">
                            <text marquee="">
                              <span>Group Title Goes Here</span>
                            </text>
                            <text marquee="" light="">
                              <span>5 Items</span>
                            </text>
                            <div className="media_cont">
                              <action group="">
                                <panel bottom="">
                                  <group right="">
                                    <badge filled="" private="">
                                      Private
                                    </badge>
                                  </group>
                                </panel>
                              </action>
                              <picture media="">
                                <cover>
                                  <thumb className="dark" ratio="16:9">
                                    <wrap>
                                      <picture></picture>
                                    </wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap>
                                      <picture></picture>
                                    </wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap>
                                      <picture></picture>
                                    </wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap>
                                      <picture></picture>
                                    </wrap>
                                  </thumb>
                                </cover>
                              </picture>
                            </div>
                          </section>
                          <toolbar>
                            <action>
                              <div className="button mini" data-tip="Bookmark">
                                <icon>star</icon>
                              </div>
                              <div className="button mini">
                                <icon>play</icon>
                              </div>
                            </action>
                            <action right="">
                              <div className="button mini">
                                <icon>options</icon>
                              </div>
                            </action>
                          </toolbar>
                        </item>
                      </block>
                      <block highlight="" space="">
                        <item no_reaction="">
                          <section group="">
                            <text marquee="">
                              <span>Group Title Goes Here</span>
                            </text>
                            <text marquee="" light="">
                              <span>5 Items</span>
                            </text>
                            <div className="media_cont">
                              <action group="">
                                <panel bottom="">
                                  <group right="">
                                    <badge filled="" private="">
                                      Private
                                    </badge>
                                  </group>
                                </panel>
                              </action>
                              <picture media="">
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap>
                                      <picture></picture>
                                    </wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap></wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap></wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap></wrap>
                                  </thumb>
                                </cover>
                              </picture>
                            </div>
                          </section>
                          <toolbar>
                            <action>
                              <div className="button mini" data-tip="Bookmark">
                                <icon>star</icon>
                              </div>
                              <div className="button mini">
                                <icon>play</icon>
                              </div>
                            </action>
                            <action right="">
                              <div className="button mini">
                                <icon>options</icon>
                              </div>
                            </action>
                          </toolbar>
                        </item>
                      </block>
                      <block highlight="" space="">
                        <item>
                          <section group="">
                            <text marquee="">
                              <span>Group Title Goes Here</span>
                            </text>
                            <text marquee="" light="">
                              <span>5 Items</span>
                            </text>
                            <div className="media_cont">
                              <action group="">
                                <panel bottom="">
                                  <group right="">
                                    <badge filled="" private="">
                                      Private
                                    </badge>
                                  </group>
                                </panel>
                              </action>
                              <picture media="">
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap>
                                      <picture></picture>
                                    </wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap></wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap></wrap>
                                  </thumb>
                                </cover>
                                <cover>
                                  <thumb ratio="16:9">
                                    <wrap></wrap>
                                  </thumb>
                                </cover>
                              </picture>
                            </div>
                          </section>
                          <toolbar>
                            <action>
                              <div className="button mini" data-tip="Bookmark">
                                <icon>star</icon>
                              </div>
                              <div className="button mini">
                                <icon>play</icon>
                              </div>
                            </action>
                            <action right="">
                              <div className="button mini">
                                <icon>options</icon>
                              </div>
                            </action>
                          </toolbar>
                        </item>
                      </block>
                    </wrap>
                  </list>
                </div>
              </view>
            </view>
          </div>

          <div
            className={`${
              selectedItemIndex === 6 ? "selected" : ""
            } tab_strip_tab`}
          ></div>

          <div
            className={`${
              selectedItemIndex === 7 ? "selected" : ""
            } tab_strip_tab`}
          >
            <view horizontal="">
              <view vertical="">
                <view>
                  <toolbar>
                    <text>
                      Simple Table Markup (<b>Fixed</b>)
                    </text>
                  </toolbar>
                  <view space="" scroll="">
                    <div className="table_view">
                      <table>
                        <thead>
                          <tr>
                            <th>
                              <text>Sample Title</text>
                            </th>
                            <th>
                              <text>Another Title</text>
                            </th>
                            <th>
                              <text>Title</text>
                            </th>
                            <th>
                              <text>Sample Title</text>
                            </th>
                            <th>
                              <text>Another Title</text>
                            </th>
                            <th>
                              <text>Title</text>
                            </th>
                            <th action=""> </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <div effect="material" className="button extra">
                                <icon>delete</icon>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <div effect="material" className="button extra">
                                <icon>delete</icon>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <input type="text" />
                            </td>
                            <td>
                              <div effect="material" className="button extra">
                                <icon>delete</icon>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="fab_container bottom right">
                      <div effect="material" className="button fab primary">
                        <icon>plus</icon>
                      </div>
                    </div>
                  </view>
                </view>
                <view horizontal="">
                  <view>
                    <toolbar>
                      <text>
                        Simple Table Markup (<b>Adaptive</b>)
                      </text>
                    </toolbar>
                    <view space="">
                      <div className="table_view adaptive">
                        <table>
                          <thead>
                            <tr>
                              <th className="large">
                                <text>Sample Title</text>
                              </th>
                              <th>
                                <text>Another Title</text>
                              </th>
                              <th>
                                <text>Title</text>
                              </th>
                              <th action=""> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <div effect="material" className="button extra">
                                  <icon>delete</icon>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <div effect="material" className="button extra">
                                  <icon>delete</icon>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <div effect="material" className="button extra">
                                  <icon>delete</icon>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </view>
                  </view>
                  <view>
                    <toolbar>
                      <text>
                        Simple Table Markup (with <b>Colgroup</b>)
                      </text>
                    </toolbar>
                    <view space="">
                      <div className="table_view">
                        <table>
                          <colgroup>
                            <col width="100px" />
                            <col width="200px" />
                            <col />
                            <col width="40px" />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>
                                <text>Sample Title</text>
                              </th>
                              <th>
                                <text>Another Title</text>
                              </th>
                              <th>
                                <text>Title</text>
                              </th>
                              <th action=""> </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <div effect="material" className="button extra">
                                  <icon>delete</icon>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <div effect="material" className="button extra">
                                  <icon>delete</icon>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <input type="text" />
                              </td>
                              <td>
                                <div effect="material" className="button extra">
                                  <icon>delete</icon>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </view>
                  </view>
                </view>
              </view>
              <view auto_height="" small="">
                <toolbar>
                  <text>
                    <b>Advanced</b> Table Markup (Adaptive)
                  </text>
                </toolbar>
                <view space="">
                  <div className="table_view adaptive">
                    <table>
                      <thead>
                        <tr>
                          <th className="large">
                            <label simple="" checkbox="">
                              <name>
                                <b>Text Title</b>
                              </name>
                              <separator vertical=""></separator>
                              <input type="checkbox" />
                              <tip></tip>
                            </label>
                          </th>
                          <th action=""> </th>
                          <th>
                            <label simple="" checkbox="">
                              <name>
                                <b>TimePicker Title</b>
                              </name>
                              <separator vertical=""></separator>
                              <input
                                type="checkbox"
                                defaultChecked="defaultChecked"
                              />
                              <tip></tip>
                            </label>
                          </th>
                          <th>
                            <label simple="" checkbox="">
                              <name>
                                <b>DatePicker Title</b>
                              </name>
                              <separator vertical=""></separator>
                              <input type="checkbox" />
                              <tip></tip>
                            </label>
                          </th>
                          <th>
                            <label simple="" checkbox="">
                              <name>
                                <b>Select Title</b>
                              </name>
                              <separator vertical=""></separator>
                              <input type="checkbox" />
                              <tip></tip>
                            </label>
                          </th>
                          <th>
                            <label simple="" checkbox="">
                              <name>
                                <b>Input Title</b>
                              </name>
                              <separator vertical=""></separator>
                              <input type="checkbox" />
                              <tip></tip>
                            </label>
                          </th>
                          <th action=""> </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <text>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </text>
                          </td>
                          <td>
                            <wrap>
                              <label classic="">
                                <input type="checkbox" />
                                <box>
                                  <check></check>
                                </box>
                              </label>
                            </wrap>
                          </td>
                          <td>
                            <wrap>
                              <TimePicker
                                name="tpAntd"
                                placeholder="From"
                                className="input-validation-error"
                              />
                              <DatePicker
                                name="dtpAntd"
                                format="MM/DD/YY"
                                placeholder="To"
                              />
                            </wrap>
                          </td>
                          <td>
                            <wrap>
                              <DatePicker
                                name="dtpAntd"
                                format="MM/DD/YY"
                                placeholder="To"
                              />
                            </wrap>
                          </td>
                          <td>
                            <wrap>
                              <Select
                                showSearch
                                placeholder="Created by"
                                id="ddlgAntd5"
                                optionFilterProp="children"
                                filterOption={(input, option) =>
                                  option.props.children
                                    .toLowerCase()
                                    .indexOf(input.toLowerCase()) >= 0
                                }
                              >
                                {children}
                              </Select>
                            </wrap>
                          </td>
                          <td>
                            <wrap>
                              <input type="text" />
                            </wrap>
                          </td>
                          <td>
                            <div effect="material" className="button extra">
                              <icon>delete</icon>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <wrap>
                              <label classic="">
                                <input type="checkbox" />
                                <box>
                                  <check></check>
                                </box>
                              </label>
                            </wrap>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <div effect="material" className="button extra">
                              <icon>delete</icon>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>
                            <wrap>
                              <label classic="">
                                <input type="checkbox" />
                                <box>
                                  <check></check>
                                </box>
                              </label>
                            </wrap>
                          </td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <div effect="material" className="button extra">
                              <icon>delete</icon>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </view>
              </view>
            </view>
          </div>

          <div
            className={`${
              selectedItemIndex === 8 ? "selected" : ""
            } tab_strip_tab`}
          >
            <view dashboard="">
              <dashboard>
                <wrap>
                  <item dwidget="" small="">
                    <toolbar border="bottom">
                      <text caption="" data-weight="700">
                        <span>
                          Most Played <dot></dot> TSTManager{" "}
                        </span>
                      </text>
                      <action right="">
                        <div className="button mini right">
                          <icon>options</icon>
                        </div>
                      </action>
                    </toolbar>
                    <wrap>
                      <view intro="">
                        <wrap>
                          <icon large="" light="">
                            dashboard
                          </icon>
                          <info>
                            <text subtitle="" data-weight="700">
                              {" "}
                              No Data to Display
                            </text>
                            <text wrap="" light="">
                              Most Played Content Within TBG
                            </text>
                          </info>
                        </wrap>
                      </view>
                    </wrap>
                  </item>

                  <item dwidget="" round="" small="">
                    <toolbar border="bottom">
                      <text caption="" data-weight="700">
                        <span>Daily Onlines</span>
                      </text>
                      <action right="">
                        <div className="button mini hide right">
                          <icon>edit</icon>
                        </div>
                      </action>
                    </toolbar>
                    <info>
                      <text wrap="" light="">
                        Daily online devices from December 19 - 29
                      </text>
                    </info>
                    <wrap chart="">
                      <canvas></canvas>
                    </wrap>
                  </item>
                </wrap>

                <separator horizontal=""></separator>

                <wrap template="large">
                  <item dwidget="" round="" small="">
                    <toolbar border="bottom">
                      <text caption="" marquee="" data-weight="700">
                        <span>Daily Onlines</span>
                      </text>
                      <action right="">
                        <div className="button mini hide right">
                          <icon>options</icon>
                        </div>
                      </action>
                    </toolbar>
                    <info>
                      <text wrap="" light="">
                        Daily online devices from December 19 - 29
                      </text>
                    </info>

                    <wrap chart="">
                      <canvas></canvas>
                    </wrap>
                  </item>
                </wrap>
              </dashboard>
            </view>
          </div>
          <div
            className={`${
              selectedItemIndex === 9 ? "selected" : ""
            } tab_strip_tab`}
          >
            <container></container>
            <view>
              <div className="window_container open">
                <div className="popup open">
                  <div className="react-draggable">
                    <header>
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
                              ></path>
                            </svg>
                          </logo>
                        </group>
                      </wrapper>
                    </header>
                    <div>
                      <div id="windowContent" className="window_cont">
                        <form
                          id="frmLogin"
                          defaultbutton="#btnLogin"
                          noValidate="noValidate"
                        >
                          <group direction="column">
                            <cont className="hasValue touched" length="200">
                              <input
                                type="text"
                                name="Username"
                                maxLength="64"
                                defaultValue="Smith"
                              />
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
                            <cont className="hasValue touched dirty">
                              <input
                                type="password"
                                placeholder=" "
                                name="password_1"
                                defaultValue="amgo2000"
                              />
                              <decor>
                                <label>
                                  <text>
                                    <line></line>
                                    <wrap>
                                      <span>Password</span>
                                    </wrap>
                                  </text>
                                  <line></line>
                                </label>
                                <border></border>
                              </decor>
                              <div
                                effect="material"
                                data-shrink="no"
                                className="button"
                              >
                                <text className="">Show</text>
                              </div>
                            </cont>
                          </group>
                          <space></space>
                          <toolbar>
                            <button
                              id="btnLogin"
                              type="button"
                              className="button submit fit large primary"
                            >
                              <text>Login</text>
                            </button>
                          </toolbar>
                          <toolbar>
                            <label classic="" className="">
                              <input type="checkbox" name="2" />
                              <box>
                                <check></check>
                                <ink></ink>
                              </box>
                              <text className="">Keep me Signed in</text>
                            </label>
                            <action right="">
                              <a link="" href="">
                                Forgot Password?
                              </a>
                            </action>
                          </toolbar>
                          <separator horizontal=""></separator>
                          <toolbar>
                            <action gap="">
                              <a simple="" link="" href="">
                                Not a member?
                              </a>
                              <a main="" link="" href="">
                                Sign up now
                              </a>
                            </action>
                          </toolbar>
                          <space></space>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </view>
          </div>
          <div
            className={`${
              selectedItemIndex === 10 ? "selected" : ""
            } tab_strip_tab`}
          >
            <container></container>
            <view>
              <div className="window_container open">
                <div className="popup open">
                  <wrap className="special_selector_container">
                    <div small="" className="special_selector">
                      <back>
                        <picture>
                          <img alt="" src="content/image/sign_up_dark.jpg" />
                        </picture>
                      </back>
                      <header>
                        <wrapper>
                          <group gap="medium" direction="column">
                            <h2
                              data-heading=""
                              data-weight="800"
                              data-size="xx-large"
                            >
                              Regular
                              <br />
                              User
                            </h2>
                            <text wrap="">
                              Nunc sit amet condimentum arcu, ac auctor urna.
                              Etiam lacinia sodales pulvinar.
                            </text>
                          </group>
                        </wrapper>
                      </header>
                      <div id="windowContent1" className="window_cont">
                        <toolbar>
                          <button
                            type="button"
                            className="button large primary"
                          >
                            <text>Select</text>
                          </button>
                        </toolbar>
                      </div>
                    </div>
                    <div main="" small="" className="special_selector">
                      <back>
                        <picture>
                          <img alt="" src="content/image/sign_up_main.jpg" />
                        </picture>
                      </back>
                      <header>
                        <wrapper>
                          <group gap="medium" direction="column">
                            <h2
                              data-heading=""
                              data-weight="800"
                              data-size="xx-large"
                            >
                              Service
                              <br />
                              Provider
                            </h2>
                            <text wrap="">
                              Nunc sit amet condimentum arcu, ac auctor
                              urna.Etiam lacinia ac auctor sit amet condimentum
                              arcu condimentum arcu sodales pulvinar.
                            </text>
                          </group>
                        </wrapper>
                      </header>
                      <div id="windowContent" className="window_cont">
                        <toolbar>
                          <button
                            type="button"
                            className="button large primary"
                          >
                            <text>Select</text>
                          </button>
                        </toolbar>
                      </div>
                    </div>
                  </wrap>
                </div>
              </div>
            </view>
          </div>
          <div
            className={`${
              selectedItemIndex === 11 ? "selected" : ""
            } tab_strip_tab`}
          >
            <container>
              <view>
                <scroller>
                  <grid counter="">
                    <toolbar>
                      {/*<count data-count="1024">0</count><separator vertical=""></separator><div className="button">Section Title</div>*/}
                    </toolbar>
                  </grid>
                </scroller>
              </view>
            </container>
          </div>
        </div>
      </div>
    </>
  );
};
