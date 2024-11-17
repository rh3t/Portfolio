// Import
import data from '@/meta.json';
import './styles/VersionLabel.css';

// Component
export default function VersionLabel(){
    return (

        <p id = 'VersionLabel'>
            v{data.version} {data.build_date}
        </p>

    )
}