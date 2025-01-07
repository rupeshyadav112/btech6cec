// import React from "react";
import ReactDOM from "react-dom";
// import Timetable from "./Timetable/Engineering";
// import StateExample from "./lec2412/stateexmp";
// import StateExample2 from "./lec2412/statemanipulation";
// import IterableExample from "./lec2412/Objiter";
// import PropExample from "./lec2412/propscomp3";
import { StrictMode } from "react";
// import Defaultprops from "./lec2412/defaultprops";
import StateExample1 from "./lec2412/stateexample1";
ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  //   <Timetable />
  // </React.StrictMode>
  // <div>
  //   {/* <StateExample />
  //   <StateExample2 /> */}
  //   {/* <IterableExample /> */}

  //   {/* <PropExample /> */}
  // </div>
  <StrictMode>
    {
      /* <defaultprops />
    <br />
    <Defaultprops var1={true} />
    <br />
    <Defaultprops var2={"yellow"} />
    <br />
    <Defaultprops var3={"New Text"} />
    <br />
    <Defaultprops var1={true} var2={"red"} />
    <br />
    <Defaultprops var1={true} var2={"blue"} var3={"abc"} /> */
      <StateExample1 />
    }
  </StrictMode>
);
