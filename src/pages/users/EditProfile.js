import React from "react";
import Header from "../../components/Header";
import { ReactComponent as BackButton } from '../../assets/icons/ic_back_button.svg';
import { ReactComponent as EyeSlah } from "../../assets/icons/ic_eye_slash.svg";

function EditProfile() {
    return (
        <div id="bookingLayer">
            <Header />
            <div className="container mt-5">
                <div className="container" id="mergeNavDetail">
                    <div className="container mb-3">
                        <div className="d-flex">
                            <button className="btn mt-2">
                                <BackButton>
                                </BackButton>
                            </button>
                            <button className="btn mt-2"><b>Edit Profile</b></button>
                        </div>
                    </div>
                    <div className="container" id="detailNButton">
                        <div className="container" id="detailBooking">
                            <div className="container" id="formEditProfile">
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
                                            value={"18044577983564442"}
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
                                            value={"Romi Julianto"}
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
                                            value="option1"
                                            id="inlineRadio1"
                                            required
                                        />
                                        <label className="form-check-label" htmlFor="inlineRadio1" >
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
                                            value={"87527645373"}
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
                                            value={"romijuulianto@gmail.com"}
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
                                            value={"Lampung"}
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

                            </div>
                        </div>
                    </div>

                    <div className="container text-end mt-2 px-3 py-3" id="containerButtonBooking">
                        <button className="btn btn-primary">Simpan Perubahan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile