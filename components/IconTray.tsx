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
            <img src = '/images/icons/html.svg' width = {imgSize}></img>
            <img src = '/images/icons/css.svg' width = {imgSize}></img>
            <img src = '/images/icons/typescript.svg' width = {imgSize}></img>
            <img src = '/images/icons/next-js.svg' width = {imgSize}></img>
            <img src = '/images/icons/react.svg' width = {imgSize}></img>
            <img src = '/images/icons/nodejs.svg' width = {imgSize}></img>
            <p>~</p>
        </div>

    )
}