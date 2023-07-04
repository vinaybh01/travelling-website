import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import Services from "./components/pages/Services";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import SignIn from "./components/pages/SignIn";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" exact Component={About} />
          <Route path="/sign-up" exact Component={Signup} />
          <Route path="/sign-in" exact Component={SignIn} />
          <Route path="/services" exact Component={Services} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
