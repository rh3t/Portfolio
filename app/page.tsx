// Import
import type { Metadata } from 'next';
import Button from '@/components/Button';
import StackList from '@/components/StackList';
import { toDiscord, toGitHub, toEmail, toSteam, toX } from '@/logic/Redirect';

// Meta Handler
export const metadata: Metadata = {
    title: 'rh3t.dev'
}

// Component
const Index = () => {
    return (

        <>
        
            <div className = 'bordered-container slide-in-bottom' style = {{padding: '60px 70px', flexDirection: 'column'}}>
                
                <div className = 'flex-center'>
                    <img id = 'intro-img' src = '/images/scaled-icon.png' width = {50}/>
                    <span id = 'intro-text'>
                        Hey there, I'm<br/><span className = 'priority-text'>Rh3t</span>!<span id = 'intro-text-small'>(or Keegan..!)</span>
                    </span>
                </div>
                
                <div style = {{paddingTop: '25px'}}>
                    <StackList padding = {30} size = {30}/>
                </div>

                <div style = {{paddingTop: '25px', gap: '15px'}} className = 'flex-center'>
                    <Button src = '/icons/social/discord.svg' width = {75} height = {30} func = {toDiscord}/>
                    <Button src = '/icons/social/github.svg' width = {75} height = {30} func = {toGitHub}/>
                    <Button src = '/icons/social/mail.svg' width = {75} height = {30} func = {toEmail}/>
                    <Button src = '/icons/social/steam.svg' width = {75} height = {30} func = {toSteam}/>
                    <Button src = '/icons/social/x.svg' width = {75} height = {30} func = {toX}/>
                </div>

                <div id = 'intro-desc' style = {{paddingTop: '25px'}} className = 'flex-center'>
                    <div style = {{width: '650px'}}>
                        Nice to meet you! I'm a 18 y/o software developer located in the southern region of Michigan. I mainly work on frontend web design and management, but take a look around and see for yourself!
                    </div>
                </div>

            </div>
        
        </>

    )
}

// Export
export default Index;