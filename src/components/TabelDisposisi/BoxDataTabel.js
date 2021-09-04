// import React, { useState, Component } from 'react'
// import FormUserEdit from '../FormUserEdit'
// import ModalKonfirmDelete from '../ModalKonfirmDelete'
import DetailDisposisiD from '../DetailDisposisiD'
import AddFormDisposisi from '../AddFormDisposisi'
import React, { Component } from 'react'
import api from '../../service/api'

class BoxDataTabel extends Component{
    // const [formEdit, setFormEdit] = useState(false)
    constructor(props){
        super()
        this.state={
            // suratMasuk:'',
            jenisSurat:'',
            pencatatan:''

        }
    }
    render(){
    return (
    <>
    <div className="grid grid-cols-8 border-b-2 border-gray-400 p-2">
        <div className="flex flex-row ml-2 ">
                    <div className="">{this.props.No}.
                    </div>
                    
                </div>
                <div className="flex flex-row">
                    <div className="">{this.props.Disposisi.NOMOR_AGENDA}</div>
                </div>


        <div className="flex flex-row mt-1">
            <div className="">{this.props.Disposisi.TANGGAL_DISPOSISI}</div>
        </div>
        <div className="flex flex-row mt-1">
            <div className="truncate">{this.props.Disposisi.NOMOR_SURAT}</div>
            {/* <div className="">12893712</div> */}
        </div>
        <div className="flex flex-row mt-1">
            <div className="truncate">{this.props.Disposisi.INFORMASI}</div>
        </div>
        <div className="flex flex-row ml-4 mt-1">
            {/* <div className="">{this.props.Tujuan}</div> */}
            <div className="">{this.props.TujuanSurat}</div>
        </div>
        <div className="flex flex-row mt-1">
            {/* <div className="">{this.props.Keterangan}</div> */}
            <div className="truncate">{this.props.Disposisi.PROSES_SELANJUTNYA}</div>
        </div>
        <div className="">
            <DetailDisposisiD
            DisposisiDetail={this.props.Disposisi}
            IdUnitKerja={this.props.IdUnitKerja}
            UnitKerja={this.props.UnitKerja}
            SuratMasuk={this.props.SuratMasuk}
            />
            {/* NomorAgenda={this.props.NOMOR_AGENDA}
            /> */}
        </div>
    </div>
    </>
    )
    }
}
// const BoxDataTabel=({
//     No,
//     NomorAgenda,
//     Tanggal,
//     // NomorSurat = {item.NOMOR_SURAT}
//     Informasi,
//     Tujuan,
//     Keterangan,
//     NomorSurat,
//     TujuanSurat,
//     ProsesSelanjutnya,
//     UnitKerja,
//     Disposisi,
//     SuratMasuk,
//     IdJenisSurat,
//     IdUnitKerja,
//     JenisDisposisi,
//     Pencatatan,
// })=>{
//     const [formEdit,setFormEdit]=useState(false)
//     return(
//         <>
//         <div className="grid grid-cols-8 border-b-2 border-gray-400 p-2">
//             <div className="flex flex-row ml-2 ">
//                     <div className="">{No}. 
//                     {console.log('pencatatan: '+SuratMasuk)}</div>
//                 </div>
//                 <div className="flex flex-row">
//                     <div className="">{NomorAgenda}</div>
//                 </div>
//             <div className="flex flex-row mt-1">
//                 <div className="">{Tanggal}</div>
//             </div>
//             <div className="flex flex-row mt-1">
//                 <div className="truncate">{NomorSurat}</div>
//                 {/* <div className="">12893712</div> */}
//             </div>
//             <div className="flex flex-row mt-1">
//                 <div className="truncate">{Informasi}</div>
//             </div>
//             <div className="flex flex-row ml-4 mt-1">
//                 {/* <div className="">{this.props.Tujuan}</div> */}
//                 <div className="">{TujuanSurat}</div>
//             </div>
//             <div className="flex flex-row mt-1">
//                 {/* <div className="">{this.props.Keterangan}</div> */}
//                 <div className="truncate">{ProsesSelanjutnya}</div>
//             </div>        
//             <div className="">
//                 <DetailDisposisi 
//                 DisposisiDetail={Disposisi}
//                 TujuanSurat={TujuanSurat}
//                 // IdPencatatan={IdPencatatan}
//                 IdJenisSurat={IdJenisSurat}
//                 SuratMasuk={SuratMasuk}
//                 IdUnitKerja={IdUnitKerja}
//                 UnitKerja={UnitKerja}
//                 NomorSurat={NomorSurat}
//                 Pencatatan={Pencatatan}
//                 // console.log('pengguna:' + this.state.pengguna)
//                 />
    
//                 {/* NomorAgenda={this.props.NOMOR_AGENDA}
//                 /> */}
//             </div>
//         </div>
//         </>
//     )
// }
export default BoxDataTabel