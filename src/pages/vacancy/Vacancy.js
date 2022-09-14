import React, { useState } from "react"
import { image } from "../../assets/images"
import { VacancyWrapp } from "./Vacancy.style"

const Vacancy = () => {
  const [open, setOpen] = useState(true)

  return (
    <VacancyWrapp>
      <div className="vacancy">
        {/* <div className="container"> */}
          <div className="content">
            <div className="list-vacancy">
              <ul>
                <li className="vacancy-item" onClick={() => setOpen(false)}>
                  <div className="logo-company">
                    <img src={image.dummy_logo_company} alt="" />
                  </div>
                  <div className="company-profile">
                    <h1>Tokopaedi</h1>
                    <p>Front End Developer</p>
                  </div>
                </li>
                <li className="vacancy-item">
                  <div className="logo-company">
                    <img src={image.dummy_logo_company} alt="" />
                  </div>
                  <div className="company-profile">
                    <h1>Tokopaedi</h1>
                    <p>Front End Developer</p>
                  </div>
                </li>
                <li className="vacancy-item">
                  <div className="logo-company">
                    <img src={image.dummy_logo_company} alt="" />
                  </div>
                  <div className="company-profile">
                    <h1>Tokopaedi</h1>
                    <p>Front End Developer</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="content-description">

              {
                open ? <h1 className="content-none">Silakan Pilih Magang</h1> :
                  <div className="animation-show">
                    <div className="logo-company">
                      <img src={image.dummy_logo_company} alt="" />
                    </div>
                    <div className="company-profile">
                      <h1 className="section-title">Tokopaedi</h1>
                      <p>Front End developer</p>
                    </div>
                    <div className="detail-activity">
                      <h1 className="section-title">Rincian Kegiatan</h1>
                      <p className="section-describe">Awal keberhasilan proyek pengembangan software adalah keberhasilan dalam mendefinisikan kebutuhan. Kegagalan dalam memahami kebutuhan sistem adalah kesalahan fatal dalam proyek pengembangan software. Kesalahan ini mengakibatkan kesalahan pada pengembangan tahap selanjutnya dan dipastikan sistem yang dikembangkan tidak menjawab kebutuhan. Oleh karena itulah tahap analisis requirement merupakan tahap penting dalam proses pengembangan. Karena software yang berkualitas adalah software yang sesuai dengan kebutuhan dan ada keuntungan bagi pengguna</p>
                    </div>
                    <div className="criteria">
                      <h1 className="section-title">Kriteria Peserta</h1>
                      <p className="section-describe">Jurusan: Teknik Informatika/Sistem Informasi/Ilmu Komputer/Manajemen Informatika/Teknik Komputer/Teknologi Informasi/Software Engineering/Rekayasa Perangkat Lunak
                        Jenjang: D3 / D4 / S1
                        Semester: Semester 5 s.d 7 (D4/S1), Semester 4 s.d 6 (D3)</p>
                    </div>
                    <div className="link-register">
                      <h1 className="section-title">Link Pendaftaran</h1>
                      <p className="section-describe">www.google.com</p>
                    </div>
                  </div>
              }
            </div>
          </div>
        {/* </div> */}
      </div>
    </VacancyWrapp>
  )
}

export default Vacancy