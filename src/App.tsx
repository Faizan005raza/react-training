import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReverseString from "./components/reverse";
import Home from "./components/home";
import CountryList from "./components/CountryList";
import Count from "./components/Count";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/reverse" element={<ReverseString />} />
        <Route path="/" element={<Home />} />
        <Route path="/CountryList" element={<CountryList />} />
        <Route path="/Count" element={<Count />} />
      </Routes>
    </Router>
  );
}

export default App;
