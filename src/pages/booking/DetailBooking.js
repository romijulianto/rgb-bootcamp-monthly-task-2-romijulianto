import React from "react";
import Header from "../../components/Navigation";
import { ReactComponent as BackButton } from "../../assets/icons/ic_back_button.svg";

function DetailBooking() {
  return (
    <div id="bookingLayer">
      <Header />
      <div className="container mt-5">
        <div className="container" id="mergeNavDetail">
          <div className="container mb-3">
            <div className="d-flex">
              <button className="btn mt-2">
                <BackButton />
              </button>
              <button className="btn mt-2">
                <b>Ringkasan Pesan</b>
              </button>
            </div>
          </div>
          <div className="container" id="detailNButton">
            <div className="container" id="detailBooking">
              <div className="container mt-3">
                <div className="row align-items-start">
                  <div className="container px-4" id="nameLabelMain">
                    Nama Klinik
                  </div>
                  <div className="col" id="labelBold">
                    <b id="devider">: &nbsp;&nbsp;&nbsp;</b>Klinik Rolling Glory
                    Beta Cisitu Indah IV Dago, Bandung
                  </div>
                </div>

                <div className="row align-items-start mt-2">
                  <div className="container px-4" id="nameLabelMain">
                    Nama Tes
                  </div>
                  <div className="col" id="labelBold">
                    <b id="devider">: &nbsp;&nbsp;&nbsp;</b>RT-PCR SARS-CoV-2 |
                    Same Day
                  </div>
                </div>

                <div className="row align-items-start mt-2 mb-3">
                  <div className="container px-4" id="nameLabelMain">
                    Harga
                  </div>
                  <div className="col" id="labelBold">
                    <b id="devider">: &nbsp;&nbsp;&nbsp;</b>Rp. 225.000,00
                  </div>
                </div>
              </div>

              <div className="container">
                <label className="container px-2">
                  <b>Data Pasien</b>
                </label>
                <div className="container" id="patientData">
                  <div className="container mt-3">
                    <div className="row align-items-start">
                      <div className="container px-4" id="nameLabel">
                        Nama
                      </div>
                      <div className="col" id="labelBold">
                        <b id="devider">: &nbsp;&nbsp;&nbsp;</b>Romi Julianto
                      </div>
                    </div>

                    <div className="row align-items-start mt-2">
                      <div className="container px-4" id="nameLabel">
                        NIK
                      </div>
                      <div className="col" id="labelBold">
                        <b id="devider">: &nbsp;&nbsp;&nbsp;</b>1804483397276669
                      </div>
                    </div>

                    <div className="row align-items-start mt-2">
                      <div className="container px-4" id="nameLabel">
                        Tanggal Lahir
                      </div>
                      <div className="col" id="labelBold">
                        <b id="devider">: &nbsp;&nbsp;&nbsp;</b>22 Juli 1998
                      </div>
                    </div>
                    <div className="row align-items-start mt-2 mb-3">
                      <div className="container px-4" id="nameLabel">
                        Jenis Kelamin
                      </div>
                      <div className="col" id="labelBold">
                        <b id="devider">: &nbsp;&nbsp;&nbsp;</b>Laki-laki
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="container mt-3 mb-4">
                <label className="container px-2">
                  <b>Jadwal Tes</b>
                </label>
                <div className="container" id="patientData">
                  <div className="container mt-3">
                    <div className="row align-items-start">
                      <div className="container px-4" id="nameLabel">
                        Tanggal Kunjungan
                      </div>
                      <div className="col" id="labelBold">
                        <b id="devider">: &nbsp;&nbsp;&nbsp;</b>Senin, 28 Maret
                        2022
                      </div>
                    </div>

                    <div className="row align-items-start mt-2 mb-3">
                      <div className="container px-4" id="nameLabel">
                        Jam
                      </div>
                      <div className="col" id="labelBold">
                        <b id="devider">: &nbsp;&nbsp;&nbsp;</b>08.00 WIB
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="container text-end mt-2 px-3 py-3"
          id="containerButtonBooking"
        >
          <button className="btn btn-primary">Pesan</button>
        </div>
      </div>
    </div>
  );
}

export default DetailBooking;
