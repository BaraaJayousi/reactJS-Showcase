
import {Download, Features, SectionWrapper} from './components';

import assets from './assets';
import styles from './styles/Global'
  
const App = () => {
  return (
    <>
      
      <SectionWrapper
        title = "this is good section & growing"
        description=" Buy, store, collect NFTS, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={assets.homeHero}
        banner= "banner"
        />
        
      <SectionWrapper
        title = "Smart User Interface Marketplace"
        description=" Expericnec a buttery UI of ProNef NFT Marketplace. Smooth constant colors of a fluent UI desing."
        
        mockupImg={assets.homeCards}
        reverse
        />

      <Features/>

      <SectionWrapper
        title = "Deployment"
        description=" ProNef is built using Expo which runs natively on all users devices. You can easily get your app into peopl's hands"
        
        mockupImg={assets.feature}
        reverse
        />
        
      <SectionWrapper
        title = "Creative way to showxase the store"
        description="The app contains two screens. One for the list of all the NFTs and the other for detials regarding the selected NFT"
        mockupImg={assets.mockup}
        banner="banner02"
        />

        <Download/>

        <div className="px-4 py-6 justify-center items-center bg-primary flex-col text-center banner04">
          <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}</p>
            <span className="bold">
              Baraa Jayousi
            </span>
        </div>
    </>
  );
}

export default App;
