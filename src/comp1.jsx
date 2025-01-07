import * as React from "react";
class Mycomponent extends React.Component {
  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h2>Website Development</h2>
        <h3>Registration Form</h3>
        <form>
          <label>
            Username:{" "}
            <input
              type="text"
              placeholder="Enter your name"
              style={{ margin: "10px 0", padding: "5px" }}
            />
            <br />
            Password:{" "}
            <input
              type="text"
              placeholder="Enter your password"
              style={{ margin: "10px 0", padding: "5px" }}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{ padding: "5px 10px", marginTop: "10px" }}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Mycomponent;
