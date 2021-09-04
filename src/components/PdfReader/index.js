// import React from 'react'

// import { PDFReader } from 'reactjs-pdf-reader'
// const PdfReader = () => {
//   return (
//     <div style={{ overflow: 'scroll', height: 600 }}>
//       <PDFReader
//         url={{
//           url:
//             'https://firebasestorage.googleapis.com/v0/b/petanas-1efe5.appspot.com/o/Document%2F2.pdf?alt=media&token=c49ce22f-09c1-473d-b465-00a2e9269a60',
//           httpHeaders: {
//             'Access-Control-Allow-Origin': '*',
//             'Access-Control-Allow-Headers':
//               'Origin, X-Requested-With, Content-Type, Accept, Authorization',
//             'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
//           },
//         }}
//         showAllPage={true}
//         isShowFooter={false}
//         isShowHeader={true}
//       />
//     </div>
//   )
// }

//export default PdfReader

import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import api from '../../service/api'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import ReactLoading from 'react-loading'
import UnduhFile from './UnduhFile'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const PdfReader = ({ urlFile, namaFile, namaLampiran }) => {
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)
  const [downloadModal, setDownloadModal] = useState(false)

  const [url, setUrl] = useState(null)

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setPageNumber(1)
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset)
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(1)
  }
  // const getData = () => {
  //   let formData = new FormData()
  //   formData.append('namafile', '17893-1-33923-1-10-20160115')

  //   api()
  //     .post('/api/getSurat', formData)
  //     .then((response) => setUrl(response))
  //   console.log('url file:' + url)
  // }
  const downloadFile = async () => {
    let formData = new FormData()
    formData.append('namafile', namaFile)
    console.log('nama file:' + namaFile)
    await api()
      .post('/api/donwloadFile', formData)
      .then((response) => {
        console.log(response.data)
        setDownloadModal(true)
        console.log('modal:' + downloadModal)
      })
  }
  const Loading = () => {
    return (
      <div>
        <ReactLoading type="spin" color="white" height={150} width={150} />
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row justify-center">
        <Document
          file={urlFile}
          // file={'/data_files.pdf'}
          onLoadSuccess={onDocumentLoadSuccess}
          noData={Loading}
          // width="350"
          className="pdf-container"
        >
          <div className="flex flex-row justify-center mt-3">
            <Page className="shadow-lg" height={600} pageNumber={pageNumber} />
          </div>

          <div className="flex flex-row grid grid-cols-5 justify-center transform -translate-y-12 w-auto">
            <div className="flex justify-center col-start-2 col-span-3 bg-bb rounded p-1 shadow-sm text-sm text-putih">
              Halaman {pageNumber || (numPages ? 1 : '--')} / {numPages || '--'}
              <button
                type="button"
                disabled={pageNumber <= 1}
                onClick={previousPage}
                className="text-sm font-bold text-putih self-center ml-7 rounded p-1 shadow-sm w-auto hover:opacity-80 focus:outline-none"
              >
                <div>
                  <img className="w-4" src="assets/img/icon/Previous.png" />
                </div>
              </button>
              <button
                type="button"
                disabled={pageNumber >= numPages}
                onClick={nextPage}
                className="text-sm font-bold text-putih self-center rounded p-1 shadow-sm w-auto hover:opacity-80 focus:outline-none"
              >
                <div>
                  <img className="w-4" src="assets/img/icon/Next.png" />
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-center transform -translate-y-5">
            <UnduhFile link={namaFile} namaFile={namaFile} title={'Surat'} />
            {namaLampiran != null ? (
              <UnduhFile
                link={namaLampiran}
                namaFile={namaLampiran}
                title={'Lampiran'}
              />
            ) : null}

            <a
              href={urlFile}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary flex flex-row text-sm font-bold text-putih self-center ml-2 mt-1 rounded p-1 shadow-sm w-auto"
            >
              {/* <img className="w-4 ml-1 mr-1" src="assets/img/icon/search.png" /> */}
              <img src="https://img.icons8.com/material-outlined/24/ffffff/file-preview.png" className="w-4"/>
              <p className="px-0.5">Lihat Lebih Detail</p>
            </a>
          </div>
        </Document>
      </div>
    </div>
  )
}

export default PdfReader
