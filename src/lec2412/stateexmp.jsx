import * as React from "react";
class StateExample extends React.Component {
  state = {
    first: false,
    second: true,
  };
  render() {
    const { first, second } = this.state;
    return (
      <div>
        <br />
        <button disabled={first}>Button1</button>
        <button disabled={second}>Button2</button>
      </div>
    );
  }
}
export default StateExample;
