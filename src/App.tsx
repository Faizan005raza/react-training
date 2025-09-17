import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReverseString from "./components/reverse";
import Home from "./components/home";
//import { countries } from "./constants/countries";
import CountryList from "./components/CountryList";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/reverse" element={<ReverseString />} />
          <Route path="/home" element={<Home />} />
          <Route path="/CountryList" element={<CountryList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
