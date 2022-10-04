import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getVacancy } from "../../api/Api"
import { VacancyWrapp } from "./Vacancy.style"
import ReactLoading from 'react-loading'

const Vacancy = () => {
  const [open, setOpen] = useState(true)
  const [vacancy, setVacancy] = useState()
  const [desc, setDesc] = useState()
  const navigate = useNavigate()
  const [requirement, setRequirement] = useState()

  useEffect(() => {
    getVacancy()
    .then(res => res.json())
    .then(res => setTimeout(() => {
      setVacancy(res.ListOfVacancies)
    }, 500))
  }, [])

  const openDesc = (idx) => {
    if (window.innerWidth > 1000) {
      setOpen(false)
      setDesc(vacancy[idx])
      req(vacancy[idx])
    } else {
      navigate(`/lowongan/${idx}`, { state: { vacancy, idx } })
    }
  }

  const req = (desc) => {
    let requirement = desc.Detail.Requirement
    const [...req] = requirement.split("|")
    setRequirement(req)
  }

  return (
    <VacancyWrapp>
      <div className="vacancy">
        <div className="content">
          <div className="list-vacancy">
            <ul>
              {
                !vacancy ?
                  <div className="spin-load">
                    <ReactLoading type="bubbles" color="#424242" height={70} width={70} />
                  </div> : vacancy.map((res, index) => (
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
                    <p className="section-describe">{
                      requirement?.map(e => (
                        <li>{e}</li>
                      ))
                    }</p>
                  </div>
                  <div className="link-register">
                    <button className="section-describe"><a href={desc.Detail.Link} target="_blank" rel="noopener noreferrer">Link Pendaftaran</a></button>
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