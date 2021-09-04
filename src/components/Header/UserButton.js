import React, { useState } from 'react'
import Logout from '../Logout'

const UserButton = () => {
  const [isClick, setClick] = useState(false)
  const Click = () => {
    setClick(!isClick)
  }
  return (
    <>
      <div className="flex flex-col">
        <button type="submit" className="h-10 my-2 mx-1 focus:outline-none" onClick={Click}>
          <img
            className="h-full"
            src="assets/img/icon/User-Rounded-2.png"
          />
        </button>
        {isClick ? (
          <>
            <button type="submit" className="focus:outline-none" onClick={Click}>
              <Logout />
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}
export default UserButton
