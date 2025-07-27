// Import
import type { Metadata } from 'next';

// Meta
export const metadata: Metadata = {
    title: 'rh3t.dev'
}

// Component
const Index = () => {
    return (

        <>

<<<<<<< HEAD
            Hello, world!
        
        </>
=======
            <LandingIntro></LandingIntro>

            <div style = {{marginTop: 25, gap: 25}} className = 'flexbox-centered'>

                <RedirectButton iconSrc = '/images/github.svg' text = 'GitHub' url = 'https://github.com/rh3t'/>
                <RedirectButton iconSrc = 'images/twitter.svg' text = 'Twitter' url = 'https://x.com/rh3t_'/>

            </div>

            <div style = {{marginTop: 25, gap: 25}} className = 'flexbox-centered'>

                <RedirectButton iconSrc = '/images/monkeytype.svg' text = 'MonkeyType' url = 'https://monkeytype.com/profile/Rh3t_'/>
                <RedirectButton iconSrc = '/images/discord.svg' text = 'Discord' url = '/'/>


            </div>

        </div>
>>>>>>> parent of d227463 (Commit v1.1.5)

    )
}

export default Index;