import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ReactComponent as EyeSlah } from "../../assets/icons/ic_eye_slash.svg";
import { ReactComponent as Logo } from "../../assets/icons/ic_logo.svg";

const Register = () => {

  /* Logic Register */
  const [nik, setNIK] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birth_date, setBirthDay] = useState(Date(""));
  const [gender, setGender] = useState("Laki-laki");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/apps/auth/signup`, {
        nik,
        name,
        phone,
        email,
        password,
        birth_date,
        gender,
        address,
      });
      navigate("/booking");
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    }
  };


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
              <form onSubmit={registerUser}>
                <div className="mb-3">
                  <label htmlFor="inputNIK" className="form-label">
                    Nomor KTP (Kartu Tanda Penduduk)
                  </label>
                  <label id="inputNeeded">*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputNIK"
                    value={nik}
                    onChange={(e) => setNIK(e.target.value)}
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
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
                        +1
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        +80
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        +25
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Others
                      </a>
                    </li>
                  </ul>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Text input with dropdown button"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={birth_date}
                    onChange={(e) => setBirthDay(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
              </form>

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