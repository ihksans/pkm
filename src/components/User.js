import React from 'react'
import ReactDOM from 'react-dom'
import Nama from './ComponentExample'
function User() {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card text-center">
              <div className="card-header">
                <h2> Hallo Gais....</h2>
              </div>

              <div className="card-body">Ini Web inisiasi KoTa 203</div>
              <Nama></Nama>
              <div className="card-body">Bismillah Yu Bisa Yu....</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default User

// DOM element
if (document.getElementById('user')) {
  ReactDOM.render(<User />, document.getElementById('user'))
}
