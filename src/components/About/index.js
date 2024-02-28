import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme
        ? 'dark-theme-bg-container'
        : 'light-theme-bg-container'
      const aboutImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const homeTextClassName = isDarkTheme
        ? 'dark-theme-about-text'
        : 'light-theme-about-text'
      return (
        <div className={`app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="app-responsive-container">
            <div className="about-icon-container">
              <img src={aboutImageUrl} alt="about" className="about-image" />
              <h1 className={`about-text ${homeTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
