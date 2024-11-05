// Import
import './styles/Button.css';

// Props
interface ButtonProps {
    func: () => void,
    iconSrc?: string,
    children: React.ReactNode,
    hasIcon?: boolean
}

// Component
export default function Button({hasIcon, iconSrc, children, func}: ButtonProps){
    
    if (hasIcon == true){
        return (

            <div id = 'Button' onClick = {func}>
                <img src = {iconSrc} width = {25}></img>
                <p>
                    {children}
                </p>
            </div>
    
        )
    } else {
        return(

            <div id = 'Button' onClick = {func}>
                <p style = {{paddingLeft: 0}}>
                    {children}
                </p>
            </div>

        )
    }

}