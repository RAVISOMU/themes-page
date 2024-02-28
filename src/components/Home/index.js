import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme
        ? 'dark-theme-bg-container'
        : 'light-theme-bg-container'
      const homeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeTextClassName = isDarkTheme
        ? 'dark-theme-home-text'
        : 'light-theme-home-text'
      return (
        <div className={`app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="app-responsive-container">
            <div className="home-icon-container">
              <img src={homeImageUrl} alt="home" className="home-image" />
              <h1 className={`home-text ${homeTextClassName}`}>Home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
