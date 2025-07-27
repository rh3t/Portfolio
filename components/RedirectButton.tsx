// Import
"use client";
import './styles/RedirectButton.css';

// Props
interface RedirectButtonProps {
    url: string,
    text: string,
    iconSrc: string
}

// Component
const RedirectButton = ({url, text, iconSrc}: RedirectButtonProps) => {

    const handleRedirect = (url: string) => {
        if (typeof window !== 'undefined'){
            window.open(url);
        }
    }

    return (
        
        <div id = 'RedirectButton' onClick = {() => handleRedirect(url)}>
            <img src = {iconSrc} width = {25}/>
            <p>{text}</p>
        </div>
        
    )

}

// Export
export default RedirectButton;