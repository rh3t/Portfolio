// Import
import './styles/Repository.css';

// Props
interface RepositoryProps {
    func?: () => void,
    title: string,
    color: string,
    children: React.ReactNode
}

// Component
export default function Repository({func, title, color, children}: RepositoryProps){
    return(

        <div className = 'default-border' id = 'RepositoryContainer' onClick = {func}>

            <div id = 'titleContainer'>
                <p style = {{color: color}}>{title}</p>
                <img src = '/images/github.svg' width = {25}></img>
            </div>

            {children}

        </div>

    )
}