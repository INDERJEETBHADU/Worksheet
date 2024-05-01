import './App.css';

import Months from "./components/Months"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import New from "./components/New"
import Search from "./components/Search"




function App() {
  return (
    <div className="App">
      <>
        <Months />
        {/* <New /> 
        <Search /> */}
      </>
    </div>
  );
}

export default App;
