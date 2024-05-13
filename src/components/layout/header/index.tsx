import React from 'react'
import s from './Header.module.scss'
import logo from './../../../assets/images/logo.png'
import SearchComponent from './../../../components/search'

const Header = () => {
  return (
    <div className={s.header}>
     <div className={s.header__logo}>
        <img className={s.header__logo__img} src={logo} alt="Find Movies" />
        <h2>MoviesDB</h2>
     </div>
     <SearchComponent />
    </div>
  )
}

export default Header
