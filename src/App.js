import Character from "./components/Character";

const App = ({ list }) => (
  <ul>
    {list.map((char, index) => {
      return <Character key={char.name + index} char={char} />;
    })}
  </ul>
);

export default App;
