import * as React from "react";
class IterableExample extends React.Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading....",
    forth: "loading...",
    fifth: "loading...",
    donemsg: "loading Completed",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        first: "Done",
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        second: "Done",
      });
    }, 4000);
    setTimeout(() => {
      this.setState({
        third: "Done",
      });
    }, 6000);
    setTimeout(() => {
      this.setState({
        forth: "Done",
      });
    }, 8000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        fifth: state.donemsg,
      }));
    }, 10000);
  }
  render() {
    const { first, second, third, forth, fifth } = this.state;

    return (
      <ul>
        <li>First: {first}</li>
        <li>Second: {second}</li>
        <li>Third: {third}</li>
        <li>Forth: {forth}</li>
        <li>Fifth: {fifth}</li>
      </ul>
    );
  }
}

export default IterableExample;
