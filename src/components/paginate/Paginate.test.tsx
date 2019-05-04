import { renderer, shallow, React } from "../../test.config";
import Paginate from "./Paginate";
describe("Paginate", () => {
  const props = {
    count: 120,
    current_page: 2,
    next_page: 3,
    previous_page: 1,
    onClick: jest.fn()
  };
  const number_of_pages = Math.ceil(props.count / 23);
  const wrapper = shallow(<Paginate {...props} />);
  describe("component", () => {
    it("should display one <ul>", () => {
      expect.assertions(1);
      expect(wrapper.find("ul")).toHaveLength(1);
    });
    it("should display a number of <li> equal to number_of_pages", () => {
      expect.assertions(1);
      expect(wrapper.find("li")).toHaveLength(number_of_pages);
    });
    it("should call prop onClick when <li> is clicked", () => {
      expect.assertions(1);
      const li = wrapper.find("li").first();
      li.simulate("click");
      expect(props.onClick).toHaveBeenCalledTimes(1);
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer.create(<Paginate {...props} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
