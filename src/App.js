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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./component/Dashboard/Dashboard";
import MyAppointment from "./component/Dashboard/MyAppointment";
import AllUser from "./component/Dashboard/AllUser";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<Review></Review>}></Route>
          <Route path="users" element={<AllUser></AllUser>}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignIn />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
