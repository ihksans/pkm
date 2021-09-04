import axios from 'axios'
import api from '../../service/api'
import React, {Component, component, useState} from 'react'
import {connect} from 'react-redux'
import Kalender from '../AddFormSurat/Kalender'

class AddFormDisposisi extends Component{
    constructor(props){
        super(props)
        this.state={

        }
        this.handleModal = this.handleModal.bind(this)
    }
    handleModal(){
        this.setState({
            showModal: !this.state.showModal,
        })
    }
    render(){
        return(
            <>
                {/* <button
                className="flex flex-row bg-primary p-2 mt-4"
                type="button"
                
                >
                    <div>
                        <img
                        className="h-6 align-middle"
                        src="assets/img/icon/Tambah.png"/>
                    </div>
                    <div className="font-bold ml-1 mr-2">Tambah Disposisi</div>
                </button> */}
                <button
                    className="flex flex-row bg-primary font-bold items-center ml-2 mt-1  rounded p-2 shadow-sm w-75%"
                    type="button"
                    onClick={this.handleModal}
                >
                    <div className="ml-1">
                        <img
                        className="h-4 align-middle"
                        src="assets/img/icon/Surat.png"
                        />
                    </div>
                    <div className="font-bold text-putih ml-1 mr-2">
                        Lihat Disposisi
                    </div>
                </button>
                {this.state.showModal?(
                    <>
                        {/* {this.state.showModal?(
                        <>
                            <button
                                className="flex flex-row bg-primary font-bold items-center ml-2 mt-1  rounded p-2 shadow-sm w-75%"
                                type="button"
                                onClick={this.handleModal}
                            >
                            <div className="ml-1">
                                <img
                                className="h-6 align-middle"
                                src="assets/img/icon/Tambah.png"
                                />
                            </div>
                            <div className="font-bold text-putih ml-1 mr-2">
                                Tambah Disposisi
                            </div>
                            </button>
                            </>
                        ): */}
                        (
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-6xl">
                                {/* content */}
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    {/* Header */}
                                    <div className="flex items-start justify-center ">
                                        <button
                                        className="p-1 ml-auto  border-2 float-right  leading-none  outline-none focus:outline-none"
                                        onClick={this.handleModal}
                                        >
                                            <img
                                                className="justify-center items-center"
                                                src="assets/img/icon/x.png"
                                            />
                                        </button>
                                    </div>
                                    <div className="flex flex-row items-start p-2 border-b ml-6 border-solid border-blueGray-200 rounded-t">
                                        <div>
                                            <img className="w-8" src="assets/img/icon/Surat.png" />
                                        </div>
                                            <div className="flex ">
                                            <h3 className="text-xl font-semibold  ">Tambah Disposisi</h3>
                                        </div>
                                    </div>

                                    {/* Body */}
                                    <div className="relative p-6 flex-auto">
                                        <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                                        {/* Form data */}

                                        <form
                                            className="mt-8"
                                            action="#"
                                            method="POST"
                                            onSubmit={this.onSubmit}
                                        >
                                            <div>
                                                <div className="">
                                                    <div className="flex flex-row grid grid-cols-2">
                                                        <div>
                                                            <div className="flex flex-row grid grid-cols-2">
                                                                <div
                                                                    htmlFor="nama"
                                                                    className="text-sm mb-2 font-bold flex flex-row"
                                                                >
                                                                    <div className="font-bold">Disposisi</div>
                                                                </div>
                                                                <div className="justify-end">
                                                                    <div> dasdas </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                        {/* )} */}
                    </>
                ):null}
            </>
        )
    }
}

// function mapStateToProps(state){
//     return state
// }

// export default connect(mapStateToProps.apply,{})(AddFormDisposisi)
export default AddFormDisposisi