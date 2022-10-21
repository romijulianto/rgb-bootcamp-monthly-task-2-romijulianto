import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/auth/SignIn.js";
import Register from "./pages/auth/Register.js";
import ShowAndHidePassword from "./components/ShowHidePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/password" element={<ShowAndHidePassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
