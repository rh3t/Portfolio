// Import
import './styles/SolarDecal.css';

// Component
export default function SolarDecal({size}: {size: number}){
    return(

        <div id = 'SolarDecalContainer'>
            <img id = 'SolarDecal' src = '/images/SolarDecal.svg' width = {size}></img>
        </div>

    )
}