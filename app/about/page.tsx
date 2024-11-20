// Import
import type { Metadata } from 'next';
import AboutBanner from '@/components/AboutBanner';
import RedirectButton from '@/components/RedirectButton';

// Meta
export const metadata: Metadata = {
    title: 'about | rh3t.dev'
}

// Component
const About = () => {
    return(

        <div className = 'flexbox-centered default-border fade-in' style = {{padding: '50px', flexDirection: 'column'}}>
            <AboutBanner></AboutBanner>
            <p id = 'aboutDescription' style = {{paddingBottom: 15}}>
                I'm Keegan. I'm currently located in the United States studying software development, which while initially a hobby, has now taken over my life for about 6 years. I've also put time into e-commerce and online social media marketing. I also have a WPM of 115, which is cool. <br></br><br></br> Technically, my experience mainly includes web languages such as HTML, JavaScript (or TypeScript), and Python utilizing tools such as React with Next.js, Node, and Supabase. Despite that though, my skillset expands by the day.
            </p>
            <RedirectButton iconSrc = '/images/mail.svg' text = 'Contact Me' url = 'mailto:keegan@rh3t.dev'/>
        </div>

    )
}

// Export
export default About;