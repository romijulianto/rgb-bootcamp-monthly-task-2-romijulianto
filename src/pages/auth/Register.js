import React from "react";
import { ReactComponent as EyeSlah } from "../../assets/icons/ic_eye_slash.svg";
import { ReactComponent as Logo } from "../../assets/icons/ic_logo.svg";

function Register() {
    return (
        /* Design Front End */
        <div className="container">
            <div class="container text-center mt-5">
                <Logo />
                <h3 class="col mt-4">Masukan Identitas</h3>
                <div class="col mt-3 mb-5" id="containerHeading">
                    Masukkan data diri kamu untuk pengguna baru
                </div>
            </div>
            <div className="container justify-content">
                <div className="w-100"></div>
                <div className="col">
                    <div className="p-3">
                        <div className="container">
                            <form>
                                <div class="mb-3">
                                    <label for="inputNIK" class="form-label">
                                        Nomor KTP (Kartu Tanda Penduduk)
                                    </label>
                                    <label id="inputNeeded">*</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputNIK"
                                        placeholder="ex: 18044577983564442"
                                        required
                                    ></input>
                                </div>
                                <div class="mb-3">
                                    <label for="inputName" class="form-label">
                                        Masukan Nama Lengkap
                                    </label>
                                    <label id="inputNeeded">*</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputName"
                                        aria-describedby="nameHelp"
                                        required
                                    ></input>
                                    <div id="nameHelp" class="form-text">
                                        Nama sesuai dengan Kartu Tanda Penduduk
                                    </div>
                                </div>
                                <label for="inputName" class="form-label">
                                    Jenis Kelamin
                                </label>
                                <label id="inputNeeded">*</label>
                                <div className="w-100"></div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                        required
                                    />
                                    <label class="form-check-label" for="inlineRadio1">
                                        Laki-laki
                                    </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                        required
                                    />
                                    <label class="form-check-label" for="inlineRadio2">
                                        Perempuan
                                    </label>
                                </div>
                                <div className="w-100"></div>
                                <label for="inputNumber" class="form-label mt-3">
                                    Nomor Handphone
                                </label>
                                <label id="inputNeeded">*</label>
                                <div class="input-group">
                                    <button
                                        class="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        +62
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Action
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Another action
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Something else here
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#">
                                                Separated link
                                            </a>
                                        </li>
                                    </ul>
                                    <input
                                        type="text"
                                        class="form-control"
                                        aria-label="Text input with dropdown button"
                                        placeholder="8xxx-xxxx-xxxx"
                                    />
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="inputEmail" class="form-label">
                                        Email
                                    </label>
                                    <label id="inputNeeded">*</label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="inputEmail"
                                        aria-describedby="emailHelp"
                                        placeholder="Masukan email anda"
                                        required
                                    ></input>
                                </div>
                                <div class="mb-3 mt-3">
                                    <label for="inputBirthday" class="form-label">
                                        Tanggal lahir
                                    </label>
                                    <label id="inputNeeded">*</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="inputBirthday"
                                        aria-describedby="birthdayHelp"
                                        placeholder="Pilih tanggal lahir"
                                        required
                                    ></input>
                                </div>

                                <div class="mb-3">
                                    <label for="inputAddress" class="form-label">
                                        Alamat Lengkap
                                    </label>
                                    <label id="inputNeeded">*</label>
                                    <textarea
                                        type="text"
                                        class="form-control"
                                        id="inputAddress"
                                        aria-describedby="addressHelp"
                                        required
                                    ></textarea>
                                    <div id="addressHelp" class="form-text">
                                        Alamat sesuai dengan kartu tanda penduduk
                                    </div>
                                </div>

                                <div class="row g-3">
                                    <div class="col">
                                        <label for="inputPassword" class="form-label">
                                            Kata Sandi
                                        </label>
                                        <label id="inputNeeded">*</label>
                                        <div className="input-group">
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="Buat kata sandi"
                                                aria-label="Buat kata sandi"
                                            />
                                            <button type="button" class="btn btn-secondary">
                                                <EyeSlah />
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <label for="inputPassword" class="form-label">
                                            Ulangi Kata Sandi
                                        </label>
                                        <label id="inputNeeded">*</label>
                                        <div className="input-group">
                                            <input
                                                type="password"
                                                name="password"
                                                class="form-control"
                                                placeholder="Password"
                                                required
                                            />
                                            <button type="button" class="btn btn-secondary">
                                                <EyeSlah />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <div className="col mt-4">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="termAndConditons"
                                    value="term-conditions"
                                    required
                                />
                                <label class="form-check-label px-2" for="termAndConditons">
                                    Saya setuju dengan
                                    <a href="#">
                                        <b> Peraturan Pengguna & Kebijakan Privasi</b>
                                    </a>
                                </label>
                            </div>

                            <div className="col mt-2">
                                <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="termAndConditons2"
                                    value="term-conditions"
                                    required
                                />
                                <label class="form-check-label px-2" for="termAndConditons2">
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
