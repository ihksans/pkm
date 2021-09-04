import React from 'react'

const HeaderTabel = () => {
  //contoh variabel
  const a = 'Bismillah'

  //contoh method
  const methodA = () => {}

  return (
    <>
      <div className="grid grid-cols-9 mt-4 border-b-2 border-gray-400 p-2 border-t-2">
        <div className="flex flex-row  col-span-2 ">
          <div className="grid grid-cols-3 p-2">
            <div className="flex flex-row ml-2  items-center">
              <div className="font-bold">No</div>
              <div>
                <button type="submit" className="ml-2 mt-2">
                  <img className="" src="assets/img/icon/Sort.png" />
                </button>
              </div>
            </div>

            <div className=" grid  justify-items-stretch font-bold  col-span-2 justify-center">
              <div className="font-bold justify-self-center">Tanggal</div>
              <div className="flex flex-row">
                <div className="flex flex-row ml-4">
                  <div className="font-bold">Surat </div>
                  <button type="submit" className="ml-2 mt-2">
                    <img className="" src="assets/img/icon/Sort.png" />
                  </button>
                </div>
                <div className="flex flex-row ml-4">
                  <div className="font-bold">Diterima </div>
                  <button type="submit" className="ml-2 mt-2">
                    <img className="" src="assets/img/icon/Sort.png" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row  items-center">
          <div className="font-bold">Nomor Surat</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>
        <div className="flex flex-row  col-span-2  items-center ">
          <div className="font-bold">Hal/Ringkasan Surat</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>
        <div className="flex flex-row  items-center col-span-2 ">
          <div className="font-bold ml-2">Jenis Surat</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>

        <div className="flex flex-row  items-center">
          <div className="font-bold">Pengirim</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>
        <div className="font-bold  self-center ">Detail</div>
      </div>
    </>
  )
}
export default HeaderTabel
