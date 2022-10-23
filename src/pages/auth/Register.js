import React from "react";
import { ReactComponent as EyeSlah } from "../../assets/icons/ic_eye_slash.svg";
import { ReactComponent as Logo } from "../../assets/icons/ic_logo.svg";

function Register() {
  return (
    /* Design Front End */
    <div className="container">
      <div className="container text-center mt-5">
        <Logo />
        <h3 className="col mt-4">Masukan Identitas</h3>
        <div className="col mt-3 mb-5" id="containerHeading">
          Masukkan data diri kamu untuk pengguna baru
        </div>
      </div>
      <div className="container justify-content">
        <div className="w-100"></div>
        <div className="col">
          <div className="p-3">
            <div className="container">
              <form>
                <div className="mb-3">
                  <label htmlFor="inputNIK" className="form-label">
                    Nomor KTP (Kartu Tanda Penduduk)
                  </label>
                  <label id="inputNeeded">*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNIK"
                    placeholder="ex: 18044577983564442"
                    required
                  ></input>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Masukan Nama Lengkap
                  </label>
                  <label id="inputNeeded">*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    aria-describedby="nameHelp"
                    required
                  ></input>
                  <div id="nameHelp" className="form-text">
                    Nama sesuai dengan Kartu Tanda Penduduk
                  </div>
                </div>
                <label htmlFor="inputName" className="form-label">
                  Jenis Kelamin
                </label>
                <label id="inputNeeded">*</label>
                <div className="w-100"></div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Laki-laki
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                    required
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Perempuan
                  </label>
                </div>
                <div className="w-100"></div>
                <label htmlFor="inputNumber" className="form-label mt-3">
                  Nomor Handphone
                </label>
                <label id="inputNeeded">*</label>
                <div className="input-group">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    +62
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Separated link
                      </a>
                    </li>
                  </ul>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    placeholder="8xxx-xxxx-xxxx"
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <label id="inputNeeded">*</label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Masukan email anda"
                    required
                  ></input>
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="inputBirthday" className="form-label">
                    Tanggal lahir
                  </label>
                  <label id="inputNeeded">*</label>
                  <input
                    type="date"
                    className="form-control"
                    id="inputBirthday"
                    aria-describedby="birthdayHelp"
                    placeholder="Pilih tanggal lahir"
                    required
                  ></input>
                </div>

                <div className="mb-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Alamat Lengkap
                  </label>
                  <label id="inputNeeded">*</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    aria-describedby="addressHelp"
                    required
                  ></textarea>
                  <div id="addressHelp" className="form-text">
                    Alamat sesuai dengan kartu tanda penduduk
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col">
                    <label htmlFor="inputPassword" className="form-label">
                      Kata Sandi
                    </label>
                    <label id="inputNeeded">*</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Buat kata sandi"
                        aria-label="Buat kata sandi"
                      />
                      <button type="button" className="btn btn-secondary">
                        <EyeSlah />
                      </button>
                    </div>
                  </div>
                  <div className="col">
                    <label htmlFor="inputPassword" className="form-label">
                      Ulangi Kata Sandi
                    </label>
                    <label id="inputNeeded">*</label>
                    <div className="input-group">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                      />
                      <button type="button" className="btn btn-secondary">
                        <EyeSlah />
                      </button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="col mt-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termAndConditons"
                  value="term-conditions"
                  required
                />
                <label className="form-check-label px-2" htmlFor="termAndConditons">
                  Saya setuju dengan
                  <a href="#">
                    <b> Peraturan Pengguna & Kebijakan Privasi</b>
                  </a>
                </label>
              </div>

              <div className="col mt-2">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="termAndConditons2"
                  value="term-conditions"
                  required
                />
                <label
                  className="form-check-label px-2"
                  htmlFor="termAndConditons2"
                >
                  Saya setuju dengan
                  <a href="#">
                    <b> Syarat dan Pengguna</b>
                  </a>
                </label>
              </div>

              <div
                className="container text-center mt-5"
                id="submitButtonContainer"
              >
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn btn-primary">
                    Buat Akun
                  </button>
                </div>
                <label className="mt-4" id="toSignIn">
                  Sudah Punya Akun?{" "}
                  <a href="#">
                    <b>Masuk</b>
                  </a>
                </label>
              </div>

              <div className="container text-center mt-4">
                <label id="footer">Copyright © Rolling Glory Beta 2022</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
