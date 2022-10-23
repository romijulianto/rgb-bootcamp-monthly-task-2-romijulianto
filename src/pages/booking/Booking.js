import React from "react";
import Header from "../../components/Navigation";
import { ReactComponent as BackButton } from "../../assets/icons/ic_back_button.svg";

function Booking() {
  return (
    <div id="bookingLayer">
      <Header />
      <div className="container mt-5">
        <div className="container" id="formBooking">
          <div className="d-flex">
            <button className="btn mt-2">
              <BackButton />
            </button>
            <button className="btn mt-2">
              <b>Booking Tes Covid</b>
            </button>
          </div>
          <div className="container">
            <form>
              <label for="inputClinic" className="form-label">
                Pilih Klinik
              </label>
              <label id="inputNeeded">*</label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Pilih Klinik Anda</option>
                <option value="1">Klinik Sukajadi</option>
                <option value="2">Klinik Margonda</option>
                <option value="3">Klinik Karang</option>
              </select>

              <label for="inputTes" className="form-label">
                Pilih Produk tes Covid
              </label>
              <label id="inputNeeded">*</label>
              <select
                className="form-select mb-3"
                aria-label="Default select example"
              >
                <option selected>Tentukan produk tes</option>
                <option value="1">Swab Antigen</option>
                <option value="2">Swab PCR</option>
                <option value="3">Genose</option>
              </select>
              <div className="row g-3">
                <div className="col">
                  <label for="inputDate" className="form-label">
                    Pilih Tanggal
                  </label>
                  <label id="inputNeeded">*</label>
                  <div className="input-group">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Buat kata sandi"
                      aria-label="Buat kata sandi"
                    />
                  </div>
                </div>
                <div className="col">
                  <label for="inputTime" className="form-label">
                    Pilih Jam
                  </label>
                  <label id="inputNeeded">*</label>
                  <div className="input-group">
                    <input
                      type="time"
                      name="time"
                      className="form-control"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="col mt-3">
                <label for="inputTes" className="form-label">
                  Kuota <label id="textSecondary">(Display Only)</label>
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Kuota Kunjungan</option>
                  <option value="1">100</option>
                  <option value="2">200</option>
                  <option value="3">300</option>
                </select>
              </div>
            </form>
          </div>
        </div>

        <div
          className="container text-end mt-2 px-3 py-3"
          id="containerButtonBooking"
        >
          <button className="btn btn-primary">Buat Pesanan</button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
