// Import
import type { Metadata } from 'next';
import Button from '@/components/Button';
import { sendToEmail } from '@/logic/Buttons';

// Meta
export const metadata: Metadata = {
    title: 'about | rh3t.dev'
}

// Component
export default function AboutPage(){
    return(

        <div className = 'default-border fade-in flexbox-centered' style = {{padding: '30px 60px', flexDirection: 'column'}}>
            <img src = '/images/banner.png' width = {450}></img>
            <p id = 'aboutTitle'>
                Nice to meet <span className = 'special-text'>you</span>!
            </p>
            <p id = 'aboutDescription' style = {{paddingBottom: 10}}>
                I'm Keegan. This is me and my cat. <br></br><br></br> I've spent my life around complex numbers and words. I've dedicated time to learning software development, e-commerce systems, online marketing platforms, and social media interaction and advertisement for about 6 years. I've always put in effort to expand my knowledge and explore new ideas. <br></br><br></br> I mainly have experience in languages such as HTML, JavaScript, TypeScript, and Python, and libraries such as React, Next.js, and Supabase, including data storage and server software such as CloudFlare and Firebase.
            </p>
            <Button hasIcon = {true} iconSrc = '/images/mail.svg' func = {sendToEmail}>Contact Me</Button>
        </div>

    )
}