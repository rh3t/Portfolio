// Import
import './styles/Button.css';

// Props
interface ButtonProps {
    func?: () => void
    src?: string
    text?: string
    width: number
    height?: number
}

// Component
const Button = ({text, src, func, width, height}: ButtonProps) => {

    if (text) {
        return (

            <div id = 'Button' className = 'flex-center' onClick = {func} style = {{width: width, height: height}}>
                {text}
            </div>

        )
    } else {
        return (

            <div id = 'Button' className = 'flex-center' onClick = {func} style = {{width: width, height: height}}>
                <img src = {src} width = {25}/> 
            </div>

        )
    }

}

// Export
export default Button;