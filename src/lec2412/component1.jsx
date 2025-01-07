import * as React from "react";
class Xyz extends React.Component {
  render() {
    return (
      <div>
        <h1>Component 1</h1>
        <h2>Component 2</h2>
        <h3>Component 3</h3>
        <Abc />
      </div>
    );
  }
}
class Abc extends React.Component {
  render() {
    return (
      <div>
        <Aaa />
        <h1>Component 1</h1>
        <h2>Component 2</h2>
        <h3>Component 3</h3>
      </div>
    );
  }
}

class Aaa extends React.Component {
  render() {
    return (
      <div>
        <h1>Component 1</h1>
        <h2>Component 2</h2>
        <h3>Component 3</h3>
      </div>
    );
  }
}
export default Xyz;
