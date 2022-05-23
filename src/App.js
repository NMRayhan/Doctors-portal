import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./component/Common/About/About";
import Appointment from "./component/Appointment/Appointment";
import ContactUs from "./component/Common/ContactUs/ContactUs";
import Review from "./component/Common/Review/Review";
import Header from "./component/Common/Header/Header";
import Home from "./component/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/review" element={<Review />} />
      </Routes>
    </div>
  );
}

export default App;
