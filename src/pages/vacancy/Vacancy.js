import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { getVacancy } from "../../api/Api"
import { VacancyWrapp } from "./Vacancy.style"
import ReactLoading from 'react-loading'

const Vacancy = () => {
  const [open, setOpen] = useState(true)
  const [vacancy, setVacancy] = useState()
  const [desc, setDesc] = useState()
  const navigate = useNavigate()
  const [requirement, setRequirement] = useState()
  const [jobdesk, setJobdesk] = useState()
  const [buttonMenu, setButtonMenu] = useState(true)
  const { state } = useLocation()
  const [vacancyRec, setVacancyRec] = useState()

  useEffect(() => {
    if (state === null) {
      getVacancy()
        .then(res => res.json())
        .then(res => setTimeout(() => {
          setVacancy(res.ListOfVacancies)
        }, 100))
    } else {
      setButtonMenu(false)
      setVacancyRec(state.res.ListOfVacancies)
    }
  }, [state])

  const getAllVacancy = () => {
    setButtonMenu(true)
    getVacancy()
      .then(res => res.json())
      .then(res => setTimeout(() => {
        setVacancy(res.ListOfVacancies)
      }, 100))
  }

  const openDesc = (idx) => {
    if (window.innerWidth > 1000) {
      setOpen(false)
      if (buttonMenu === true) {
        setDesc(vacancy[idx])
        req(vacancy[idx])
        job(vacancy[idx])
      } else {
        setDesc(vacancyRec[idx])
        req(vacancyRec[idx])
        job(vacancyRec[idx])
      }
    } else {
      if (buttonMenu === true) {
        navigate(`/lowongan/${idx}`, { state: { vacancy, idx, "menu":"vacancy" } })
      } else {
        navigate(`/lowongan/${idx}`, { state: { vacancyRec, idx, "menu":"vacancyRec" } })
      }
    }
  }

  const req = (desc) => {
    let requirement = desc.Detail.Requirement
    const [...req] = requirement.split("|")
    setRequirement(req)
  }

  const job = (desc) => {
    let jobdesk = desc.Detail.Description
    const [...req] = jobdesk.split("|")
    setJobdesk(req)
  }

  return (
    <VacancyWrapp>
      <div className="vacancy">
        <div className="content">
          <div className="vacancy-menu">
            <div className="menu">
              <button onClick={() => getAllVacancy()}>Semua</button>
              <button onClick={() => setButtonMenu(false)}>Rekomendasi</button>
            </div>
            {
              !buttonMenu
                ?
                <div className="list-vacancy">
                  {
                    vacancyRec
                      ? vacancyRec.map((res, index) => (
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
                      : <div>
                        {
                          vacancyRec !== undefined ? <p>maaf, belum ada lowongan yang sesuai dengan minat yang anda miliki</p> : <p>Anda Belum test, silakan melakukan test terlebih dahulu</p>
                        }
                      </div>
                  }
                </div>
                :
                <div className="list-vacancy">
                  <ul>
                    {
                      vacancy === undefined ?
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
            }

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
                    <h1 className="section-title">Deskripsi Pekerjaan</h1>
                    <p className="section-describe">{
                      jobdesk?.map(e => (
                        <li>{e}</li>
                      ))
                    }</p>
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