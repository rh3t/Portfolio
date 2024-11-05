// Import
import './styles/LandingIntro.css';

// Component
export default function LandingIntro(){
    return(

        <div id = 'LandingIntro' className = 'flexbox-centered'>
            <img src = '/images/Icon.png' width = {'65px'}></img>
            <p>
                Hi there, <br></br> I'm <span className = 'special-text'>Rh3t_</span>.
            </p>
        </div>

    )
}