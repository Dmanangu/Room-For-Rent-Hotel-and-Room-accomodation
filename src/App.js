import React from "react";
// import LoginDirectory from "./components/login.directory";
import { Pages } from "./pages/pages.directory"; //important <Pages />

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <Pages />
      </div>
    );
  }
}
export default App;
