// Import
import './styles/IconTray.css';

// Props
interface IconTrayProps {
    imgGap: number,
    imgSize: number
}

// Component
export default function IconTray({imgGap, imgSize}: IconTrayProps){
    return (

        <div id = 'IconTray' className = 'flexbox-centered' style = {{gap: imgGap}}>
            <p>~</p>
            <img src = '/images/html.svg' width = {imgSize}></img>
            <img src = '/images/css.svg' width = {imgSize}></img>
            <img src = '/images/typescript.svg' width = {imgSize}></img>
            <img src = '/images/next-js.svg' width = {imgSize}></img>
            <img src = '/images/react.svg' width = {imgSize}></img>
            <p>~</p>
        </div>

    )
}