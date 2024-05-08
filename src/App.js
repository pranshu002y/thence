import "./App.css";
import Ask from "./Ask";
import Footer from "./Footer";
import Header from "./Header";
import Registration from "./Registration";
import Website from "./Website";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Website />} />
        <Route path="/getproject" element={<Registration />} />
        <Route path="/website" element={<Website />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
