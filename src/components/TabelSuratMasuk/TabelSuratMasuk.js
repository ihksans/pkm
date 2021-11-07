import React, { Component } from 'react'
//ini buat ngekoneksi redux
// import { connect } from "react-redux";
import {} from '../../actions'
import HeaderTabel from './HeaderTabel'
import BoxData from './BoxDataTabel'
import api from '../../service/api'
import ReactPaginate from 'react-paginate'
// const TabelSuratMasuk = ({ SuratMasuk, IdJenisSurat, IdUnitKerja }) => {
class TabelSuratMasuk extends Component {
  constructor(props) {
    super(props)
    this.state = {
      SuratMasuk: this.props.SuratMasuk,
      search: '',
      perPage: 10,
      maxPage: 2,
      currentPage: 1,
    }
    this.getSuratMasuk = this.getSuratMasuk.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }
  componentDidMount() {
    this.setState({
      maxPage: Math.round(this.state.SuratMasuk.length / this.state.perPage),
    })
  }
  async getSuratMasuk(e) {
    let key = this.state.search
    let str = ''
    str = key.replace(/\s\s+/g, '')

    if (str !== '' && str !== null && str !== ' ') {
      let formData = new FormData()
      formData.append('key', str)
      await api()
        .post('/api/searchSuratMasuk/', formData)
        .then((response) => {
          this.setState({
            SuratMasuk: response.data.content,
          })
        })
    } else {
      this.setState({
        SuratMasuk: this.props.SuratMasuk,
      })
    }
  }
  handleSearch(e) {
    this.setState({
      search: e.target.value,
    })
    if (
      e.target.value === '' &&
      e.target.value === null &&
      e.target.value === ' '
    ) {
      this.setState({
        SuratMasuk: this.props.SuratMasuk,
      })
    }
  }
  handlePageClick(event) {
    const currentPage = event.selected + 1
    this.setState({ currentPage })
  }
  render() {
    const { currentPage, maxPage, perPage, SuratMasuk } = this.state
    let items = SuratMasuk.slice(
      currentPage * perPage,
      (currentPage + 1) * perPage,
    )
    const dataSuratMasuk = items.map((item, index) => {
      return (
        <li key={index}>
          <BoxData
            No={index + 1 + (currentPage - 1) * perPage}
            IdJenisSurat={this.props.IdJenisSurat}
            Surat={item}
            IdUnitKerja={this.props.IdUnitKerja}
          />
        </li>
      )
    })

    return (
      <>
        <div className="flex absolute right-10 top-32 justify-end mt-5 w-1/2">
          <div className="flex w-1/2 border border-brokenblack shadow rounded-sm p-2 hover:shadow-md focus:outline-none">
            <input
              className="w-full focus:outline-none"
              type="text"
              placeholder="Cari Surat..."
              onChange={this.handleSearch}
            />
            <button onClick={this.getSuratMasuk}>
              <svg
                className="justify-end h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <ul>
          <HeaderTabel />
          {dataSuratMasuk == null ? null : dataSuratMasuk}
        </ul>
        <nav className="mt-4">
          <ReactPaginate
            previousLabel={'Prev'}
            previousLinkClassName={
              'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
            }
            nextLabel={'Next'}
            nextLinkClassName={
              '-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'
            }
            pageCount={maxPage}
            containerClassName={
              'relative z-0 inline-flex shadow-sm -space-x-px'
            }
            pageClassName={
              'bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            }
            breakClassName={
              'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'
            }
            pageLinkClassName={'page-link'}
            breakLinkClassName={'page-link'}
            activeClassName={
              '-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
            }
            onPageChange={(event) => this.handlePageClick(event)}
          />
        </nav>
      </>
    )
  }
}
export default TabelSuratMasuk
