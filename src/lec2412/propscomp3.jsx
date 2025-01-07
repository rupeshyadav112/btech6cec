import * as React from "react";
import MyPropButton from "./propscomp1";
import MyPropsList from "./propscomp2";

class PropExample extends React.Component {
  state = {
    var1: true,
    var2: "Click Me",
    var4: [1, 2, 3, 4, 5],
  };
  render() {
    const { var1, var2, var4 } = this.state;
    return (
      <div>
        <MyPropButton xyz={var1} abc={var2} />
        <MyPropsList itms={var4} />
      </div>
    );
  }
}
export default PropExample;
