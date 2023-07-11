import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Portfolio, Services, About, Contact } from "./pages";
import { Navbar } from "./layouts";

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/portfolio'} element={<Portfolio />} />
        <Route path={'/services'} element={<Services />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
      </Routes>
    </Router>
  )
};

export default App;