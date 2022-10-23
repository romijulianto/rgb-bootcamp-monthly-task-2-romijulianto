import React from "react";

function SignIn() {
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Selamat Datang</h3>
          <div className="form-group mt-3">
            <label>Email/No Handphone</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="ex: romijuulianto@gmail.com"
            />
          </div>
          <div className="form-group mt-3">
            <label>Kata Sandi</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Masukan Kata Sandi"
            />
          </div>
          <div className="col col-inline">
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
            <div className="col">
              <p className="forgot-password text-right mt-2">
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
            Belum Daftar? <a href="#">Daftar Sekarang</a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
