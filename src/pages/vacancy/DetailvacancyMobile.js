import React from "react"
import { useLocation } from "react-router-dom"

const DetailVacancyMobile = () => {
  const { state } = useLocation()
  const { vacancy, idx } = state
  const desc = vacancy[idx]

  return (
    <div className="content-description"> 
      {
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
  )
}

export default DetailVacancyMobile