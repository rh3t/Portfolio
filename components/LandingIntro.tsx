// Import
import IconTray from './IconTray';
import './styles/LandingIntro.css';

// Component
export default function LandingIntro(){
    return(

        <>

            <div id = 'LandingIntro' className = 'flexbox-centered'>
                <img src = '/images/book.png' width = {'65px'}></img>
                <p>
                    Hey there, <br></br> I'm <span className = 'special-text'>Rh3t_</span>.
                </p>
            </div>

            <p id = 'IntroComment' style = {{margin: '20px 0px 0px 0px'}}>
                (Or Keegan, or Rhet0rical, or Rhet, or anything else.)
            </p>

            <div style = {{marginTop: 25}}>
                <IconTray imgSize = {30} imgGap = {45}></IconTray>
            </div>

        </>

    )
}