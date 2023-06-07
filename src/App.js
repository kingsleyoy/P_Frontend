import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/intellect_insurgence/Quiz";
import QpageTwo from "./Pages/intellect_insurgence/QpageTwo";
import Qresult from "./Pages/intellect_insurgence/Qresult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/intellect_insurgence" element={<Quiz />} />
      <Route path="/intellect_insurgence/page_two" element={<QpageTwo />} />
      <Route
        path="/intellect_insurgence/page_two/pagetwo/result/:score"
        element={<Qresult />}
      />
    </Routes>
  );
}

export default App;
