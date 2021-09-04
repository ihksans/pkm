import React from 'react'

const HeaderTabel = () => {
    return(
        <>
            <div className="grid grid-cols-8 mt-4 border-b-2 border-gray-400 p-2 border-t-2">
                {/* <div className="flex flex-row col-1 ml-2 items-center">
                    <div className="font-bold">#</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row ml-2 mt-1 items-center">
                    <div className="font-bold">Nomor Agenda</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div> */}
                <div className="flex flex-row  col-span-2 ">
                    <div className="grid grid-cols-2">
                        <div className="flex flex-row ml-4">
                            <div className="font-bold">No </div>
                            <button type="submit" className="ml-2 mt-2">
                                <img className="" src="assets/img/icon/Sort.png" />
                            </button>
                        </div>
                        <div className="flex flex-row">
                            <div className="font-bold">Nomor Agenda </div>
                            <button type="submit" className="ml-2 mt-2">
                                <img className="" src="assets/img/icon/Sort.png" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="font-bold">Tanggal</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center ">
                    <div className="font-bold">Nomor Surat</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center ">
                    <div className="font-bold">Informasi</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="font-bold">Tujuan</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="font-bold">Keterangan</div>
                    <div>
                        <button type="submit" className="ml-2 mt-1.5">
                            <img className="" src="assets/img/icon/Sort-2.png" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <div className="font-bold">Aksi</div>
                </div>
            </div>
        </>
    )
}
export default HeaderTabel