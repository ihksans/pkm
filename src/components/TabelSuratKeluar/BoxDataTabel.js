import React, { Component } from 'react'
import api from '../../service/api'
import DetailSuratKeluar from '../DetailSuratKeluar'
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

              <div className="  flex flex-row items-center  col-span-2 ">
                <div className="flex flex-row">
                  <div className="flex flex-row ">
                    {this.props.Surat.TGL_SURAT}
                  </div>
                  <div className="flex flex-row ml-4">
                    {this.props.Surat.TGL_KIRIM}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row  items-center mt-1">
            {/* {this.props.Surat.TIPE_SURAT == 1 ? (
              <p className="truncate text-sm">
                Nomor {this.props.Surat.NOMOR_URUT} Tahun{' '}
                {this.props.Surat.TAHUN}{' '}
              </p>
            ) : null}
            {this.props.Surat.TIPE_SURAT == 2 ? (
              <p className="truncate text-sm">
                Nomor {this.props.Surat.NOMOR_URUT} Tahun{' '}
                {this.props.Surat.TAHUN}{' '}
              </p>
            ) : null}

            {this.props.Surat.TIPE_SURAT == 2 ? (
              <p className="truncate text-sm">
                {' '}
                {this.props.Surat.KODE_SIFAT_NASKAH}/
                {this.props.Surat.NOMOR_URUT}/
                {this.props.Surat.KODE_PERGURUAN_TINGGI}.
                {this.props.Surat.KODE_UNIT_KERJA}/{this.props.Surat.KODE_HAL}/
                {this.props.Surat.TAHUN}
              </p>
            ) : null}

            {this.props.Surat.TIPE_SURAT == 3 ? (
              <p className="truncate text-sm">
                {this.props.Surat.NOMOR_URUT}/
                {this.props.Surat.KODE_PERGURUAN_TINGGI}.
                {this.props.Surat.KODE_UNIT_KERJA}/{this.props.Surat.KODE_HAL}/{this.props.Surat.NOMOR_URUT}
                {this.props.Surat.TAHUN}
              </p>
            ) : null} */}
            <p className="truncate text-sm">{this.props.Surat.NOMOR_SURAT}</p>
          </div>
          <div className="flex flex-row  col-span-2  items-center mt-1">
            <p className="truncate text-sm">{this.props.Surat.PERIHAL}</p>
          </div>
          <div className=" flex  flex-row  items-center  mt-1 col-span-2">
            <p className="truncate text-sm"> {this.props.Surat.JENIS_SURAT}</p>
          </div>

          <div className=" flex  flex-row   items-center ml-2 mt-1">
            <p className="font-bold">{this.props.Surat.NAMA_PEMOHON}</p>
          </div>

          <DetailSuratKeluar
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
