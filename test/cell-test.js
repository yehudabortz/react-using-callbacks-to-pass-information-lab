import React from "react";
import ReactDOM from "react-dom";
import { configure, shallow } from "enzyme";

import { expect } from "chai";
import sinon from "sinon";

import Adapter from "enzyme-adapter-react-16";

import Cell from "../src/Cell";

configure({ adapter: new Adapter() });

describe("<Cell />", () => {
  const wrapper = shallow(<Cell />);
  it("Should have a class name `cell`", () => {
    expect(wrapper.find(".cell").hasClass("cell")).to.equal(true);
  });
  it("has text `cell`", () => {
    expect(wrapper.text()).to.equal("cell");
  });
});
