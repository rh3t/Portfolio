// Import
import data from '@/meta.json';
import './styles/VersionLabel.css';

// Component
const VersionLabel = () => {
    return (

        <p id = 'VersionLabel'>
            v{data.version} {data.build_date}
        </p>

    )
}

// Export
export default VersionLabel;