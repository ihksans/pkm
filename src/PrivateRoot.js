import React, { useState } from 'react'
import { Redirect, Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import Footer from './components/Footer'
import Header from './components/Header/HeaderComponent'
import Navbar from './components/Navbar'
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => {
    setSidebar(!sidebar)
    console.log('sidebar' + sidebar)
  }
  return (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get('cake') ? (
          <>
            <div className="flex flex-row">
              <Navbar bar={sidebar} show={() => showSidebar()} />
              <div className="w-full">
                <Header show={() => showSidebar()} />
                <Component {...props} />
                <Footer />
              </div>
            </div>
          </>
        ) : (
          <Redirect
            to={{
              pathname: '/Login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}
