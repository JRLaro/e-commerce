import React from 'react'
import '../styles.scss'
import Logo from './../../assets/LaLaLogo-01.png'

const Header = (props) => {
    return (
        <header className='header'>
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Lashed Laroux Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header
