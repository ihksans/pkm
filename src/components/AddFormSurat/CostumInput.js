import React, { useState } from 'react'

const CostumInput = ({ customInputTujuan, allUnitKerjaInfo }) => {
  // const [tujuanSurat, setTujuanSurat] = useState('')
  // const [handleCustom, setHandleCustom] = useState(false)
  // const [cusNamaUnit, setCusNamaUnit] = useState('')
  // const [cusKodeUnit, setCusKodeUnit] = useState('')
  // const [errTujuanSurat, setErrTujuanSurat] = useState(false)
  // let arrTujuan = [{ nama: null, kode: null }]
  // const Box = () => {
  //   return (
  //     <>
  //       <input
  //         type="text"
  //         name="tujuanSurat"
  //         placeholder="Masukkan nama unit"
  //         required
  //         className={
  //           'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 mb-3'
  //         }
  //         // onChange={(value) => setCusNamaUnit(value)}
  //       />
  //     </>
  //   )
  // }
  // const increaseBox = () => {
  //   arrTujuan.push({ nama: null, kode: null })
  //   console.log('arr:' + arrTujuan)
  //   console.log('leng arr:' + arrTujuan[arrTujuan.length])
  // }
  // return (
  //   <>
  //     <div className="flex flex-row grid grid-cols-2">
  //       <div htmlFor="nama" className="text-sm mb-2 font-bold flex flex-row ">
  //         <div className="mt-2">Tujuan Surat </div>
  //         <div className="text-danger ml-2 mt-2">*</div>
  //       </div>
  //       <div className="justify-end ">
  //         <div className="flex flex-row">
  //           {arrTujuan.map((item) => {
  //             return (
  //               <div key={item.kode}>
  //                 <Box />
  //                 <div>
  //                   <div
  //                     onClick={increaseBox}
  //                     className="mt-1 mr-2 ml-2 w-auto p-1 border-2 rounded-md  bg-primary justify-center items-center cursor-pointer hover:orenHover"
  //                   >
  //                     <p
  //                       className={
  //                         handleCustom
  //                           ? 'transform rotate-45 font-bold text-putih text-sm'
  //                           : 'font-bold text-putih text-sm'
  //                       }
  //                     >
  //                       +
  //                     </p>
  //                   </div>
  //                 </div>
  //               </div>
  //             )
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // )
  const [inputListCustom, setInputListCustom] = useState([
    { namaUnit: '', kodeUnit: '' },
  ])
  const [inputListSelect, setInputListSelect] = useState([
    { idUnit: '', err: false },
  ])

  // handle input change
  const handleInputChangeCustom = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListSelect]
    list[index][name] = value
    setInputListSelect(list)
  }
  const handleInputChangeSelect = (e, index) => {
    const { name, value } = e.target
    const list = [...inputListSelect]
    list[index][name] = value
    setInputListSelect(list)
  }
  // handle click event of the Remove button
  const handleRemoveClickCustom = (index) => {
    const list = [...inputListCustom]
    list.splice(index, 1)
    setInputListSelect(list)
  }
  const handleRemoveClickSelect = (index) => {
    const list = [...inputListSelect]
    list.splice(index, 1)
    setInputListSelect(list)
  }
  // handle click event of the Add button
  const handleAddClickCustom = () => {
    setInputListSelect([
      ...inputListSelect,
      { namaUnit: '', kodeUnit: '', err: false },
    ])
  }
  const handleAddClickSelect = () => {
    setInputListSelect([...inputListSelect, { idUnit: '', err: false }])
  }

  return (
    <div className="">
      {inputListSelect.map((x, i) => {
        return (
          <div className="box">
            {x.idUnit != null || x.idUnit != undefined ? (
              <select
                name="idUnit"
                placeholder="Masukan nama unit"
                value={x.idUnit}
                onChange={(e) => handleInputChangeCustom(e, i)}
                required
                id="tujuanSurat"
                className={
                  'focus:form-control   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                }
              >
                <option value="0">Pilih tujuan ...</option>
                {allUnitKerjaInfo.map((item) => {
                  return (
                    <option
                      key={item.ID_KODE_UNIT_KERJA}
                      value={item.ID_KODE_UNIT_KERJA}
                    >
                      {item.KODE_UNIT_KERJA}-{item.NAMA_UNIT_KERJA}
                    </option>
                  )
                })}
              </select>
            ) : (
              <>
                <input
                  name="namaUnit"
                  placeholder="Masukan nama unit"
                  value={x.namaUnit}
                  onChange={(e) => handleInputChangeCustom(e, i)}
                  required
                  id="tujuanSurat"
                  className={
                    'focus:form-control mb-1   focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                  }
                />
                <input
                  className="ml10"
                  name="kodeUnit"
                  placeholder="Masukan kode unit"
                  value={x.kodeUnit}
                  required
                  id="tujuanSurat"
                  className={
                    'focus:form-control  mb-1 focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none  w-56 text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-2 '
                  }
                  onChange={(e) => handleInputChangeCustom(e, i)}
                />
              </>
            )}

            <div className="btn-box">
              {inputListSelect.length !== 1 && (
                <button
                  className="mt-1 mr-2 ml-2 w-auto p-1 border-2 rounded-md  bg-primary justify-center items-center cursor-pointer hover:orenHover"
                  onClick={() => handleRemoveClickSelect(i)}
                >
                  <p className={'font-bold text-putih text-sm'}>Hapus</p>
                </button>
              )}
              {inputListSelect.length - 1 === i && (
                <button
                  onClick={handleAddClickSelect}
                  className=" mr-2 ml-2 w-auto p-1 border-2 rounded-md  bg-primary justify-center items-center cursor-pointer hover:orenHover"
                >
                  <p className={'font-bold text-putih text-sm'}>Tambah</p>
                </button>
              )}
              {inputListSelect.length - 1 === i && (
                <button
                  onClick={handleAddClickCustom}
                  className="mb-3 mr-2 ml-2 w-auto p-1 border-2 rounded-md  bg-primary justify-center items-center cursor-pointer hover:orenHover"
                >
                  <p className={'font-bold text-putih text-sm '}>
                    Tambah custom
                  </p>
                </button>
              )}
            </div>
          </div>
        )
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputListSelect)}</div> */}
    </div>
  )
}
export default CostumInput
