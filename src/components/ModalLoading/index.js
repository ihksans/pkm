import React from 'react'
import api from '../../service/api'
import ReactLoading from 'react-loading'

export default function ModalLoading({ loading, title }) {
  return (
    <>
      {loading ? (
        <>
          <div className="justify-center items-center p-8 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto h-auto mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"> */}
                <div className=" items-start justify-center rounded-t">
                  <div className="flex justify-center">
                    <h3 className="text-md font-semibold mt-4 ml-4 mr-4 mb-2">
                      {title}
                    </h3>
                  </div>
                  <div className=" flex justify-center mb-4 ml-4 mr-4">
                    <div>
                      <ReactLoading
                        type="spin"
                        color="orange"
                        height={50}
                        width={50}
                      />
                    </div>
                  </div>

                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
