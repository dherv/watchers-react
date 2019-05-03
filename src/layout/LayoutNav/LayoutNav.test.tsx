import { renderer, shallow, React } from "../../test.config";
import LayoutNav from "./LayoutNav";
import { MemoryRouter } from "react-router";
import LayoutNavLink from "../LayoutNavLink/LayoutNavLink";

describe("LayoutNav", () => {
  const props = {};
  const links = [
    { text: "movies", value: "/movies" },
    { text: "series", value: "/series" },
    { text: "likes", value: "/likes" },
    { text: "watchlist", value: "/watchlist" },
    { text: "account", value: "/account" }
  ];
  const wrapper = shallow(<LayoutNav {...props} />);
  describe("component", () => {
    it("should display one <nav> and one <ul>", () => {
      expect.assertions(2);
      expect(wrapper.find("nav")).toHaveLength(1);
      expect(wrapper.find("ul")).toHaveLength(1);
    });
    it("should display li and LayoutNavLink equal to link.length", () => {
      expect.assertions(2);
      // links are generated in render method and count is 5
      expect(wrapper.find("li")).toHaveLength(5);
      expect(wrapper.find(LayoutNavLink)).toHaveLength(5);
    });
    it("should display first LayoutNavLink with first link infos", () => {
      expect.assertions(5);
      wrapper.find(LayoutNavLink).forEach((link, index) => {
        expect(link.prop("link")).toEqual(links[index]);
      });
    });
  });
  describe("snapshot", () => {
    test("should match", () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <LayoutNav {...props} />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
