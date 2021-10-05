import React from 'react'
import api from '../../service/api'
import ModalLoading from '../ModalLoading'
export default function UnduhFile({ link, namaFile, title }) {
  const [showModal, setShowModal] = React.useState(false)
  const [showLoading, setLoading] = React.useState(false)

  const downloadFile = async () => {
    setLoading(true)
    let formData = new FormData()
    formData.append('namafile', namaFile)
    console.log('nama file:' + namaFile)
    await api()
      .post('/api/donwloadFile', formData)
      .then((response) => {
        setLoading(false)
        setShowModal(true)
      })
    setShowModal(true)
  }
  const cancelDownload = async () => {
    setLoading(true)

    await api()
      .delete('/api/cancelDownload/' + namaFile)
      .then((response) => {
        setLoading(false)
        setShowModal(false)
      })
    setShowModal(false)
  }
  return (
    <>
      <button
        className="bg-danger bg-brokenblack text-sm  font-bold text-putih self-center ml-2 mt-1  rounded p-1 shadow-sm w-auto"
        type="button"
        onClick={() => downloadFile()}
      >
        <div className="flex flex-row justify-center items-center">
          <div>
            <img className="w-4" src="assets/img/icon/Import.png" />
          </div>
          <div className="font-bold text-putih text-sm ml-1 mr-1">
            Unduh {title}
          </div>
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-2/5 mx-auto max-w-6xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}
                <div className=" items-start justify-center rounded-t">
                  <div className=" flex justify-center">
                    <img
                      className="justify-self-center w-20 mt-6"
                      src="assets/img/icon/Warning.png"
                    />
                  </div>
                  <div className="flex justify-center">
                    <h3 className="text-xl font-semibold mt-3">Konfirmasi</h3>
                  </div>
                  {/* </div> */}
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto justify-center">
                  <p className="my-4 text-blueGray-500 text-md leading-relaxed text-center">
                    File telah siap, simpan file?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b grid grid-cols-2">
                  <div className="flex items-center justify-center content-center">
                    <button
                      className="rounded bg-abu text-red-500 background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
                      type="button"
                      onClick={() => cancelDownload()}
                    >
                      Tidak
                    </button>
                  </div>
                  <div className="flex items-center justify-center content-center">
                    <a
                      href={'/' + link + '.pdf'}
                      download={link + '.pdf'}
                      type="submit"
                      className="rounded  bg-danger text-putih background-transparent font-bold w-36 px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all"
                      onClick={() => setShowModal(false)}
                    >
                      Ya
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showLoading ? (
        <ModalLoading loading={showLoading} title={'Singkronisasi data'} />
      ) : null}
    </>
  )
}
