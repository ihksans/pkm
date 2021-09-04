import React, { Component } from 'react'

class BoxDataTabel extends Component {
  //deklarasi variabel
  constructor(props) {
    super()
    this.state = {
      jenisSurat: '',
    }
  }

  render() {
    return (
      <>
        <div className="grid grid-cols-9  border-b-2 border-gray-400 p-2">
          <div className="flex flex-row  col-span-2 ml-2 mt-1">
            <div className="grid grid-cols-3 p-2">
              <div className="flex flex-row ml-2 ">
                <div className="">{this.props.No}.</div>
              </div>

              <div className="   col-span-2 ">
                <div className="flex flex-row">
                  <div className="flex flex-row ">
                    {this.props.Surat.TGL_SURAT}
                  </div>
                  <div className="flex flex-row ml-4">
                    {this.props.Surat.TGL_DITERIMA}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row  items-center mt-1">
            <p className="truncate text-sm">{this.props.Surat.NOMOR_SURAT}</p>
          </div>
          <div className="flex flex-row  col-span-2  items-center mt-1">
            <p className="truncate text-sm">{this.props.Surat.PERIHAL}</p>
          </div>
          <div className=" flex  flex-row  items-center  mt-1 ">
            <p className="truncate text-sm"> {this.props.Surat.JENIS_SURAT}</p>
          </div>
          <div className="flex flex-row items-center ml-2 mt-1">
            {this.props.Surat.TUJUAN_SURAT}
          </div>
          <div className="   items-center ml-2 mt-1">
            <div className="font-bold">{this.props.Surat.NAMA_PENGIRIM}</div>
            
          </div>

          {this.props.Surat.KODE_UNIT_KERJA}
        </div>
      </>
    )
  }
}
export default BoxDataTabel
