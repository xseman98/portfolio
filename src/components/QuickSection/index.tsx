import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import './style.css'

const QuickSection: React.FC = () => {
    const [showEduSection, setShowEduSection] = useState(false)
    const [showWorkSection, setShowWorkSection] = useState(false)

    const showDetail = (sectionName: string) => {
        if (sectionName === 'edu') {
            setShowEduSection(!showEduSection)
            setShowWorkSection(false)
            return
        }

        setShowWorkSection(!showWorkSection)
        setShowEduSection(false)
    } 

    const { ref: quickSectionComponent, inView: quickSectionComponentIsVisible } = useInView();
    const { ref: masters, inView: mastersIsVisible } = useInView();
    const { ref: bachelors, inView: bachelorsIsVisible } = useInView();
    const { ref: high, inView: highIsVisible } = useInView();
    const { ref: technology, inView: technologyIsVisible } = useInView();
    const { ref: academy, inView: academyIsVisible } = useInView();

	return (
		<section
            ref={quickSectionComponent}
            className={`quick ${quickSectionComponentIsVisible ? 'animateQuickSection' : ''}`}
        >
            <div 
                onClick={() => showDetail('edu')}
                className={`card ${showEduSection ? 'selected' : ''}`}
            >
                <h2>My education</h2>
                <p>Where and what I study.</p>
            </div>

            <div
                onClick={() => showDetail('work')}
                className={`card ${showWorkSection ? 'selected' : ''}`}
            >
                <h2>Work experience</h2>
                <p>Lets discover where I work.</p>
            </div>

            {showEduSection && <section className='edu'>
                <div ref={masters} className={`row ${mastersIsVisible ? 'animateRow' : ''}`}>
                    <div className='left'>
                        <img className='logo' src="/pef.png" alt="PEF Mendelu logo" />
                    </div>
                    <div className='right'>
                        <p className='subject'>Master's degree</p>
                        <p className='info'>2021 - Present</p>
                        <p className='value'>
                            Study in the Masters's Degree Programme of Open Informatics, field of study Open Informatics
                            at the faculty of Business and Economics of Mendel University in Brno.
                        </p>
                    </div>
                </div>
                <div ref={bachelors} className={`row ${bachelorsIsVisible ? 'animateRow' : ''}`}>
                    <div className='left'>
                        <p className='subject'>Bachelor's degree &#127891;</p>
                        <p className='info'>2018 - 2021</p>
                        <p className='value'>
                        University degree has been awarded on completing study in the Bachelor's Degree
                        Programme of Engineering Informatics, field of study Automation Control and Informatics
                        at the faculty of Business and Economics of Mendel University in Brno.
                        </p>
                    </div>
                    <div className='right'>
                        <img className='picture' src="/bc.png" alt="Picture with BC diploma" />
                    </div>
                </div>
                <div ref={high} className={`row ${highIsVisible ? 'animateRow' : ''}`}>
                    <div className='left'>
                        <img className='logo' src="/spse.png" alt="SPSE Presov logo" />
                    </div>
                    <div className='right'>
                        <p className='subject'>High school degree</p>
                        <p className='info'>2013 - 2017</p>
                        <p className='value'>
                        High school degree has been awarded on completing study at the SPŠE Prešov.
                        </p>
                    </div>
                </div>
            </section>}

            {showWorkSection && <section className='edu'>
                <div ref={technology} className={`row ${technologyIsVisible ? 'animateRow' : ''}`}>
                    <div className='left'>
                        <p className='subject'>Purple Technology</p>
                        <p className='info'>September 2022 - Present</p>
                        <p className='info'>Junior JS Developer at M-Team</p>
                        <p className='value'>
                        I have been a member of the maintenance team at Purple Technology since 
                        September 2022. My main job is solving critical and non-critical problems 
                        of clients across the portfolio of platforms build on React, Next JS and 
                        AWS services that our company mediates for FX trading.
                        </p>
                    </div>
                    <div className='right'>
                        <img className='logo' src="/purple.png" alt="Purple technology" />
                    </div>
                </div>
                <div ref={academy} className={`row ${academyIsVisible ? 'animateRow' : ''}`}>
                    <div className='left'>
                        <img className='logo' src="/purple.png" alt="Purple technology" />
                    </div>
                    <div className='right'>
                        <p className='subject'>Purple Academy</p>
                        <p className='info'>April 2022 - August 2022</p>
                        <p className='value'>
                        Before working full-time at Purple Technology, I participated in a 5-month academy 
                        where I was introduced to the technologies and processes used by the development 
                        teams at Purple. I got introduce to the basics of React, Next JS, AWS services and much more.
                        </p>
                    </div>
                </div>
            </section>}
        </section>
	)
}

export default QuickSection