// Import
import './styles/OrbitDecal.css';

// Component
const OrbitDecal = ({size}: {size: number}) => {
    return (
        <div id = 'OrbitContainer' className = 'flex-center'>
            <img id = 'OrbitDecal' src = '/images/orbit.svg' width = {size}/>
        </div>
    )
}

// Export
export default OrbitDecal;