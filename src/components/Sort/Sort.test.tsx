import { renderer, shallow, React } from "../../test.config";
import Sort from "./Sort";
import Nav from "../Nav/Nav";
describe("Sort", () => {
  const props = {
    sort: jest.fn()
  };
  const wrapper = shallow(<Sort {...props} />);
  describe("component", () => {
    // one Nav
    it("should display one Nav component", () => {
      expect.assertions(2);
      expect(wrapper.find(Nav).length).toBe(1);
      expect(wrapper.find(Nav).prop("items")).toEqual([
        "date",
        "rating",
        "name"
      ]);
    });
    // Nav on click call handleClick
    it("should call handleClick when Nav is clicked", () => {
      expect.assertions(4);
      const handleClick = jest.spyOn(Sort.prototype, "handleClick");
      const wrapper = shallow(<Sort {...props} />);
      const Child = wrapper.find(Nav).first();
      Child.prop("onClick")("item1");
      expect(handleClick).toHaveBeenCalledTimes(1);
      expect(handleClick).toHaveBeenCalledWith("item1");
      expect(props.sort).toHaveBeenCalledTimes(1);
      expect(props.sort).toHaveBeenCalledWith("item1");
    });
    // handleClcik call sort
  });
  describe("snapshot", () => {
    test("should match", () => {
      const tree = renderer.create(<Sort {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
