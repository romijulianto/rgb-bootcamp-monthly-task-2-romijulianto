import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn.js";
import Register from "./pages/auth/Register.js";
import ShowAndHidePassword from "./components/ShowHidePassword";
import Booking from "./pages/booking/Booking";
import DetailBooking from "./pages/booking/DetailBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<ShowAndHidePassword />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/detail-booking" element={<DetailBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
