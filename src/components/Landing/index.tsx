import React from 'react'
import { useInView } from 'react-intersection-observer';
import './style.css'

const Landing: React.FC = () => {
    const { 
        ref: landingComponent,
        inView: landingComponentIsVisible
    } = useInView();

	return (
		<section
            ref={landingComponent}
            className={`landing ${landingComponentIsVisible ? 'animateLanding' : ''}`}
        >
            <div>
                <img 
                    className='pic'
                    src="/profile.png"
                    alt="Profile picture"
                />
            </div>
            <div>
                <h1>Kristián Seman</h1>
                <p className='description'>Junior JS Developer</p>
            </div>
        </section>
	)
}

export default Landing