// Import
import type { Metadata } from 'next';

// Meta Handler
export const metadata: Metadata = {
    title: 'about / rh3t.dev'
}

// Component
const about = () => {
    return (

        <div className = 'bordered-container slide-in-bottom flex-center' style = {{padding: '60px', flexDirection: 'column'}}>
            <img src = '/images/banner.png' width = {650}/>
            <div style = {{fontSize: '35px', marginTop: '15px'}}>
                Hey there, I'm <span style = {{color: 'var(--primary)'}}>Keegan</span>!
            </div>
            <div style = {{width: '700px', marginTop: '15px'}}>
                I’m based in the United States and currently studying software development—a passion that started as a hobby and has grown into a major part of my life over the past six years. <br/><br/> Alongside coding, I’ve gained hands-on experience in e-commerce and online social media marketing. (Fun fact: I type at 115 WPM!) On the technical side, my expertise focuses on web development, working with languages like HTML, JavaScript/TypeScript, and Python. <br/><br/> I frequently use frameworks and tools such as React with Next.js, Node, and Supabase to build modern, efficient applications. Even so, I’m always expanding my skillset, learning new technologies, and pushing myself to take on new challenges.
            </div>
        </div>

    )
}

// Export
export default about;