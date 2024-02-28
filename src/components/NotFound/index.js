import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme
        ? 'dark-theme-bg-container'
        : 'light-theme-bg-container'
      const descriptionTextClassName = isDarkTheme
        ? 'dark-theme-text'
        : 'light-theme-text'
      return (
        <div className={`app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="app-responsive-container">
            <div className="not-found-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-image"
              />
              <h1 className={`description-text ${descriptionTextClassName}`}>
                Lost Your Way?
              </h1>
              <p className={descriptionTextClassName}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
