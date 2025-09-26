import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import ReverseString from "./components/reverse";
import Home from "./components/home";
import CountryList from "./components/CountryList";
import Count from "./components/Count";
import Props from "./components/Props";
import MyComponent from "./components/CreateComponent";
import Ans from "./components/Nesting";
import HooksDemo from "./components/Hooks";
import LocalStorage from "./components/Local Storage";
import Register from "./components/Registration";
import BasicForm from "./components/LoginPage";
import "./index.css";


function App() {
  return (
    <>
      <Router>
        <Header />
        <div className="global-padding">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reverse" element={<ReverseString />} />
            <Route path="/CountryList" element={<CountryList />} />
            <Route path="/Count" element={<Count />} />
            <Route
              path="/Component"
              element={
                <>
                  <MyComponent />
                  <Props size="Biggest" />
                  <Ans />
                </>
              }
            />
            <Route path="/Hooks" element={<HooksDemo />} />
            <Route path="/Local Storage" element={<LocalStorage />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/LoginPage" element={<BasicForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
