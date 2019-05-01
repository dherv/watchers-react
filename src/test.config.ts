import Enzyme, { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Api from "./Api/Api";
Enzyme.configure({ adapter: new Adapter() });

export { Enzyme, shallow, mount, renderer, React, Api };
