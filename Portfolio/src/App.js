import { Routes, Route } from "react-router-dom";
import Main from "./component/main";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
