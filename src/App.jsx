import MainComp from "./MainComp";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<MainComp />} />
      <Route exact path="/page/:id" element={<MainComp />} />
    </Routes>
  );
}

export default App;
