import React, { Component, useState } from "react";
import { connect } from "react-redux";
import {} from "../../actions";
import HeaderTabel from "./HeaderTabel";
import BoxDataTabel from "./BoxDataTabel";
import ReactPaginate from "react-paginate";

const TabelDisposisi = ({
  Disposisi,
  SuratMasuk,
  IdJenisSurat,
  IdUnitKerja,
  JenisDisposisi,
  Pencatatan,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const maxPage = 0;
  const handlePageClick = (event) => {
    const currentPage = event.selected + 1;
    setCurrentPage({ currentPage });
  };

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
              );
            })}
          </>
        )}
      </ul>
      <nav>
        <ReactPaginate
          previousLabel={"Prev"}
          previousLinkClassName={"page-link"}
          nextLabel={"Next"}
          nextLinkClassName={"page-link"}
          pageCount={maxPage}
          containerClassName={"pagination justify-content-end mt-4"}
          pageClassName={"page-item"}
          breakClassName={"page-item"}
          pageLinkClassName={"page-link"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
          onPageChange={(event) => handlePageClick(event)}
        />
      </nav>
    </>
  );
};
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
export default TabelDisposisi;
