import { renderer, shallow, React } from "../../test.config";
import LayoutHeader from "./LayoutHeader";
import Logo from "../../components/Logo/Logo";
import { MemoryRouter } from "react-router";
import LayoutNav from "../LayoutNav/LayoutNav";

describe("LayoutHeader", () => {
  const props = {};
  const wrapper = shallow(<LayoutHeader {...props} />);
  describe("component", () => {
    it("should display one <header>", () => {
      expect.assertions(1);
      expect(wrapper.find("header")).toHaveLength(1);
    });
    it("should display one <Logo/>", () => {
      expect.assertions(1);
      expect(wrapper.find(Logo)).toHaveLength(1);
    });
    it("should display one <LayoutNav/>", () => {
      expect.assertions(1);
      expect(wrapper.find(LayoutNav)).toHaveLength(1);
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      expect.assertions(1);
      const tree = renderer
        .create(
          <MemoryRouter>
            <LayoutHeader {...props} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
