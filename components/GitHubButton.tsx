// Import
import '@/styles/GitHubButton.css';
import { sendToRepo } from '@/logic/GitHubButton';

// Component
export default function GitHubButton(){
    return (

        <p id = 'GitHubButton' onClick = {sendToRepo}>
            Visit Repository on GitHub
        </p>

    )
}