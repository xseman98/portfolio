'use client'

import LandingComponent from '../src/components/Landing'
import TextSection from '../src/components/TextSection'
import QuickSection from '../src/components/QuickSection'
import styles from './Home.module.css'

export default function HomePage() {

  return (
    <div className={styles.container}>
      <LandingComponent />
      <TextSection sectionType='main'>
        Hi &#128075; I'm 23 years old IT student from Slovakia. I'm currently based in Brno 
        where <b>I study Open Informatics at <a href='https://pef.mendelu.cz/' target="_blank">PEF Mendelu</a></b> 
        and also <b>work as Junior JS Developer at <a href='https://www.purple-technology.com/' target="_blank">Purple Technology</a>.</b>
      </TextSection>
      <div className={styles.spacer}></div>
      <TextSection sectionType='main'>
        If you are interested in more details just select one of the section and keep reading
      </TextSection>
      <QuickSection />
    </div>
  );
}