import React from "react"

function Auth() {
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
          {/* <div className="col-auto">
          <div className="mb-3 form-check mt-2">
            <input
              type="checkbox"
              className="form-check-input" id="showPassword"></input>
            <label className="form-check-label" for="showPassword">Lihat Password</label>
            </div>
          </div> */}
          <div className="col-auto">
            <p className="forgot-password text-right mt-2"><a href="#">Lupa Password</a>
              </p>
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
  )
}

export default Auth