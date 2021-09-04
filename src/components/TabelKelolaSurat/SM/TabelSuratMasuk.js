import React, { Component } from 'react'
//ini buat ngekoneksi redux
import { connect } from 'react-redux'
import {} from '../../../actions'
import HeaderTabel from './HeaderTabel'
import BoxData from './BoxDataTabel'

const TabelSuratMasuk = ({ SuratMasuk, IdJenisSurat, IdUnitKerja }) => {
    return (
      <>
        <ul>
          <HeaderTabel/>
          {SuratMasuk.map((item, index) => {
            return (
              <li key={index}>
                <BoxData
                  No={index + 1}
                  IdJenisSurat={IdJenisSurat}
                  Surat={item}
                  IdUnitKerja={IdUnitKerja}
                />
              </li>
            )
          })}
        </ul>
      </>
    )
}
export default TabelSuratMasuk
