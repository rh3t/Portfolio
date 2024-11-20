// Import
import './styles/AboutBanner.css';

// Component
const AboutBanner = () => {
    return(

        <div id = 'AboutBanner'>
            <img src = '/images/banner.png' width = {450}></img>
            <p>
                Nice to meet <span className = 'special-text'>you</span>!
            </p>
        </div>

    )
}

// Export
export default AboutBanner;