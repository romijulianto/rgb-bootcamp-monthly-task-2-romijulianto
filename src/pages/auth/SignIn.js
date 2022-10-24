import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  /* Logic Sign in */
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/apps/auth/login`, {
        email: email,
        password: password,
      });
      navigate("/booking");
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.message);
        /* for detail error */
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  }

  /* Style Sign in */
  return (
    <div className="Auth-form-container">
      <form onSubmit={Auth} className="Auth-form">
        <p>{message}</p>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Selamat Datang</h3>
          <div className="form-group mt-3">
            <label>Email/No Handphone</label>
            <input
              type="email"
              className="form-control mt-1"
              value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="ex: romijuulianto@gmail.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Kata Sandi</label>
            <input
              type="password"
              className="form-control mt-1"
              value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukan Kata Sandi"
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="form-check mt-2 form-check-inline">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                ></input>
                <label className="form-check-label" htmlFor="showPassword">
                  Lihat Password
                </label>
              </div>
            </div>
            <div className="col text-end">
              <p className="text-right mt-2">
                <a href="#">Lupa Password</a>
              </p>
            </div>
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Masuk
            </button>
          </div>
          <p className="forgot-password text-center mt-4">
            Belum Daftar? <a href="http://localhost:4000/register">Daftar Sekarang</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
