// Import
import './styles/RepoButton.css';
import { toRepository } from '@/logic/ButtonLogic';

// Component
export default function RepoButton(){
    return (

        <p id = 'RepoButton' onClick = {toRepository}>
            Visit on GitHub
        </p>

    )
}