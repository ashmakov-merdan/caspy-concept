import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./layouts";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </Router>
  )
};

export default App;