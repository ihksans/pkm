//this component for header
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DataUser from './DataUser'
import UserButton from './UserButton'
import ReminderButton from './ReminderButton'
// class HeaderComponent extends Component {
//   constructor(props) {
//     super()
//     this.state = {}
//   }
//   render() {
//     return (

//     )
//   }
// }

// function mapStateToProps(state) {
//   return state
// }

// export default connect(mapStateToProps, null)(HeaderComponent)

const HeaderComponent = ({ show, role }) => {
  const on = () => {
    show()
  }
  const handleSubmit = () => {
    show()
  }
  return (
    <>
      <>
        <div className="grid grid-cols-2 gap-4 h-17 border shadow-3xl">
          <div className="flex items-center p-1 ml-1.5 mt-1.5">
            <Link to="#">
              <button type="submit" className="w-full hover:shadow-md focus:outline-none" onClick={handleSubmit}>
                <img
                  className="object-fill h-10"
                  src="assets/img/icon/Menu.png"
                />
              </button>
            </Link>
            <div className="flex items-center p-1 mb-1.5 ml-2 text-2xl font-bold pointer-events-none">
              PETANAS
            </div>
          </div>
          <div className="flex justify-end border-1 border-gray-400">
            <div className="flex justify-items-center p-1.5">
              <DataUser />
            </div>
            <UserButton />

            <ReminderButton />
            <button type="submit" className="justify-items-center h-9 my-2.5 mx-2 focus:outline-none">
              <img className="h-full" src="assets/img/icon/Bell.png" />
            </button>
          </div>
        </div>
      </>
    </>
  )
}
export default HeaderComponent
