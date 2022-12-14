import React from "react"
import { useLocation } from "react-router-dom"
import { DetailVacancyMobileWrapp } from "./DetailVacancyMobile.style"

const DetailVacancyMobile = () => {
  const { state } = useLocation()
  let desc = {}
  
  if (state.menu === 'vacancy') {
    const { vacancy, idx } = state
    desc = vacancy[idx]
  } else if (state.menu === 'vacancyRec') {
    const { vacancyRec, idx } = state
    desc = vacancyRec[idx]
  }
  const [...requirement] = desc.Detail.Requirement.split("|")
  const [...jobdesk] = desc.Detail.Description.split("|")

  return (
    <DetailVacancyMobileWrapp>
      <div className="content-description">
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
      </div>
    </DetailVacancyMobileWrapp>
  )
}

export default DetailVacancyMobile