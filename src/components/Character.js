const Character = ({ char }) => (
  <li>
    <strong>{char.name}</strong> - &nbsp;
    {char.side}
  </li>
);

export default Character;
