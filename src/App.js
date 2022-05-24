import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./component/Appointment/Appointment";
import Header from "./component/Common/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import ContactUs from "./component/ContactUs/ContactUs";
import Review from "./component/Review/Review";
import 'react-day-picker/dist/style.css';

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
