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
      <nav className="mt-4">
          <ReactPaginate
            previousLabel={"Prev"}
            previousLinkClassName={"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"}
            nextLabel={"Next"}
            nextLinkClassName={"-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"}
            pageCount={maxPage}
            containerClassName={"relative z-0 inline-flex shadow-sm -space-x-px"}
            pageClassName={"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}
            breakClassName={"relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700"}
            pageLinkClassName={"page-link"}
            breakLinkClassName={"page-link"}
            activeClassName={"-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"}
            onPageChange={(event) => this.handlePageClick(event)}
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
