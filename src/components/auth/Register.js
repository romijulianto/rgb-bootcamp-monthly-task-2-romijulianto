import React from "react";

function Register() {
    return (
        /* Design Front End */
        <div className="container">
            <div className="container text-center">
                <div className="row gx-5 gy-5">
                    <div className="col">
                        <div className="p-3">
                            <div className="container">

                            </div>
                        </div>
                    </div>
                    <div className="w-100"></div>
                    <div className="col">
                        <div className="p-3">
                            <div className="container">
                                <form>
                                    <div class="mb-3">
                                        <label for="inputNIK" class="form-label">Nomor KTP (Kartu Tanda Penduduk)</label>
                                        <input type="text" class="form-control" id="inputNIK" placeholder="ex: 18044577983564442"></input>
                                    </div>
                                    <div class="mb-3">
                                        <label for="inputName" class="form-label">Masukan Nama Lengkap</label>
                                        <input type="text" class="form-control" id="inputName" aria-describedby="nameHelp"></input>
                                        <div id="nameHelp" class="form-text">Nama sesuai dengan Kartu Tanda Penduduk</div>
                                    </div>
                                    <label for="inputName" class="form-label">Jenis Kelamin</label>
                                    <div className="w-100"></div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                        <label class="form-check-label" for="inlineRadio1">Laki-laki</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                                        <label class="form-check-label" for="inlineRadio2">Perempuan</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
