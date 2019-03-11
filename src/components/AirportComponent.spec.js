import { shallow } from "enzyme";
import AirportComponent from "./AirportComponent";
import { assoc, pipe } from "ramda";
import React from "react";

const props = pipe(
  assoc("getData", () => "hi"),
  assoc("label", "blah"),
  assoc("data", [])
)({});

describe("AirportComponent", () => {
  it("renders the page ", () => {
    const wrapper = shallow(<AirportComponent {...props} />);
    expect(wrapper.find("input")).not.toHaveLength(0);
  });
});
