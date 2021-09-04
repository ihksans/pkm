import axios from 'axios'
import api from '../../service/api'
import React, { Component, useState } from 'react'
import { connect } from 'react-redux'
import Kalender from './Kalender'
import ModalLoading from '../ModalLoading'

class UpdateTL extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dir:[],
            idPengingat: this.props.idPengingat,
            idPengguna: this.props.idPengguna,
            idPencatatan: this.props.idPencatatan,
            status: 0,
            waktuPengingat: this.props.waktuPengingat,
            deskripsiPengingat: this.props.deskripsiPengingat,
            showModal: true,
            modalLoading: false,
            idPengingat: this.props.idPengingat,
        }
        this.onSave = this.onSave.bind(this)
        this.handleLoading = this.handleLoading.bind(this)
    }
    handleLoading() {
        this.setState({
          modalLoading: !this.state.modalLoading,
        })
    }
    async onSave(){
        if (this.state.showModal == true){
            this.handleLoading()
            api()
                .post('api/updatePengingat',{
                    ID_PENGINGAT: this.state.idPengingat,
                    ID_PENGGUNA: this.state.idPengguna,
                    ID_PENCATATAN: this.state.idPencatatan,
                    WAKTU_PENGINGAT: this.state.waktuPengingat,
                    DESKRIPSI: this.state.deskripsiPengingat,
                    STATUS: this.state.status,
                })
                .then((response) => {
                    this.handleLoading()
                    window.location.reload('/#/SuratMasuk')
                })
                .catch((err) => {
                    console.log(err)
                    this.handleLoading()
                })
        }
    }
    render(){
        return(
            <>
            {this.onSave()}
            <ModalLoading
                loading={this.state.modalLoading}
                title={'Sedang diproses sistem'}
            />
                </>
        )
    }
}

function mapStateToProps(state) {
    return state
  }
  export default connect(mapStateToProps, {})(UpdateTL)