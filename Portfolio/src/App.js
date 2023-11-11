import { Routes, Route } from "react-router-dom";
import Main from "./component/main";
import Header from "./component/Header";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {/* <Route path="/about" element={<Header />} /> */}
    </Routes>
  );
}

export default App;
