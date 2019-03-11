import { shallow } from "enzyme";
import DataComponent from "./DataComponent";
import { assoc } from "ramda";
import React from "react";

const emptyData = { data: [] };
const nonEmptyData = assoc(
  "data",
  [
    {
      raw_text: "raw1",
      observation_time: "time1",
      flight_category: "category1"
    }
  ],
  {}
);

describe("DataComponent", () => {
  it("does not render the page when there are no reports", () => {
    const wrapper = shallow(<DataComponent {...emptyData} />);
    expect(wrapper.find("div")).toHaveLength(0);
  });
  it("does render the page for when not on REPORT_SCREEN", () => {
    const wrapper = shallow(<DataComponent {...nonEmptyData} />);
    expect(wrapper.find("div")).not.toHaveLength(0);
  });
});
