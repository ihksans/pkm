import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import moment from 'moment'

const BoxDataReminder = ({ IdPengingat, IdPengguna, IdPencatatan, WaktuPengingat, Deskripsi, Status }) => {
  // const [formEdit, setFormEdit] = useState(false)
  const rn = moment(new Date())
  const b = Math.abs(rn.diff(WaktuPengingat, 'days'))+1
  console.log(b)
  return (
    <>
      <div className="grid grid-cols-3 gap-0 w-96 p-2 bg-white text-sm">
            <div className="flex items-start ml-1 font-semibold">
                Batas Waktu
            </div>
            <div className="col-span-2">
                : {WaktuPengingat}
            </div>
            <div className="flex items-start ml-1 font-semibold">
                Nomor Agenda
            </div>
            <div className="col-span-2">
                : {IdPencatatan}
            </div>
            <div className="flex items-start ml-1 font-semibold">
                Deskripsi
            </div>
            <div className="col-span-2">
                : {Deskripsi}
            </div>
            <div className="flex items-start ml-1 col-span-3 font-thin text-xs text-abu">
                {b} hari lagi
            </div>
        </div>
    </>
  )
}
export default BoxDataReminder