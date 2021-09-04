import React, { Component } from 'react'
import api from '../../service/api'
import DetailSuratMasuk from '../DetailSuratMasuk'
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

              <div className=" flex flex-row items-center  col-span-2 ">
                <div className="flex flex-row ">
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
          <div className=" flex  flex-row  items-center  mt-1 col-span-2">
            <p className="truncate text-sm"> {this.props.Surat.JENIS_SURAT}</p>
          </div>

          <div className="   items-center ml-2 mt-1">
            <div className="font-bold">{this.props.Surat.NAMA_PENGIRIM}</div>
            <div>{this.props.Surat.KODE_UNIT_KERJA}</div>
            <div>{this.props.Surat.NAMA_UNIT_KERJA}</div>
          </div>

          <DetailSuratMasuk
            namaFile={this.props.Surat.NAMA_FILE_SURAT}
            SuratDetail={this.props.Surat}
            namaLampiran={this.props.Surat.NAMA_FILE_LAMPIRAN}
            jenisSurat={this.props.jenisSurat}
            IdUnitKerja={this.props.IdUnitKerja}
            Disposisi={this.props.Disposisi}
          />
        </div>
      </>
    )
  }
}
export default BoxDataTabel
