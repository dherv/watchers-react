import { renderer, shallow, React } from "../../test.config";
import Nav from "./Nav";
import NavItem from "./components/NavItem";

describe("Nav", () => {
  const props = {
    items: ["item1", "item2"],
    onClick: jest.fn()
  };
  const wrapper = shallow(<Nav {...props} />);
  describe("component", () => {
    it("should display one nav and one ul", () => {
      expect.assertions(2);
      expect(wrapper.find("ul").length).toBe(1);
      expect(wrapper.find("nav").length).toBe(1);
    });

    it("should display the right number of NavItem components", () => {
      expect.assertions(1);
      expect(wrapper.find(NavItem).length).toBe(2);
    });

    it("should call the prop onClick when a NavItem is clicked", () => {
      expect.assertions(1);
      const item = wrapper.find(NavItem).first();
      item.prop("onClick")("item1");
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      const tree = shallow(<Nav {...props} />);
      expect(tree).toMatchSnapshot();
    });
  });
});
