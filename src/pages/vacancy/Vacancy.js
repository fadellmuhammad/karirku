import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVacancy } from "../../api/Api"
import { VacancyWrapp } from "./Vacancy.style"

const Vacancy = () => {
  const [open, setOpen] = useState(true)
  const [vacancy, setVacancy] = useState()
  const [desc, setDesc] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    getVacancy().then(res => res.json()).then(res => setVacancy(res.ListOfVacancies))
  }, [])

  const openDesc = (idx) => {
    if (window.innerWidth > 1000) {
      setOpen(false)
      setDesc(vacancy[idx])
    } else {
      navigate(`/lowongan/${idx}`, { state: { vacancy, idx } })
    }
  }

  return (
    <VacancyWrapp>
      <div className="vacancy">
        <div className="content">
          <div className="list-vacancy">
            <ul>
              {
                vacancy?.map((res, index) => (
                  <li className="vacancy-item" onClick={() => openDesc(index)}>
                    <div className="logo-company">
                      <img src={res.ImageUrl} alt="" />
                    </div>
                    <div className="company-profile">
                      <h1>{res.Company}</h1>
                      <p>{res.Position}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="content-description">
            {
              open ? <h1 className="content-none">Silakan Pilih Magang</h1> :
                <div className="animation-show">
                  <div className="logo-company">
                    <img src={desc.ImageUrl} alt="" />
                  </div>
                  <div className="company-profile">
                    <h1 className="section-title">{desc.Company}</h1>
                    <p>{desc.Position}</p>
                  </div>
                  <div className="detail-activity">
                    <h1 className="section-title">Rincian Kegiatan</h1>
                    <p className="section-describe">{desc.Detail.Description}</p>
                  </div>
                  <div className="criteria">
                    <h1 className="section-title">Kriteria Peserta</h1>
                    <p className="section-describe">{desc.Detail.Requirement}</p>
                  </div>
                  <div className="link-register">
                    <h1 className="section-title">Link Pendaftaran</h1>
                    <p className="section-describe">{desc.Detail.Link}</p>
                  </div>
                </div>
            }
          </div>
        </div>
      </div>
    </VacancyWrapp>
  )
}

export default Vacancy