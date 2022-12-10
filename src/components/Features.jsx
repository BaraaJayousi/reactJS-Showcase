import React from 'react'

import assets  from '../assets'
import styles  from '../styles/Global'

const FeaturedCard = ({iconUrl, iconText}) => (
  <div className={styles.featureCard}> 
    <img src={iconUrl} alt="icon" className={styles.featureImg}/>
    <p className={styles.featureText}>{iconText}</p>
  </div>
)

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <dive>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>proNef has been developed using a cros-platform technology, react Native.</p>
        </dive>
        <dive className={styles.flexWrap}>
          <FeaturedCard iconUrl={assets.react} iconText="React Native"/>
          <FeaturedCard iconUrl={assets.javascript} iconText="Jave Scripit"/>
        </dive>
      </div>
    </div>
  )
}

export default Features