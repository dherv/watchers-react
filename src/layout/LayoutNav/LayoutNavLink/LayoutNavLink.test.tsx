import { renderer, shallow, React } from "../../../test.config";
import LayoutNavLink from "./LayoutNavLink";
import { NavLink, MemoryRouter } from "react-router-dom";

describe("LayoutNavLink", () => {
  const props = {
    link: { text: "link", value: "link" }
  };
  const wrapper = shallow(<LayoutNavLink {...props} />);
  describe("component", () => {
    it("should dispaly one react router NavLink", () => {
      expect.assertions(1);
      expect(wrapper.find(NavLink).length).toBe(1);
    });
    it('should have a NavLink with prop "to" equal to link.value', () => {
      expect.assertions(1);
      const child = wrapper.find(NavLink);
      expect(child.prop("to")).toBe(props.link.value);
    });
    it("should have a NavLink with text equal to link.text", () => {
      expect.assertions(1);
      const child = wrapper.find(NavLink);
      expect(child.prop("children")).toBe(props.link.text);
    });
    it("should trigger the activeStyle when clicked", () => {
      expect.assertions(1);
      const child = wrapper.find(NavLink);
      child.simulate("click");
      expect(child.prop("activeClassName")).toBe("active");
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer
        .create(
          <MemoryRouter>
            <LayoutNavLink {...props} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
