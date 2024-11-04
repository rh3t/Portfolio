"use client"

// Import
import '@/styles/Button.css';

// Props
interface ButtonProps {
    func: () => void,
    iconSrc: string,
    children: React.ReactNode
}

// Component
export default function Button({iconSrc, children, func}: ButtonProps){
    return (

        <div id = 'Button' onClick = {func}>
            <img src = {iconSrc} width = {25}></img>
            <p>
                {children}
            </p>
        </div>

    )
}