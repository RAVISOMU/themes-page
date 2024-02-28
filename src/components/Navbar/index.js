import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }
      const navbarTheme = isDarkTheme
        ? 'dark-theme-navbar'
        : 'light-theme-navbar'
      const logoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const navHeadingsClassName = isDarkTheme
        ? 'dark-theme-nav-headings'
        : 'light-theme-nav-headings'
      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={`navbar ${navbarTheme}`}>
          <img src={logoUrl} alt="website logo" className="website-logo" />
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className={`nav-link ${navHeadingsClassName}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className={`nav-link ${navHeadingsClassName}`}>
                About
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            type="button"
            className="theme-button"
            onClick={onChangeTheme}
          >
            <img src={themeImageUrl} alt="theme" className="theme-image" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
