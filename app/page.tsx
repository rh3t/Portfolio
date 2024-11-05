// Import
import type { Metadata } from 'next';
import Button from '@/components/Button';
import IconTray from '@/components/IconTray';
import LandingIntro from '@/components/LandingIntro';

import { sendToDiscord, sendToGitHub, sendToMonkeytype, sendToTwitter } from '@/logic/Buttons';

// Meta
export const metadata: Metadata = {
    title: 'home | rh3t.dev'
}

// Component
export default function Index(){
    return(

        <div className = 'default-border fade-in' style = {{padding: '60px'}}>

            <LandingIntro></LandingIntro>

            <div style = {{marginTop: 30}}>
                <IconTray imgSize = {30} imgGap = {45}></IconTray>
            </div>

            <div style = {{marginTop: 40, gap: 25}} className = 'flexbox-centered'>

                <Button hasIcon = {true} iconSrc = '/images/github.svg' func = {sendToGitHub}>
                    GitHub
                </Button>

                <Button hasIcon = {true} iconSrc = '/images/twitter.svg' func = {sendToTwitter}>
                    Twitter
                </Button>


            </div>

            <div style = {{marginTop: 25, gap: 25}} className = 'flexbox-centered'>

                <Button hasIcon = {true} iconSrc = '/images/monkeytype.svg' func = {sendToMonkeytype}>
                    Monkeytype
                </Button>

                <Button hasIcon = {true} iconSrc = '/images/discord.svg' func = {sendToDiscord}>
                    Discord
                </Button>


            </div>

        </div>

    )
}