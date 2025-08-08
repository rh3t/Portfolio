// Import
import './styles/Version.css';
import data from '@/meta.json';

// Component
const Version = () => {
    return (

        <div id = 'Version'>
            ({data.version}-{data.date}) <a href = 'https://github.com/rh3t/Portfolio'>Visit on GitHub</a>
        </div>

    )
}

// Export
export default Version;