// Import
import './styles/Navigation.css';

// Component
const Navigation = () => {
    return (

        <div id = 'Navigation' className = 'flex-center'>
            {'>'}
            <a href = '/'>Home</a>
            <a href = '/'>About</a>
            <a href = '/'>Projects</a>
            <a href = 'https://archive.rh3t.dev'>Archive</a>
            {'<'}
        </div>

    )
}

// Export
export default Navigation;