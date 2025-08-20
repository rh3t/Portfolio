// Import
import type { Metadata } from 'next';
import Button from '@/components/Button';
import StackList from '@/components/StackList';
import { toDiscord, toGitHub, toEmail, toSteam, toTwitch, toMonkey } from '@/logic/Redirect';

// Meta Handler
export const metadata: Metadata = {
    title: 'home / rh3t.dev'
}

// Component
const Index = () => {
    return (

        <>
        
            <div className = 'bordered-container slide-in-bottom' style = {{padding: '60px'}}>
                
                <div className = 'flex-center'>
                    <img id = 'intro-img' src = '/images/scaled-icon.png' width = {50}/>
                    <span id = 'intro-text'>
                        Hey there, I'm<br/><span className = 'priority-text'>Rh3t</span>!<span id = 'intro-text-small'>(or Keegan..!)</span>
                    </span>
                </div>
                
                <div style = {{paddingTop: '25px'}}>
                    <StackList padding = {30} size = {30}/>
                </div>

                <div style = {{paddingTop: '25px', gap: '20px'}} className = 'flex-center'>
                    <Button src = '/icons/social/discord.svg' width = {70} height = {60} func = {toDiscord}/>
                    <Button src = '/icons/social/github.svg' width = {70} height = {60} func = {toGitHub}/>
                    <Button src = '/icons/social/steam.svg' width = {70} height = {60} func = {toSteam}/>
                    <Button src = '/icons/social/twitch.svg' width = {70} height = {60} func = {toTwitch}/>
                    <Button src = '/icons/social/monkey.svg' width = {70} height = {60} func = {toMonkey}/>
                    <Button src = '/icons/social/mail.svg' width = {70} height = {60} func = {toEmail}/>
                </div>

                <div id = 'intro-desc' style = {{paddingTop: '25px'}} className = 'flex-center'>
                    <div style = {{width: '600px'}}>
                        Nice to meet you! I’m a U.S. based software developer with 7+ years of experience in web development, e-commerce, and social media marketing, specializing in modern tools like React, Next.js, Node, and Supabase.
                    </div>
                </div>

            </div>
        
        </>

    )
}

// Export
export default Index;