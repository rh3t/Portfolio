// Import
import './styles/RepoButton.css';
import { sendToRepo } from '@/logic/RepoButton';

// Component
export default function RepoButton(){
    return (

        <p id = 'RepoButton' onClick = {sendToRepo}>
            Visit Repository
        </p>

    )
}