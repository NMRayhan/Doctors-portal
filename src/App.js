import { Route, Routes } from "react-router-dom";
import "./App.css";
import Appointment from "./component/Appointment/Appointment";
import Header from "./component/Common/Header/Header";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import ContactUs from "./component/ContactUs/ContactUs";
import Review from "./component/Review/Review";
import "react-day-picker/dist/style.css";
import Login from "./component/Authentication/Login/Login";
import SignIn from "./component/Authentication/SignIn/SignIn";
import RequireAuth from "./component/Authentication/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/review"
          element={
            <RequireAuth>
              <Review />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
