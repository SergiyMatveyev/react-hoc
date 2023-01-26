const withFilteredProps =
  (Component) =>
  ({ list, side }) => {
    const filteredList = list.filter((char) => char.side === side);
    return <Component list={filteredList} />;
  };

export default withFilteredProps;
