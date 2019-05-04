import { renderer, shallow, React } from "../../test.config";
import LayoutPage from "./LayoutPage";
import { MemoryRouter } from "react-router";
import LayoutHeader from "../LayoutHeader/LayoutHeader";
describe("LayoutPage", () => {
  const props = {
    children: "children"
  };
  const wrapper = shallow(<LayoutPage {...props} />);
  describe("component", () => {
    it("should display one <div>", () => {
      expect.assertions(1);
      expect(wrapper.find("div")).toHaveLength(1);
    });
    it("should display one <LayoutHeader>", () => {
      expect.assertions(1);
      expect(wrapper.find(LayoutHeader)).toHaveLength(1);
    });
    it("should display one <main>", () => {
      expect.assertions(1);
      expect(wrapper.find("main")).toHaveLength(1);
    });
    it("should display one <main> with prop its children equal to props.children", () => {
      expect.assertions(1);
      expect(wrapper.find("main").prop("children")).toEqual(props.children);
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer
        .create(
          <MemoryRouter>
            <LayoutPage {...props} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
