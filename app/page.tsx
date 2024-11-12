// Import
import type { Metadata } from 'next';
import Button from '@/components/Button';
import LandingIntro from '@/components/LandingIntro';
import { toDiscord, toGitHub, toMonkeyType, toTwitter } from '@/logic/ButtonLogic';

// Meta
export const metadata: Metadata = {
    title: 'home | rh3t.dev'
}

// Component
export default function Index(){
    return(

        <div className = 'default-border fade-in' style = {{padding: '60px'}}>

            <LandingIntro></LandingIntro>

            <div style = {{marginTop: 40, gap: 25}} className = 'flexbox-centered'>

                <Button hasIcon = {true} iconSrc = '/images/github.svg' func = {toGitHub}>
                    GitHub
                </Button>

                <Button hasIcon = {true} iconSrc = '/images/twitter.svg' func = {toTwitter}>
                    Twitter
                </Button>


            </div>

            <div style = {{marginTop: 25, gap: 25}} className = 'flexbox-centered'>

                <Button hasIcon = {true} iconSrc = '/images/monkeytype.svg' func = {toMonkeyType}>
                    Monkeytype
                </Button>

                <Button hasIcon = {true} iconSrc = '/images/discord.svg' func = {toDiscord}>
                    Discord
                </Button>


            </div>

        </div>

    )
}