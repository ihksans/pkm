import React from 'react'

const HeaderTabel = () => {
  //contoh variabel
  const a = 'Bismillah'

  //contoh method
  const methodA = () => {}

  return (
    <>
      <div className="grid grid-cols-9 mt-4 border-b-2 border-gray-400 p-2">
        <div className="grid grid-cols-4 col-span-2">
          <div>
            <div className="flex flex-row ml-2">
              <div className="font-bold">#</div>
              <div>
                <button type="submit" className="ml-2 mt-2">
                  <img className="" src="assets/img/icon/Sort.png" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex col-span-3">
            <div className="flex flex-row">
              <div className="font-bold">Nama Pengguna</div>
              <div>
                <button type="submit" className="ml-2 mt-1.5">
                  <img className="" src="assets/img/icon/Sort-2.png" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row col-span-2">
          <div className="font-bold">Jabatan</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="font-bold">NIP</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>

        <div className="flex flex-row ">
          <div className="font-bold">Username</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>

        <div className="font-bold">Password</div>

        <div className="flex flex-row ">
          <div className="font-bold">Role</div>
          <div>
            <button type="submit" className="ml-2 mt-1.5">
              <img className="" src="assets/img/icon/Sort-2.png" />
            </button>
          </div>
        </div>
        <div className="font-bold ">Aksi</div>
      </div>
    </>
  )
}
export default HeaderTabel

