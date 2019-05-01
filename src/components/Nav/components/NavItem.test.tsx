import { renderer, shallow, React } from "../../../test.config";
import NavItem from "./NavItem";

describe("NavItem", () => {
  const props = {
    item: "item1",
    onClick: jest.fn()
  };
  const wrapper = shallow(<NavItem {...props} />);
  describe("component", () => {
    it("should display one li and one anchor", () => {
      expect.assertions(2);
      expect(wrapper.find("li").length).toBe(1);
      expect(wrapper.find("a").length).toBe(1);
    });

    it("should display the text from the props.item", () => {
      expect.assertions(1);
      expect(wrapper.find("a").text()).toBe("item1");
    });

    it("should call handleClick when anchor link is clicked", () => {
      expect.assertions(3);
      const handleClick = jest.spyOn(NavItem.prototype, "handleClick");
      const wrapper = shallow(<NavItem {...props} />);
      const link = wrapper.find("a");
      link.simulate("click");
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledWith("item1");
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      const tree = renderer.create(<NavItem {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
