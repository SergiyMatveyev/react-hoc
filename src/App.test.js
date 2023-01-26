import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Character from "./components/Character";

configure({
  adapter: new Adapter(),
});

describe("<App />", () => {
  let wrapper;
  const mocList = [
    { name: "Dark Wayder", side: "dark" },
    { name: "Luck Skywalker", side: "light" },
    { name: "Palpatine", side: "dark" },
    { name: "Obivan Cenoby", side: "light" },
  ];

  beforeEach(() => {
    wrapper = shallow(<App list={mocList} />);
  });

  it("Should render characters", () => {
    wrapper.setProps({
      list: mocList,
    });
    expect(wrapper.find(Character)).toHaveLength(4);
  });
});
