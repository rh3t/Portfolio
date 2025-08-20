// Import
import './styles/Navigation.css';

// Component
const Navigation = () => {
    return (

        <div id = 'Navigation' className = 'flex-center'>
            {'>'}
            <a href = '/'>Home</a>
            <a href = '/about'>About</a>
            
            {/*
            <a href = '/projects'>Projects</a>
            <a href = '/archive'>Archive</a>
            */}
            {'<'}
        </div>

    )
}

// Export
export default Navigation;