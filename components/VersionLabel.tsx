// Import
import './styles/VersionLabel.css';
import data from '@/public/meta.json';

// Component
export default function VersionLabel(){
    return (

        <p id = 'VersionLabel'>
            v{data.version} {data.build_date}
        </p>

    )
}