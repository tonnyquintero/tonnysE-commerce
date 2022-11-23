import React, {useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'
import SwitchComponent from './Switch'
import Header from './Header'
import Footer from './Footer'
import '../styles/components/Layout.css'

const Layout = ({ children }) => {

  const {darkMode} = useContext(ThemeContext)

  return (
    <div className={darkMode ? 'MainBlack' : 'MainLight'}>
      <SwitchComponent />
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout;