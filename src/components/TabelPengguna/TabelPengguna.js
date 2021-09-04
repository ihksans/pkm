import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import HeaderTabel from './HeaderTabel'
import BoxData from './BoxDataTabel'
//Ini buat dependecies/library nya
//import + "nama variabel" + from + "nama librarynya";

const TabelPengguna = ({ Pengguna }) => {
  return (
    <>
      <ul>
        <HeaderTabel />
        {Pengguna.map((item, index) => {
          return (
            <li key={index}>
              <BoxData
                IdPengguna={item.ID_PENGGUNA}
                No={index + 1}
                NamaPengguna={item.NAMA}
                Username={item.USERNAME}
                Role={item.ROLE}
                Id={item.ID_PENGGUNA}
                Jabatan={item.JABATAN}
                NIP={item.NIP}
              />
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default TabelPengguna
