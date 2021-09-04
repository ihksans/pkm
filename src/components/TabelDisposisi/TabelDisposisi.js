import React, { Component } from 'react'
import { connect } from 'react-redux'
import {} from '../../actions'
import HeaderTabel from './HeaderTabel'
import BoxDataTabel from './BoxDataTabel'

const TabelDisposisi = ({
  Disposisi,
  SuratMasuk,
  IdJenisSurat,
  IdUnitKerja,
  JenisDisposisi,
  Pencatatan,
}) => {
  return (
    <>
      <ul>
        <HeaderTabel />
        {Disposisi == null ? null : (
          <>
            {Disposisi.map((item, index) => {
              return (
                <li key={index}>
                  <BoxDataTabel
                    No={index + 1}
                    Disposisi={item}
                    IdJenisSurat={IdJenisSurat}
                    IdUnitKerja={IdUnitKerja}
                    SuratMasuk={SuratMasuk}
                  />
                </li>
              )
            })}
          </>
        )}
      </ul>
    </>
  )
}
// class TabelDisposisi extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       // suratMasuk : this.props.SuratMasuk,
//       // pencatatan : this.props.Pencatatan,
//       Disposisi : this.props.Disposisi,
//       search: '',
//     }
//     this.getDisposisi = this.getDisposisi.bind(this)
//   }
//   getDisposisi(e){
//     this.setState({
//       search: e.target.value.substr(0,20)
//     })
//   }
//   render(){
//     let DisposisiSM = this.props.Disposisi;
//     // .filter(
//     //   (disposisi)=>{
//     //     return disposisi
//     //   }
//     // )
//     return(
//       <>
//       <ul>
//         <HeaderTabel />
//         {DisposisiSM == null ? null : (
//           <>
//             {DisposisiSM.map((item, index) => {
//               return (
//                 <li key={index}>
//                   <BoxDataTabel
//                     No={index + 1}
//                     Disposisi={item}
//                     IdJenisSurat={IdJenisSurat}
//                     IdUnitKerja={IdUnitKerja}
//                   />
//                 </li>
//               )
//             })}
//           </>
//         )}
//       </ul>
//     </>
//     )
//   }
// }
export default TabelDisposisi
