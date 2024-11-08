// Import
import './styles/RepoButton.css';
import { sendToRepo } from '@/logic/Buttons';

// Component
export default function RepoButton(){
    return (

        <p id = 'RepoButton' onClick = {sendToRepo}>
            Visit on GitHub
        </p>

    )
}